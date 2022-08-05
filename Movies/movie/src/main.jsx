import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './components/Addmovies'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=''>
    
   
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/add" element={ <AddMovie/>} /> 
       
         
      
       </Routes>
       </BrowserRouter>
    
  
  
  </div>
)
