import React from "react"
import Quiz from './quiz';
import './quiz.css'
import { useContext} from "react";
import { QuizContext } from './api/contextapi'


function Quizs() {
 
  const {quizs} = useContext(QuizContext);
 
  return (
    <div>
    <div className="d-flex">
 
{quizs.map((quiz) => (
       <div className="card" key={quiz.id}>
       <Quiz quiz={quiz}></Quiz>
    </div>    
          ))}
             
    

    </div>
    
   
    </div>
  )
}

export default Quizs
