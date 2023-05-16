import React from 'react'
import Todos from './Components/todos'

import './app.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { AddTodos } from './Components/addTodos'
import { BrowserRouter,Route,Routes } from 'react-router-dom'


export const App = () => {
 
  return (
    <div>
 <BrowserRouter>
      
      
      <Routes>
<Route exact path='/' element={<Todos/>}/>
<Route exact path='/Add' element={<AddTodos/>}/>



      </Routes>
 </BrowserRouter>
    </div>
  )
}
