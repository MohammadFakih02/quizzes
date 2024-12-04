import React from "react";

const Question = ({ question, index, answers, handleAnswerChange, completed }) => {
  return (
    <div key={index} className="question-container">
      <p>{question.question}</p>
      {question.answers.map((answer, ansIndex) => (
        <label key={ansIndex}>
          <input
            type="radio"
            name={`question-${index}`}
            value={answer}
            checked={answers[index] === answer}
            onChange={() => handleAnswerChange(index, answer)}
            disabled={completed}
          />
          {answer}
        </label>
      ))}
    </div>
  );
};

export default Question;
