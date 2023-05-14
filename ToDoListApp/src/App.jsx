import React from 'react'
import Todos from './Components/todos'
import EmployeContextProvider from './Api/contextapi'
import './app.css'

import { AddTodos } from './Components/addTodos'
export const App = () => {
  return (
    <>
      <EmployeContextProvider>
        <AddTodos></AddTodos>
      <Todos></Todos>
      </EmployeContextProvider>
    
    </>
  )
}
