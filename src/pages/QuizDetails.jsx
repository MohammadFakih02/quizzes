import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { quizContext } from "../context/quizContext";
import Button from "../components/Button";

const QuizDetails = () => {
  const { id } = useParams();
  const { quizzes, user, setUser, setQuizzes } = useContext(quizContext);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [answers, setAnswers] = useState([]); 
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const quiz = quizzes.find((quiz) => quiz.name === id);
    if (quiz) {
      setCurrentQuiz(quiz);
    }
  }, [id, quizzes]);

  const handleAnswerChange = (questionIndex, selectedAnswer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = selectedAnswer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (currentQuiz) {
      let score = 0;
      
      const pointsPerQuestion = currentQuiz.points / currentQuiz.questions.length;

      currentQuiz.questions.forEach((question, index) => {
        if (answers[index] === question.correctAnswer) {
          score += pointsPerQuestion;
        }
      });

      const updatedUser = { ...user, points: user.points + score };
      console.log(updatedUser);
      setUser(updatedUser);

      const updatedQuizzes = quizzes.map((quiz) => {
        if (quiz.name === currentQuiz.name) {
          return { ...quiz, completed: true };
        }
        return quiz;
      });
      setQuizzes(updatedQuizzes);

      setCompleted(true);
      navigate("/");
    }
  };

  if (!currentQuiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-details-container">
      <h1>{currentQuiz.name}</h1>
      <p>{currentQuiz.description}</p>
      
      {currentQuiz.questions.map((question, index) => (
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
              />
              {answer}
            </label>
          ))}
        </div>
      ))}
      
      <Button text="Submit Quiz" onClick={handleSubmit} />
      {completed && <p>Quiz Completed! Your points have been updated.</p>}
    </div>
  );
};

export default QuizDetails;
