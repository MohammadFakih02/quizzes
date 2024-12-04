import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const QuizCard = ({ quiz }) => {
  return (
    <div className="quiz-card">
      <h2>{quiz.name}</h2>
      <p>{quiz.description}</p>
      <p>Points: {quiz.points}</p>

      {!quiz.completed ? (
        <Link to={`/quiz/${quiz.name}`}>
          <Button text="Start Quiz" onClick={() => {}} />
        </Link>
      ) : (
        <Button text="Quiz Completed" onClick={() => {}} disabled />
      )}
    </div>
  );
};

export default QuizCard;
