import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const QuizCard = ({ quiz, user }) => {
  const userScore = quiz.completed ? user.points : null;

  return (
    <div className="quiz-card">
      <h2>{quiz.name}</h2>
      <p>{quiz.description}</p>
      <p>Points: {quiz.points}</p>

      {quiz.completed ? (
        <>
          <p><strong>Your Score: </strong>{userScore}</p>
          <Button text="Quiz Completed" onClick={() => {}} disabled />
        </>
      ) : (
        <Link to={`/quiz/${quiz.name}`}>
          <Button text="Start Quiz" onClick={() => {}} />
        </Link>
      )}
    </div>
  );
};

export default QuizCard;
