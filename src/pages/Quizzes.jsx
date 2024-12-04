import React, { useContext } from "react";
import { quizContext } from "../context/quizContext";
import QuizCard from "../components/QuizCard";

const Quizzes = () => {
  const { quizzes } = useContext(quizContext);

  return (
    <div className="quizzes-container">
      {quizzes.map((quiz) => (
        <QuizCard quiz={quiz} key={quiz.name} />
      ))}
    </div>
  );
};

export default Quizzes;
