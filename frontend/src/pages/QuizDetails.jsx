import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizContext } from "../context/quizContext";
import Button from "../components/Button";
import Question from "../components/Question";
import Results from "../components/Results";

const QuizDetails = () => {
  const { id } = useParams();
  const { quizzes, user, setUser, setQuizzes } = useContext(quizContext);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [answers, setAnswers] = useState([]); 
  const [completed, setCompleted] = useState(false);
  const [results, setResultsData] = useState([]);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const quiz = quizzes.find((quiz) => quiz.name === id);
    if (quiz) {
      setCurrentQuiz(quiz);
      setCompleted(quiz.completed);
    }
  }, [id, quizzes]);

  const handleAnswerChange = (questionIndex, selectedAnswer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = selectedAnswer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (currentQuiz && !completed) {
      let currentScore = 0;
      const newResults = [];

      const pointsPerQuestion = currentQuiz.points / currentQuiz.questions.length;

      currentQuiz.questions.forEach((question, index) => {
        const isCorrect = answers[index] === question.correctAnswer;
        if (isCorrect) {
          currentScore += pointsPerQuestion;
        }
        newResults.push({
          question: question.question,
          userAnswer: answers[index],
          correctAnswer: question.correctAnswer,
          isCorrect: isCorrect,
        });
      });

      const updatedUser = { ...user, points: user.points + currentScore };
      setUser(updatedUser);

      const updatedQuizzes = quizzes.map((quiz) => {
        if (quiz.name === currentQuiz.name) {
          return { ...quiz, completed: true };
        }
        return quiz;
      });
      setQuizzes(updatedQuizzes);

      setResultsData(newResults);
      setScore(currentScore);
      setCompleted(true);
    }
  };

  const handleBackToQuizzes = () => {
    navigate("/");
  };

  if (!currentQuiz) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="quiz-details-container">
      <h1>{currentQuiz.name}</h1>
      <p>{currentQuiz.description}</p>

      {currentQuiz.questions.map((question, index) => (
        <Question
          key={index}
          question={question}
          index={index}
          answers={answers}
          handleAnswerChange={handleAnswerChange}
          completed={completed}
        />
      ))}

      <Button
        text={completed ? "Back to Quizzes" : "Submit Quiz"}
        onClick={completed ? handleBackToQuizzes : handleSubmit}
        disabled={completed}
      />

      {completed && <Results results={results} score={score} totalPoints={currentQuiz.points} />}
    </div>
  );
};

export default QuizDetails;
