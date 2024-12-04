import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button"; // Assuming you already have a Button component

const QuizCard = ({ quiz }) => {
  return (
    <div className="quiz-card">
      <h2>{quiz.name}</h2>
      <p>{quiz.description}</p>
      <p>Points: {quiz.points}</p>

      {/* Button to navigate to the quiz details page */}
      <Link to={`/quiz/${quiz.name}`}>
        <Button text="Start Quiz" onClick={() => {}} />
      </Link>
    </div>
  );
};

export default QuizCard;
