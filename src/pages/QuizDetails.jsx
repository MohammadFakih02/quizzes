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
  const [results, setResults] = useState([]);
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

      setResults(newResults);
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
      ))}

      <Button
        text={completed ? "Back to Quizzes" : "Submit Quiz"}
        onClick={completed ? handleBackToQuizzes : handleSubmit}
        disabled={completed}
      />
      
      {completed && (
        <div className="quiz-results">
          <p><strong>Your Score: </strong>{score} / {currentQuiz.points}</p>
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
      )}
    </div>
  );
};

export default QuizDetails;
