
import './App.css'
import Quizs from './quizs'
import QuizContextProvider from './api/contextapi'
import AddForm from './add'



function App() {
 

  return (
    <div className="App">
  
   <QuizContextProvider>
    
   <Quizs></Quizs>
   <AddForm></AddForm>
      </QuizContextProvider>
    </div>
    
  )
}

export default App
