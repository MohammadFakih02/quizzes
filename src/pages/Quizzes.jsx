import React from "react";
import QuizCard from "../components/QuizCard"

const Quizzes = ()=>{
    return(
        <div className="quizzes-containter">
            {quizzes.map((q)=>(
                <QuizCard quiz={q} key={q.id}/>
            ))}
        </div>
    )
}
export default Quizzes