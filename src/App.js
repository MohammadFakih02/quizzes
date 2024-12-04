import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Quizzes from "./pages/Quizzes"
import QuizProvider from "./context/quizContext";


function App() {
  return (
    <div className="App">
      <QuizProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Quizzes />} />
          </Routes>
        </BrowserRouter>
      </QuizProvider>
    </div>
  );
}

export default App;
