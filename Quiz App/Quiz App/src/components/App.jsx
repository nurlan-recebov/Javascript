import { useState, useContext,useEffect } from 'react'
import React from 'react'
import axios from "axios"
import './App.css'
import { EmployeContext } from "./contexts/askcontext";
import { Button, Modal, Alert } from "react-bootstrap";
import AddForm from './AddForm';


const App=() =>{
   

   const handleClose = () => setAdd(false);
   const handleshow = () => setAdd(true);
 
  const {asks } = useContext(EmployeContext);
  const [add, setAdd] = useState(0);
     const [show, setShow] = useState(0);
     const [count, setCount] = useState(0);
     const handleShow=()=>{
      count<asks.length-1 ?setCount(count+1): setCount(count)
     
    }
    const handleFind=(e)=>{
e.target.innerText===asks[count].dogru ?setShow(show+10): setShow(show-10)
    }
    useEffect(() => {
      handleClose();
     
    }, [asks]);
    
   return(
      <>
         <button onClick={handleshow}>Add</button>
    <div className='container'>
      <div className='row justify-content-center'>
      <div className='col-lg-4 col-sm-6'  key={asks[count].id}>
      <h5 className='text-white'>Puan {show}</h5>
      <h5 className='text text-white'>{asks[count].sual}</h5>
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
      <Modal show={add} onHide={handleClose} >
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AddForm></AddForm>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
   
      </>
      
   )
}

export default App