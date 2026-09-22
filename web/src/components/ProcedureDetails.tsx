import {
  useEffect,
  useMemo,
  useState,
} from "react";

import type { Procedure } from "../data/procedures";
import Icon from "./Icon";

type ProcedureDetailsProps = {
  procedure: Procedure;
  onBack: () => void;
  onNext?: () => void;
  nextProcedureTitle?: string;
  isOnline?: boolean;
};

type QuizQuestion =
  NonNullable<
    Procedure["quiz"]
  >[number];

type PreparedQuestion =
  QuizQuestion & {
    shuffledOptions: string[];
  };

type SavedQuizProgress = {
  procedureId: string;
  answers: Record<number, string>;
  currentQuestion: number;
  selectedAnswer: string | null;
  showResults: boolean;
  completed: boolean;
  score: number;
  savedAt: string;
};

const SAVE_PROGRESS_KEY =
  "nct-save-progress";

const QUIZ_PROGRESS_PREFIX =
  "nct-quiz-progress-";

function shuffle<T>(
  items: T[]
): T[] {
  const result = [...items];

  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {
    const j = Math.floor(
      Math.random() * (i + 1)
    );

    [result[i], result[j]] = [
      result[j],
      result[i],
    ];
  }

  return result;
}

function getYouTubeId(
  url?: string
): string | null {
  if (!url) return null;

  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/
  );

  return match
    ? match[1]
    : null;
}

function getYouTubeEmbedUrl(
  url?: string
): string | null {
  if (!url) return null;

  const id =
    getYouTubeId(url);

  if (!id) {
    if (
      url.includes(
        "youtube-nocookie.com/embed/"
      )
    ) {
      return url;
    }

    return url;
  }

  return `https://www.youtube.com/embed/${id}`;
}

function getYouTubeWatchUrl(
  url?: string
): string | null {
  if (!url) return null;

  const id =
    getYouTubeId(url);

  if (!id) return url;

  return `https://www.youtube.com/watch?v=${id}`;
}

function isSaveProgressEnabled(): boolean {
  try {
    const value =
      localStorage.getItem(
        SAVE_PROGRESS_KEY
      );

    /*
     * Default ON for existing users.
     */
    return value === null
      ? true
      : value === "true";
  } catch {
    return true;
  }
}

function getQuizStorageKey(
  procedureId: string
): string {
  return `${QUIZ_PROGRESS_PREFIX}${procedureId}`;
}

