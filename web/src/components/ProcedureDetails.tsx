import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import type { Procedure } from "../data/procedures";

type ProcedureDetailsProps = {
  procedure: Procedure;
  onBack: () => void;
  onNext?: () => void;
  nextProcedureTitle?: string;
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

    setAttempt(
      (value) => value + 1
    );

    setQuizStarted(true);
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
        className="back-button"
        onClick={onBack}
      >
        <span aria-hidden="true">←</span>
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
          <span aria-hidden="true">▤</span>
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
          <span aria-hidden="true">▶</span>
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
          <span aria-hidden="true">?</span>
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
              onClick={
                startQuiz
              }
            >
              🧠 Test Yourself →
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
                🎥
              </div>

              <h2>
                No video available
              </h2>

              <p>
                No video demonstration is
                available for this procedure.
              </p>

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
                  onClick={() =>
                    window.open(
                      videoWatchUrl,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  ▶ Watch on YouTube
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
                    ▶ Watch on YouTube
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
                📝
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
                🧠
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

              <button
                type="button"
                className="quiz-primary-button"
                onClick={
                  startQuiz
                }
              >
                Start Quiz
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

                <button
                  type="button"
                  className="quiz-primary-button"
                  onClick={
                    startQuiz
                  }
                >
                  Retry Quiz
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
                            ✓
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
            <span aria-hidden="true">→</span>
          </button>
        ) : (
          <span
            className="procedure-next-complete"
            aria-label="No more procedures in this category"
          >
            ✓ Complete
          </span>
        )}
      </div>

    </section>
  );
        }
