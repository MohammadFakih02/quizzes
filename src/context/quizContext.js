import { createContext, useState, useEffect } from "react";

export const quizContext = createContext();

const QuizProvider = ({ children }) => {
  const [quizzes, setQuizzes] = useState([
    {
      name: "Math Quiz",
      description: "A simple math quiz to test your arithmetic skills.",
      points: 75,
      completed: false,
      questions: [
        {
          question: "What is 5 + 3?",
          answers: ["5", "8", "10", "12"],
          correctAnswer: "8",
        },
        {
          question: "What is 10 - 6?",
          answers: ["2", "4", "6", "8"],
          correctAnswer: "4",
        },
      ],
    },
    {
      name: "Science Quiz",
      description: "A basic science quiz to test general knowledge.",
      points: 90,
      completed: true,
      questions: [
        {
          question: "What planet is known as the Red Planet?",
          answers: ["Earth", "Venus", "Mars", "Jupiter"],
          correctAnswer: "Mars",
        },
        {
          question: "What is the chemical symbol for water?",
          answers: ["HO", "H2O", "O2H", "H2"],
          correctAnswer: "H2O",
        },
      ],
    },
  ]);

  const [user, setUser] = useState({
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    points: 90,
  });

  return (
    <quizContext.Provider value={{ quizzes, setQuizzes, user, setUser }}>
      {children}
    </quizContext.Provider>
  );
};

export default QuizProvider;
