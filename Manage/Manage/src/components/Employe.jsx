import React from "react"
import { EmployeContext } from "./contexts/EmployeContext"
import { useContext,useState,useEffect } from "react"
import { Button, Modal,Tooltip,OverlayTrigger } from "react-bootstrap";
import EditForm from "./EditForm";

const Employe=({employe})=>{
    const{deleteEmploye}=useContext(EmployeContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
        handleClose()
    },[employe])
    return(
        <>
            <td>{employe.name}</td>
           <td>{employe.email}</td>
           <td>{employe.address}</td>
           <td>{employe.phone}</td>
           <td>
           <OverlayTrigger
           overlay={
             <Tooltip id={`tooltip-bottom`}>
             EditX
           </Tooltip>
           
           }>
           <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons">&#xE254;</i></button>
           </OverlayTrigger>
           <OverlayTrigger
           overlay={
             <Tooltip id={`tooltip-bottom`}>
             DeleteX
           </Tooltip>
           
           }>
           <button onClick={()=>deleteEmploye(employe.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons">&#xE872;</i></button>
           </OverlayTrigger>
           
           
               
           </td>
           <Modal show={show} onHide={handleClose} >
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmploye={employe}></EditForm>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}  variant="secondary">
            Close Modal
          </Button>

        </Modal.Footer>
      </Modal>
       
        </>
     
    )
}
export default Employe