function loadQuizProgress(
  procedureId: string
): SavedQuizProgress | null {
  if (
    !isSaveProgressEnabled()
  ) {
    return null;
  }

  try {
    const saved =
      localStorage.getItem(
        getQuizStorageKey(
          procedureId
        )
      );

    if (!saved) {
      return null;
    }

    const parsed: unknown =
      JSON.parse(saved);

    if (
      !parsed ||
      typeof parsed !== "object"
    ) {
      return null;
    }

    const progress =
      parsed as Partial<SavedQuizProgress>;

    if (
      progress.procedureId !==
      procedureId
    ) {
      return null;
    }

    return {
      procedureId,
      answers:
        progress.answers &&
        typeof progress.answers ===
          "object"
          ? progress.answers
          : {},
      currentQuestion:
        typeof progress.currentQuestion ===
        "number"
          ? progress.currentQuestion
          : 0,
      selectedAnswer:
        typeof progress.selectedAnswer ===
        "string"
          ? progress.selectedAnswer
          : null,
      showResults:
        progress.showResults === true,
      completed:
        progress.completed === true,
      score:
        typeof progress.score ===
        "number"
          ? progress.score
          : 0,
      savedAt:
        typeof progress.savedAt ===
        "string"
          ? progress.savedAt
          : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

function saveQuizProgress(
  progress: SavedQuizProgress
) {
  if (
    !isSaveProgressEnabled()
  ) {
    return;
  }

  try {
    localStorage.setItem(
      getQuizStorageKey(
        progress.procedureId
      ),
      JSON.stringify(progress)
    );
  } catch {
    // Ignore localStorage errors.
  }
}

function removeQuizProgress(
  procedureId: string
) {
  try {
    localStorage.removeItem(
      getQuizStorageKey(
        procedureId
      )
    );
  } catch {
    // Ignore storage errors.
  }
}

export default function ProcedureDetails({
  procedure,
  onBack,
  onNext,
  nextProcedureTitle,
  isOnline = true,
}: ProcedureDetailsProps) {
  const quizzes =
    procedure.quiz ?? [];

  const [activeTab, setActiveTab] =
    useState<
      "details" | "video" | "quiz"
    >("details");

  const [quizStarted, setQuizStarted] =
    useState(false);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);

  const [answers, setAnswers] =
    useState<
      Record<number, string>
    >({});

  const [showResults, setShowResults] =
    useState(false);

  const [attempt, setAttempt] =
    useState(0);

  const [videoError, setVideoError] =
    useState(false);

  const [videoUnlocked, setVideoUnlocked] =
    useState(false);

  const [insufficientStars, setInsufficientStars] =
    useState(false);

  const [quizUnlocked, setQuizUnlocked] =
    useState(false);

  const [quizUnlockError, setQuizUnlockError] =
    useState<string | null>(null);

  // Timer state for timed quiz
  const [timeRemaining, setTimeRemaining] =
    useState<number>(120); // 2 minutes in seconds

  const [timerActive, setTimerActive] =
    useState(false);

  const [extraTimeRequested, setExtraTimeRequested] =
    useState(false);

  const [adLoading, setAdLoading] =
    useState(false);

  /*
   * Prepare randomized options.
   */
  const questions =
    useMemo<
      PreparedQuestion[]
    >(() => {
      return quizzes.map(
        (quiz) => ({
          ...quiz,
          shuffledOptions:
            shuffle(
              quiz.options
            ),
        })
      );
    }, [quizzes, attempt]);

  const question =
    questions[
      currentQuestion
    ];

  /*
   * Calculate score from the saved/current
   * answers.
   */
  const score =
    quizzes.reduce(
      (
        total,
        quiz,
        index
      ) =>
        total +
        (answers[index] ===
        quiz.answer
          ? 1
          : 0),
      0
    );

  /*
   * Load saved progress when the procedure
   * is opened.
   */
  useEffect(() => {
    if (!procedure.id) {
      return;
    }

    setActiveTab("details");
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers({});
    setShowResults(false);
    setVideoError(false);
    setVideoUnlocked(false);
    setInsufficientStars(false);
    setQuizUnlocked(false);
    setQuizUnlockError(null);

    const saved =
      loadQuizProgress(
        procedure.id
      );

    if (!saved) {
      return;
    }

    /*
     * Do not restore an invalid question
     * index.
     */
    const safeQuestion =
      Math.min(
        Math.max(
          saved.currentQuestion,
          0
        ),
        Math.max(
          quizzes.length - 1,
          0
        )
      );

    setAnswers(
      saved.answers ?? {}
    );

    setCurrentQuestion(
      safeQuestion
    );

    setSelectedAnswer(
      saved.selectedAnswer ??
        null
    );

    setShowResults(
      saved.showResults
    );

    /*
     * If there is saved quiz activity,
     * restore the quiz tab/state.
     */
    if (
      saved.completed ||
      Object.keys(
        saved.answers ?? {}
      ).length > 0
    ) {
      setQuizStarted(true);
      setQuizUnlocked(true);
      setActiveTab("quiz");
    }
  }, [procedure.id, quizzes.length]);

  /*
   * Save progress whenever quiz state changes.
   *
   * This only runs when Save Progress is ON.
   */
  useEffect(() => {
    if (
      !quizStarted ||
      quizzes.length === 0 ||
      !procedure.id
    ) {
      return;
    }

    if (
      !isSaveProgressEnabled()
    ) {
      return;
    }

    saveQuizProgress({
      procedureId:
        procedure.id,

      answers,

      currentQuestion,

      selectedAnswer,

      showResults,

      completed:
        showResults,

      score,

      savedAt:
        new Date().toISOString(),
    });
  }, [
    procedure.id,
    quizStarted,
    answers,
    currentQuestion,
    selectedAnswer,
    showResults,
    score,
    quizzes.length,
  ]);

  /*
   * If the user turns Save Progress OFF
   * while this component is open, don't
   * continue writing progress.
   *
   * We intentionally don't delete existing
   * progress here. The setting only controls
   * whether progress is saved.
   */

  const startQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResults(false);

    // Reset timer to 2 minutes (120 seconds)
    setTimeRemaining(120);
    setTimerActive(true);
    setExtraTimeRequested(false);

    setAttempt(
      (value) => value + 1
    );

    setQuizStarted(true);
    setQuizUnlocked(true);
    setActiveTab("quiz");

    /*
     * Starting a new attempt replaces the
     * previous saved attempt.
     */
    if (
      isSaveProgressEnabled() &&
      procedure.id
    ) {
      removeQuizProgress(
        procedure.id
      );
    }
  };

  // Timer effect for countdown
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (timerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Time expired - end quiz
            setTimerActive(false);
            setShowResults(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timerActive]);

  // Format time as MM:SS
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle extra time from rewarded ad
  const requestExtraTime = async () => {
    if (!isOnline) {
      return;
    }

    setAdLoading(true);

    try {
      const { adService, canWatchRewardedAd } = await import('../services/adService');

      if (!canWatchRewardedAd()) {
        setAdLoading(false);
        return;
      }

      const result = await adService.showRewardedAd();

      if (result.success) {
        // Add 3 minutes (180 seconds) to current timer
        setTimeRemaining((prev) => prev + 180);
        setExtraTimeRequested(true);
      }
    } catch {
      // Ignore errors silently
    } finally {
      setAdLoading(false);
    }
  };

  // Handle retry quiz with payment
  const retryQuiz = () => {
    if (!isOnline) {
      return;
    }

    import('../services/creditService').then(({ canSpend, spendStars }) => {
      if (!canSpend(2)) {
        setQuizUnlockError('INSUFFICIENT_STARS');
        return;
      }
      
      const success = spendStars(2, "Quiz retry");
      if (success) {
        setQuizUnlockError(null);
        // Dispatch custom event for App.tsx to update balance
        window.dispatchEvent(new CustomEvent('stars-updated'));
        startQuiz();
      } else {
        setQuizUnlockError('INSUFFICIENT_STARS');
      }
    });
  };

  const nextQuestion = () => {
    if (
      !question ||
      !selectedAnswer
    ) {
      return;
    }

    const updatedAnswers = {
      ...answers,
      [currentQuestion]:
        selectedAnswer,
    };

    setAnswers(
      updatedAnswers
    );

    if (
      currentQuestion ===
      questions.length - 1
    ) {
      /*
       * Calculate the final score using
       * the updated answer immediately.
       */
      const finalScore =
        quizzes.reduce(
          (
            total,
            quiz,
            index
          ) =>
            total +
            (updatedAnswers[
              index
            ] === quiz.answer
              ? 1
              : 0),
          0
        );

      setShowResults(
        true
      );

      if (
        isSaveProgressEnabled() &&
        procedure.id
      ) {
        saveQuizProgress({
          procedureId:
            procedure.id,

          answers:
            updatedAnswers,

          currentQuestion,

          selectedAnswer,

          showResults: true,

          completed: true,

          score:
            finalScore,

          savedAt:
            new Date().toISOString(),
        });
      }

      return;
    }

    setCurrentQuestion(
      (value) => value + 1
    );

    setSelectedAnswer(
      null
    );
  };

  const clearSavedProgress = () => {
    if (!procedure.id) {
      return;
    }

    removeQuizProgress(
      procedure.id
    );

    setAnswers({});
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResults(false);
    setQuizStarted(false);
    setQuizUnlocked(false);
    setQuizUnlockError(null);

    setActiveTab("quiz");
  };

  const videoEmbedUrl =
    getYouTubeEmbedUrl(
      procedure.videoUrl
    );

  const videoWatchUrl =
    getYouTubeWatchUrl(
      procedure.videoUrl
    );

  return (
    <section className="procedure-details">

      {/* ================= BACK ================= */}

      <button
        type="button"
        className="back-button procedure-details-back"
        onClick={onBack}
        aria-label="Return to the procedure list"
      >
        <span aria-hidden="true"><Icon name="arrowLeft" size={18} /></span>
        Back to procedures
      </button>

      {/* ================= HEADER ================= */}

      <div className="procedure-detail-header">

        <div className="procedure-detail-eyebrow">
          <span className="procedure-card-category">
            {procedure.category}
          </span>
          <span className="procedure-id">
            Procedure {procedure.id}
          </span>
        </div>

        <h1>
          {procedure.title}
        </h1>

        <p>
          {procedure.overview}
        </p>

        <div className="procedure-detail-summary">
          <span>
            <strong>
              {procedure.steps.length}
            </strong>
            steps
          </span>
          <span>
            <strong>
              {procedure.equipment.length}
            </strong>
            requirements
          </span>
          <span>
            <strong>
              {quizzes.length}
            </strong>
            quiz questions
          </span>
        </div>

      </div>

      {/* ================= TABS ================= */}

      <div
        role="tablist"
        aria-label="Procedure sections"
        className="procedure-tabs"
      >

        <button
          id="procedure-tab-detail"
          type="button"
          role="tab"
          aria-controls="procedure-panel-detail"
          aria-selected={
            activeTab ===
            "details"
          }
          className={`procedure-tab ${
            activeTab ===
            "details"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setActiveTab(
              "details"
            )
          }
        >
          <span aria-hidden="true"><Icon name="document" size={18} /></span>
          Detail
        </button>

        <button
          id="procedure-tab-video"
          type="button"
          role="tab"
          aria-controls="procedure-panel-video"
          aria-selected={
            activeTab ===
            "video"
          }
          className={`procedure-tab ${
            activeTab ===
            "video"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setActiveTab(
              "video"
            )
          }
        >
          <span aria-hidden="true"><Icon name="video" size={18} /></span>
          Video
        </button>

        <button
          id="procedure-tab-quiz"
          type="button"
          role="tab"
          aria-controls="procedure-panel-quiz"
          aria-selected={
            activeTab ===
            "quiz"
          }
          className={`procedure-tab ${
            activeTab ===
            "quiz"
              ? "active"
              : ""
          }`}
          onClick={() =>
            setActiveTab(
              "quiz"
            )
          }
        >
          <span aria-hidden="true"><Icon name="question" size={18} /></span>
          Quiz

          {quizzes.length >
            0 &&
            ` · ${quizzes.length}`}
        </button>

      </div>

      {/* ================= DETAILS ================= */}

      {activeTab ===
        "details" && (
        <div
          id="procedure-panel-detail"
          role="tabpanel"
          aria-labelledby="procedure-tab-detail"
          className="procedure-detail-content"
        >

          <div className="procedure-detail-section">
            <h2>
              Purpose
            </h2>

            <ul>
              {procedure.purpose.map(
                (
                  item,
                  index
                ) => (
                  <li
                    key={index}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="procedure-detail-section">
            <h2>
              Indications
            </h2>

            <ul>
              {procedure.indications.map(
                (
                  item,
                  index
                ) => (
                  <li
                    key={index}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="procedure-detail-section">
            <h2>
              Requirements
            </h2>

            <ul>
              {procedure.equipment.map(
                (
                  item,
                  index
                ) => (
                  <li
                    key={index}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="procedure-detail-section">
            <h2>
              Procedure Steps
            </h2>

            <ol className="procedure-steps">
              {procedure.steps.map(
                (
                  step,
                  index
                ) => (
                  <li
                    key={index}
                  >
                    <span>
                      {index + 1}
                    </span>

                    <p>
                      {step}
                    </p>
                  </li>
                )
              )}
            </ol>
          </div>

          <div className="procedure-detail-section">
            <h2>
              Precautions
            </h2>

            <ul>
              {procedure.precautions.map(
                (
                  item,
                  index
                ) => (
                  <li
                    key={index}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {quizzes.length >
            0 && (
            <button
              type="button"
              className="inline-quiz-button"
              disabled={!isOnline || !quizUnlocked}
              onClick={() => {
                if (!isOnline) {
                  return;
                }
                if (!quizUnlocked) {
                  import('../services/creditService').then(({ canSpend, spendStars }) => {
                    if (!canSpend(2)) {
                      setQuizUnlockError('INSUFFICIENT_STARS');
                      return;
                    }
                    
                    const success = spendStars(2, "Premium quiz");
                    if (success) {
                      setQuizUnlocked(true);
                      setQuizUnlockError(null);
                      window.dispatchEvent(new CustomEvent('stars-updated'));
                      startQuiz();
                    } else {
                      setQuizUnlockError('INSUFFICIENT_STARS');
                    }
                  });
                  return;
                }
                startQuiz();
              }}
            >
              <><Icon name="brain" size={18} /> Test Yourself — 2 <Icon name="star" size={16} /> <Icon name="arrowRight" size={16} /></>
            </button>
          )}

        </div>
      )}

      {/* ================= VIDEO ================= */}

      {activeTab ===
        "video" && (
        <div
          id="procedure-panel-video"
          role="tabpanel"
          aria-labelledby="procedure-tab-video"
          className="procedure-detail-content video-panel"
        >

          {!procedure.videoUrl ? (
            <div className="video-empty-state">

              <div className="video-empty-icon">
                <Icon name="video" size={42} />
              </div>

              <h2>
                No video available
              </h2>

              <p>
                No video demonstration is
                available for this procedure.
              </p>

            </div>
          ) : !videoUnlocked ? (
            <div className="video-lock-card">

              <div className="video-lock-icon">
                <Icon name="lock" size={42} />
              </div>

              <h2>
                Premium Video
              </h2>

              <p>
                This procedure includes a premium
                video demonstration.
              </p>

              {!isOnline ? (
                <p className="video-offline-message">
                  Internet connection required to watch this video.
                </p>
              ) : (
                insufficientStars && (
                  <p className="video-insufficient-stars">
                    You need 3 Stars to watch this video.
                  </p>
                )
              )}

              <button
                type="button"
                className="video-unlock-button"
                disabled={!isOnline}
                onClick={() => {
                  if (!isOnline) {
                    return;
                  }
                  import('../services/creditService').then(({ canSpend, spendStars }) => {
                    if (!canSpend(3)) {
                      setInsufficientStars(true);
                      return;
                    }
                    
                    const success = spendStars(3, "Premium video");
                    if (success) {
                      setVideoUnlocked(true);
                      setInsufficientStars(false);
                      // Dispatch custom event for App.tsx to update balance
                      window.dispatchEvent(new CustomEvent('stars-updated'));
                    } else {
                      setInsufficientStars(true);
                    }
                  });
                }}
              >
                Unlock Video for 3 Stars
              </button>

            </div>
          ) : !videoError &&
            videoEmbedUrl ? (
            <div className="procedure-detail-section">

              <div className="procedure-video">

                <iframe
                  src={
                    videoEmbedUrl
                  }
                  title={`${procedure.title} video demonstration`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  onError={() =>
                    setVideoError(
                      true
                    )
                  }
                />

              </div>

              {videoWatchUrl && (
                <button
                  type="button"
                  className="video-youtube-button"
                  disabled={!isOnline}
                  onClick={() => {
                    if (!isOnline) {
                      return;
                    }
                    window.open(
                      videoWatchUrl,
                      "_blank",
                      "noopener,noreferrer"
                    );
                  }}
                >
                  <><Icon name="video" size={18} /> Watch on YouTube</>
                </button>
              )}

              <p className="video-help-text">
                If the video cannot play inside
                the app, use the button above to
                open the original video.
              </p>

            </div>
          ) : (
            <div className="procedure-detail-section">

              <div className="video-fallback-card">

                <div className="video-fallback-icon">
                  ▶
                </div>

                <h3>
                  This video cannot be played
                  inside the app
                </h3>

                <p>
                  This video may have embedding
                  restrictions. You can watch it
                  directly on YouTube.
                </p>

                {videoWatchUrl && (
                  <button
                    type="button"
                    className="video-youtube-button"
                    onClick={() =>
                      window.open(
                        videoWatchUrl,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    <><Icon name="video" size={18} /> Watch on YouTube</>
                  </button>
                )}

              </div>

            </div>
          )}

        </div>
      )}

      {/* ================= QUIZ ================= */}

      {activeTab ===
        "quiz" && (
        <div
          id="procedure-panel-quiz"
          role="tabpanel"
          aria-labelledby="procedure-tab-quiz"
          className="procedure-quiz-panel"
        >

          {/* No questions */}

          {quizzes.length ===
            0 && (
            <div className="quiz-empty">

              <div className="quiz-empty-icon">
                <Icon name="quiz" size={42} />
              </div>

              <h2>
                Quiz coming soon
              </h2>

              <p>
                No quiz questions have been
                added to this procedure yet.
              </p>

            </div>
          )}

          {/* Quiz not started */}

          {quizzes.length >
            0 &&
            !quizStarted && (
            <div className="quiz-intro-card">

              <div className="quiz-intro-icon">
                <Icon name="brain" size={42} />
              </div>

              <span className="quiz-kicker">
                TEST YOURSELF
              </span>

              <h2>
                Check your knowledge
              </h2>

              <p>
                Answer all{" "}
                {quizzes.length}{" "}
                questions based on this
                procedure.
              </p>

              <div className="quiz-premium-indicator">
                <>Premium • 2 <Icon name="star" size={16} /></>
              </div>

              {!isOnline ? (
                <p className="quiz-offline-message">
                  Internet connection required to take this quiz.
                </p>
              ) : quizUnlockError === 'INSUFFICIENT_STARS' ? (
                <p className="quiz-insufficient-stars">
                  You need 2 Stars to take this quiz.
                </p>
              ) : null}

              <button
                type="button"
                className="quiz-primary-button"
                disabled={!isOnline}
                onClick={() => {
                  if (!isOnline) {
                    return;
                  }
                  import('../services/creditService').then(({ canSpend, spendStars }) => {
                    if (!canSpend(2)) {
                      setQuizUnlockError('INSUFFICIENT_STARS');
                      return;
                    }
                    
                    const success = spendStars(2, "Premium quiz");
                    if (success) {
                      setQuizUnlocked(true);
                      setQuizUnlockError(null);
                      // Dispatch custom event for App.tsx to update balance
                      window.dispatchEvent(new CustomEvent('stars-updated'));
                      startQuiz();
                    } else {
                      setQuizUnlockError('INSUFFICIENT_STARS');
                    }
                  });
                }}
              >
                <>Start Quiz — 2 <Icon name="star" size={16} /></>
              </button>

            </div>
          )}

          {/* Quiz results */}

          {quizStarted &&
            showResults && (
            <div className="quiz-result-card">

              <span className="quiz-kicker">
                QUIZ COMPLETE
              </span>

              <div className="quiz-score">
                {score}/
                {
                  quizzes.length
                }
              </div>

              <h2>
                {score ===
                quizzes.length
                  ? "Excellent work!"
                  : score >=
                    Math.ceil(
                      quizzes.length *
                        0.7
                    )
                  ? "Good work!"
                  : "Keep practising!"}
              </h2>

              <p>
                You answered{" "}
                {score} correctly
                out of{" "}
                {
                  quizzes.length
                }.
              </p>

              <div className="quiz-result-actions">

                {!isOnline ? (
                  <p className="quiz-offline-message">
                    Internet connection required to retry this quiz.
                  </p>
                ) : quizUnlockError === 'INSUFFICIENT_STARS' ? (
                  <p className="quiz-insufficient-stars">
                    You need 2 Stars to retry this quiz.
                  </p>
                ) : null}

                <button
                  type="button"
                  className="quiz-primary-button"
                  disabled={!isOnline}
                  onClick={retryQuiz}
                >
                  <>Retry Quiz — 2 <Icon name="star" size={16} /></>
                </button>

                <button
                  type="button"
                  className="quiz-secondary-button"
                  onClick={() =>
                    setActiveTab(
                      "details"
                    )
                  }
                >
                  Review Procedure
                </button>

              </div>

              <button
                type="button"
                className="quiz-secondary-button"
                onClick={
                  clearSavedProgress
                }
              >
                Clear Saved Progress
              </button>

            </div>
          )}

          {/* Active quiz */}

          {quizStarted &&
            !showResults &&
            question && (
            <div className="quiz-card">

              <div className="quiz-card-top">

                <span className="quiz-kicker">
                  QUESTION
                </span>

                <strong>
                  {currentQuestion +
                    1}{" "}
                  /{" "}
                  {
                    questions.length
                  }
                </strong>

              </div>

              {/* Timer display */}
              <div className={`quiz-timer ${timeRemaining <= 30 ? 'quiz-timer-warning' : ''}`}>
                <span><><Icon name="timer" size={16} /> Time remaining: {formatTime(timeRemaining)}</></span>
              </div>

              {/* Extra time button */}
              {!extraTimeRequested && (
                <button
                  type="button"
                  className="quiz-extra-time-button"
                  disabled={!isOnline || adLoading}
                  onClick={requestExtraTime}
                >
                  {adLoading ? 'Loading...' : '<><Icon name="megaphone" size={18} /> Watch Ad + Get 3 More Minutes</>'}
                </button>
              )}
              {extraTimeRequested && (
                <div className="quiz-extra-time-used">
                  <><Icon name="clock" size={18} /> Extra Time Used</>
                </div>
              )}

              <div
                className="quiz-progress"
                aria-hidden="true"
              >
                <span
                  style={{
                    width: `${
                      ((currentQuestion +
                        1) /
                        questions.length) *
                      100
                    }%`,
                  }}
                />
              </div>

              <h2 className="quiz-question-title">
                {
                  question.question
                }
              </h2>

              <div className="quiz-options-card">

                {question.shuffledOptions.map(
                  (
                    option,
                    index
                  ) => {

                    const selected =
                      selectedAnswer ===
                      option;

                    return (
                      <button
                        type="button"
                        key={option}
                        className={`quiz-answer ${
                          selected
                            ? "selected"
                            : ""
                        }`}
                        onClick={() =>
                          setSelectedAnswer(
                            option
                          )
                        }
                      >

                        <span className="quiz-answer-letter">
                          {String.fromCharCode(
                            65 +
                              index
                          )}
                        </span>

                        <span className="quiz-answer-text">
                          {
                            option
                          }
                        </span>

                        {selected && (
                          <span className="quiz-answer-check">
                            <Icon name="check" size={18} />
                          </span>
                        )}

                      </button>
                    );
                  }
                )}

              </div>

              <button
                type="button"
                className="quiz-next-button"
                disabled={
                  !selectedAnswer
                }
                onClick={
                  nextQuestion
                }
              >
                {currentQuestion ===
                questions.length -
                  1
                  ? "Finish Quiz"
                  : "Next Question"}

                <span>
                  →
                </span>
              </button>

            </div>
          )}

        </div>
      )}

      <div className="procedure-next-navigation">
        <div>
          <span className="procedure-next-kicker">
            CONTINUE LEARNING
          </span>
          <strong>
            {onNext
              ? "Next procedure"
              : "End of this category"}
          </strong>
          {onNext && nextProcedureTitle && (
            <small>{nextProcedureTitle}</small>
          )}
        </div>

        {onNext ? (
          <button
            type="button"
            className="procedure-next-button"
            onClick={onNext}
          >
            <span>Next Procedure</span>
            <span aria-hidden="true"><Icon name="arrowRight" size={18} /></span>
          </button>
        ) : (
          <span
            className="procedure-next-complete"
            aria-label="No more procedures in this category"
          >
            <><Icon name="check" size={18} /> Complete</>
          </span>
        )}
      </div>

    </section>
  );
        }
