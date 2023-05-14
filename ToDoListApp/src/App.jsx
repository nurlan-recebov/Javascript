import React from 'react'
import Todos from './Components/todos'
import { AddTodos } from './Components/addTodos'
import './app.css'
import { store } from './app/store'
import { Provider } from 'react-redux'


export const App = () => {
  return (
    <div>
   
      
      <Provider store={store}>
        <AddTodos></AddTodos>
      <Todos></Todos>
  </Provider>
    
    </div>
  )
}
