import React from "react"
import { useState } from 'react'
import './quiz.css'
import { useContext} from "react";
import { QuizContext } from './api/contextapi'
import {Button,Modal} from 'react-bootstrap'
import EditForm from './edit';
function Quiz({quiz}) {
 
 
  const {deleteid} = useContext(QuizContext);
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
  
 

     
         <img className="card-img-top" src={quiz.img} alt="Card image cap"/>
       <div className="card-body">
         <h5 className="card-title">{quiz.name}</h5>
      
         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <button onClick={()=>deleteid(quiz.id)} className="btn btn-primary">Delete</button>
         <button onClick={handleShow} className="btn btn-primary">Edit</button>
         

      
     
         

    </div>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> <EditForm theEmploye={quiz}></EditForm></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
}

export default Quiz
