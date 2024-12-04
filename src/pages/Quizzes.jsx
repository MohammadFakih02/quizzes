import React, { useContext } from "react";
import QuizCard from "../components/QuizCard"
import {quizContext} from "../context/quizContext";

const Quizzes = ()=>{
    const {quizzes} = useContext(quizContext);
    return(
        <div className="quizzes-containter">
            {quizzes.map((q)=>(
                <QuizCard quiz={q} key={q.id}/>
            ))}
        </div>
    )
}
export default Quizzes