import { useState, useContext } from 'react'
import React from 'react'
import axios from "axios"
import './App.css'
import { EmployeContext } from "./contexts/askcontext";


const App=() =>{
  const {asks } = useContext(EmployeContext);
     const [show, setShow] = useState(0);
     const [count, setCount] = useState(0);
     const handleShow=()=>{
      count<asks.length-1 ?setCount(count+1): setCount(count)
     
    }
    const handleFind=(e)=>{
e.target.innerText===asks[count].dogru ?setShow(show+10): setShow(show-10)
    }
   return(
    <div className='container'>
      <div className='row justify-content-center'>
      <div className='col-lg-4 col-sm-6'  key={asks[count].id}>
      <h4 className='text-white'>Puan {show}</h4>
      <h4 className='text text-white'>{asks[count].sual}</h4>
      <img className='img' src={asks[count].img} alt="" />
     <div onClick={handleFind} >
     <button  onClick={handleShow} type="button" className="btn btn-light m-2">{asks[count].A}</button>
     <button  onClick={handleShow} type="button" className="btn btn-light m-2">{asks[count].B}</button>
     <button  onClick={handleShow} type="button" className="btn btn-light m-2">{asks[count].C}</button>
     <button  onClick={handleShow} type="button" className="btn btn-light m-2">{asks[count].D}</button>
</div>
    </div>
   </div>
   
     
      </div>
   )
}

export default App