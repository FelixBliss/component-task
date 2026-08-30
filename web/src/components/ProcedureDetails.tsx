import React, { useMemo, useState } from "react";
import type { Procedure } from "../data/procedures";

type ProcedureDetailsProps = {
  procedure: Procedure;
  onBack: () => void;
};

type QuizQuestion = NonNullable<Procedure["quiz"]>[number];

type PreparedQuestion = QuizQuestion & {
  shuffledOptions: string[];
};

function shuffle<T>(items: T[]): T[] {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function getYouTubeId(url?: string): string | null {
  if (!url) return null;

  const match = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/
  );

  return match ? match[1] : null;
}

function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;

  const id = getYouTubeId(url);

  if (!id) {
    if (url.includes("youtube-nocookie.com/embed/")) {
      return url;
    }

    return url;
  }

  return `https://www.youtube.com/embed/${id}`;
}

function getYouTubeWatchUrl(url?: string): string | null {
  if (!url) return null;

  const id = getYouTubeId(url);

  if (!id) return url;

  return `https://www.youtube.com/watch?v=${id}`;
}

export default function ProcedureDetails({
  procedure,
  onBack,
}: ProcedureDetailsProps) {
  const quizzes = procedure.quiz ?? [];

  const [activeTab, setActiveTab] =
    useState<"details" | "quiz">("details");

  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] =
    useState<string | null>(null);

  const [answers, setAnswers] =
    useState<Record<number, string>>({});

  const [showResults, setShowResults] = useState(false);
  const [attempt, setAttempt] = useState(0);

  const [videoError, setVideoError] = useState(false);

  const questions = useMemo<PreparedQuestion[]>(() => {
    return quizzes.map((quiz) => ({
      ...quiz,
      shuffledOptions: shuffle(quiz.options),
    }));
  }, [quizzes, attempt]);

  const question = questions[currentQuestion];

  const score = quizzes.reduce(
    (total, quiz, index) =>
      total + (answers[index] === quiz.answer ? 1 : 0),
    0
  );

  const startQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResults(false);
    setAttempt((value) => value + 1);
    setQuizStarted(true);
    setActiveTab("quiz");
  };

  const nextQuestion = () => {
    if (!question || !selectedAnswer) return;

    const updatedAnswers = {
      ...answers,
      [currentQuestion]: selectedAnswer,
    };

    setAnswers(updatedAnswers);

    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
      return;
    }

    setCurrentQuestion((value) => value + 1);
    setSelectedAnswer(null);
  };

  const videoEmbedUrl = getYouTubeEmbedUrl(procedure.videoUrl);
  const videoWatchUrl = getYouTubeWatchUrl(procedure.videoUrl);

  return (
    <section className="procedure-details">

      {/* Back */}
      <button
        type="button"
        className="back-button"
        onClick={onBack}
      >
        ← Back
      </button>

      {/* Header */}
      <div className="procedure-detail-header">
        <span className="procedure-card-category">
          {procedure.category}
        </span>

        <h1>{procedure.title}</h1>

        <p>{procedure.overview}</p>
      </div>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Procedure sections"
        className="procedure-tabs"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "details"}
          className={`procedure-tab ${
            activeTab === "details" ? "active" : ""
          }`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>

        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "quiz"}
          className={`procedure-tab ${
            activeTab === "quiz" ? "active" : ""
          }`}
          onClick={() => setActiveTab("quiz")}
        >
          Test Yourself
          {quizzes.length > 0 && ` · ${quizzes.length}`}
        </button>
      </div>

      {/* ================= DETAILS ================= */}

      {activeTab === "details" && (
        <div className="procedure-detail-content">

          <div className="procedure-detail-section">
            <h2>Purpose</h2>

            <ul>
              {procedure.purpose.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="procedure-detail-section">
            <h2>Indications</h2>

            <ul>
              {procedure.indications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="procedure-detail-section">
            <h2>Requirements</h2>

            <ul>
              {procedure.equipment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="procedure-detail-section">
            <h2>Procedure Steps</h2>

            <ol className="procedure-steps">
              {procedure.steps.map((step, index) => (
                <li key={index}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="procedure-detail-section">
            <h2>Precautions</h2>

            <ul>
              {procedure.precautions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* ================= VIDEO ================= */}

          {procedure.videoUrl && (
            <div className="procedure-detail-section">

              <h2>Video Demonstration</h2>

              {!videoError && videoEmbedUrl ? (
                <>
                  <div className="procedure-video">
                    <iframe
                      src={videoEmbedUrl}
                      title={`${procedure.title} video demonstration`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                      onError={() => setVideoError(true)}
                    />
                  </div>

                  <button
                    type="button"
                    className="video-youtube-button"
                    onClick={() => {
                      if (videoWatchUrl) {
                        window.open(
                          videoWatchUrl,
                          "_blank",
                          "noopener,noreferrer"
                        );
                      }
                    }}
                  >
                    ▶ Watch on YouTube
                  </button>

                  <p className="video-help-text">
                    If the video cannot play inside the app,
                    use the YouTube button above.
                  </p>
                </>
              ) : (
                <div className="video-fallback-card">

                  <div className="video-fallback-icon">
                    ▶
                  </div>

                  <h3>
                    Video unavailable in the app
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
              )}

            </div>
          )}

          {/* Quiz shortcut */}

          {quizzes.length > 0 && (
            <button
              type="button"
              className="inline-quiz-button"
              onClick={startQuiz}
            >
              🧠 Test Yourself →
            </button>
          )}

        </div>
      )}

      {/* ================= QUIZ ================= */}

      {activeTab === "quiz" && (
        <div className="procedure-quiz-panel">

          {quizzes.length === 0 && (
            <div className="quiz-empty">
              <div className="quiz-empty-icon">
                📝
              </div>

              <h2>Quiz coming soon</h2>

              <p>
                No quiz questions have been added
                to this procedure yet.
              </p>
            </div>
          )}

          {quizzes.length > 0 &&
            !quizStarted && (
              <div className="quiz-intro-card">

                <div className="quiz-intro-icon">
                  🧠
                </div>

                <span className="quiz-kicker">
                  TEST YOURSELF
                </span>

                <h2>Check your knowledge</h2>

                <p>
                  Answer all {quizzes.length} questions
                  based on this procedure.
                  Answer positions are randomized
                  on every attempt.
                </p>

                <button
                  type="button"
                  className="quiz-primary-button"
                  onClick={startQuiz}
                >
                  Start Quiz
                </button>

              </div>
            )}

          {quizStarted && showResults && (
            <div className="quiz-result-card">

              <span className="quiz-kicker">
                QUIZ COMPLETE
              </span>

              <div className="quiz-score">
                {score}/{quizzes.length}
              </div>

              <h2>
                {score === quizzes.length
                  ? "Excellent work!"
                  : score >= Math.ceil(
                      quizzes.length * 0.7
                    )
                  ? "Good work!"
                  : "Keep practising!"}
              </h2>

              <p>
                You answered {score} correctly
                out of {quizzes.length}.
              </p>

              <div className="quiz-result-actions">

                <button
                  type="button"
                  className="quiz-primary-button"
                  onClick={startQuiz}
                >
                  Retry Quiz
                </button>

                <button
                  type="button"
                  className="quiz-secondary-button"
                  onClick={() =>
                    setActiveTab("details")
                  }
                >
                  Review Procedure
                </button>

              </div>
            </div>
          )}

          {quizStarted &&
            !showResults &&
            question && (
              <div className="quiz-card">

                <div className="quiz-card-top">

                  <span className="quiz-kicker">
                    QUESTION
                  </span>

                  <strong>
                    {currentQuestion + 1} /{" "}
                    {questions.length}
                  </strong>

                </div>

                <div
                  className="quiz-progress"
                  aria-hidden="true"
                >
                  <span
                    style={{
                      width: `${
                        ((currentQuestion + 1) /
                          questions.length) *
                        100
                      }%`,
                    }}
                  />
                </div>

                <h2 className="quiz-question-title">
                  {question.question}
                </h2>

                <div className="quiz-options-card">

                  {question.shuffledOptions.map(
                    (option, index) => {

                      const selected =
                        selectedAnswer === option;

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
                            setSelectedAnswer(option)
                          }
                        >

                          <span className="quiz-answer-letter">
                            {String.fromCharCode(
                              65 + index
                            )}
                          </span>

                          <span className="quiz-answer-text">
                            {option}
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
                  disabled={!selectedAnswer}
                  onClick={nextQuestion}
                >
                  {currentQuestion ===
                  questions.length - 1
                    ? "Finish Quiz"
                    : "Next Question"}

                  <span>→</span>
                </button>

              </div>
            )}

        </div>
      )}

    </section>
  );
              }
