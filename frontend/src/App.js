import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Quizzes from "./pages/Quizzes"
import QuizProvider from "./context/quizContext";
import QuizDetails from "./pages/QuizDetails";



function App() {
  return (
    <div className="App">
      <QuizProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/quiz/:id" element={<QuizDetails />} />
          </Routes>
        </BrowserRouter>
      </QuizProvider>
    </div>
  );
}

export default App;
