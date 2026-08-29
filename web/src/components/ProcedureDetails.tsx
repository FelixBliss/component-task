import React, { useState } from "react";
import type { Procedure } from "../data/procedures";

type ProcedureDetailsProps = {
  procedure: Procedure;
  onBack: () => void;
};

export default function ProcedureDetails({
  procedure,
  onBack,
}: ProcedureDetailsProps) {
  const [showQuiz, setShowQuiz] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const quizzes = procedure.quiz ?? [];

  const handleAnswer = (index: number, answer: string) => {
    setSelectedAnswers((previous) => ({
      ...previous,
      [index]: answer,
    }));
  };

  const score = quizzes.reduce((total, quiz, index) => {
    return total + (selectedAnswers[index] === quiz.answer ? 1 : 0);
  }, 0);

  return (
    <section className="procedure-details">
      <button
        type="button"
        className="back-button"
        onClick={onBack}
      >
        ← Back
      </button>

      <div className="procedure-detail-header">
        <span className="procedure-card-category">
          {procedure.category}
        </span>

        <h1>{procedure.title}</h1>

        <p>{procedure.overview}</p>
      </div>

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
        <h2>Equipment</h2>

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

      {procedure.videoUrl && (
        <div className="procedure-detail-section">
          <h2>Video Demonstration</h2>

          <div className="procedure-video">
            <iframe
              src={procedure.videoUrl}
              title={`${procedure.title} video`}
              allowFullScreen
            />
          </div>
        </div>
      )}

      {quizzes.length > 0 && (
        <div className="procedure-quiz">
          <button
            type="button"
            className="quiz-toggle"
            onClick={() => setShowQuiz(!showQuiz)}
          >
            🧠 {showQuiz ? "Hide Test Yourself" : "Test Yourself"}
          </button>

          {showQuiz && (
            <div className="quiz-content">
              {quizzes.map((quiz, index) => (
                <div className="quiz-question" key={index}>
                  <h3>
                    {index + 1}. {quiz.question}
                  </h3>

                  <div className="quiz-options">
                    {quiz.options.map((option) => {
                      const selected =
                        selectedAnswers[index] === option;

                      const correct =
                        submitted && option === quiz.answer;

                      const wrong =
                        submitted &&
                        selected &&
                        option !== quiz.answer;

                      return (
                        <button
                          key={option}
                          type="button"
                          className={`quiz-option ${
                            selected ? "selected" : ""
                          } ${correct ? "correct" : ""} ${
                            wrong ? "wrong" : ""
                          }`}
                          onClick={() =>
                            !submitted &&
                            handleAnswer(index, option)
                          }
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {!submitted ? (
                <button
                  type="button"
                  className="quiz-submit"
                  onClick={() => setSubmitted(true)}
                  disabled={
                    Object.keys(selectedAnswers).length !==
                    quizzes.length
                  }
                >
                  Check Answers
                </button>
              ) : (
                <div className="quiz-result">
                  You scored{" "}
                  <strong>
                    {score}/{quizzes.length}
                  </strong>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
                           }
