import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todos } from './Components/todos'
import { Detail } from './Components/detail'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todos></Todos>
      <Detail></Detail>
    </>
  )
}

export default App
