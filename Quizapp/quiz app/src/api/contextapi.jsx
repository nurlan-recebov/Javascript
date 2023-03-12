import { createContext, useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
export const QuizContext = createContext();
const QuizContextProvider = (props) => {
  const [quizs, setQuizs] = useState([
    {
      id: uuidv4(),
      name: "Miley",
      img:"https://www.espaicoriveu.com/wp-content/uploads/2022/01/Miley-Cyrus.jpg"
      
    },
    {
      id: uuidv4(),
      name: "Rihanna",
     img:"https://media1.popsugar-assets.com/files/thumbor/gz9AzjszAO6eNF40Lg2BLpyDFHI/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/04/13/081/n/1922153/8987d1edfa4485cf_484665091.jpg"
    },
    {
      id: uuidv4(),
      name: "Taylor",
     img:"https://upload.wikimedia.org/wikipedia/tr/a/a5/Taylor_Swift_VMAs.jpg"
    },
    
    
  ])
  const deleteid = (id) => {
    setQuizs(quizs.filter((quiz) => quiz.id !== id));
  };
  const addEmployee = (img, name) => {
    setQuizs([...quizs, { img, name }]);
  };
  const updateEmploye = (id, updatedEmploye) => {
    setQuizs(
      quizs.map((quiz) => (quiz.id === id ? updatedEmploye : quiz))
    );
  };

  return (
    <QuizContext.Provider
      value={{quizs,deleteid,addEmployee,updateEmploye}}
    >
      {props.children}
    </QuizContext.Provider>
  );
};




export default QuizContextProvider;