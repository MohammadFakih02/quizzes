
import './App.css';
import Quizzes from "./pages/Quizzes"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <QuizProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/quizzes" element={<Quizzes />} />
          </Routes>
        </BrowserRouter>
      </QuizProvider>
    </div>
  );
}

export default App;
