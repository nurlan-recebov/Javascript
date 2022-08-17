import React from "react"
import { EmployeContext } from "./contexts/EmployeContext"
import { useContext,useState,useEffect } from "react"
import { Button, Modal } from "react-bootstrap";
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
           <button onClick={handleShow} className="btn text-warning btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></button>
               <button onClick={()=>deleteEmploye(employe.id)} className="btn text-danger btn-act" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></button>
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