import React from "react";

const Results = ({ results, score, totalPoints }) => {
  return (
    <div className="quiz-results">
      <p><strong>Your Score: </strong>{score} / {totalPoints}</p>
      <div className="results-details">
        {results.map((result, index) => (
          <div key={index} className={`result-item ${result.isCorrect ? "correct" : "incorrect"}`}>
            <p>{result.question}</p>
            <p><strong>Your answer: </strong>{result.userAnswer}</p>
            <p><strong>Correct answer: </strong>{result.correctAnswer}</p>
            {!result.isCorrect && <p className="incorrect-feedback">Incorrect answer</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
