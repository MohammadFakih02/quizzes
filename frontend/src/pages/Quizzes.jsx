import React, { useContext } from "react";
import { quizContext } from "../context/quizContext";
import QuizCard from "../components/QuizCard";

const Quizzes = () => {
  const { quizzes, user } = useContext(quizContext);

  return (
    <div className="quizzes-container">
      {quizzes.map((quiz) => (
        <QuizCard quiz={quiz} user={user} key={quiz.name} />
      ))}
    </div>
  );
};

export default Quizzes;
