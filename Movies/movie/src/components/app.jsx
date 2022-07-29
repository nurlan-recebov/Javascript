import { useState } from 'react'
import Movelist from './Movelist'
import Searchbar from './Searchbar'
import './app.css'


function App() {
 
  return (
    <div className="container">
    <div className='row'>
        <div className='col-lg'>
        
        <Searchbar></Searchbar>
     
        </div>
    </div>
    <Movelist></Movelist>
    
    </div>
  )
}

export default App
