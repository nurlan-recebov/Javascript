import Employe from "./Employe";
import { useContext, useEffect, useState } from "react";
import { EmployeContext } from "./contexts/EmployeContext";
import { Button, Modal, Alert } from "react-bootstrap";
import Pagination from "./pagination";
import AddForm from "./AddForm";
const EmployeList = () => {
  const { employes } = useContext(EmployeContext);
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employesPerPage] = useState(2);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  useEffect(() => {
    handleClose();
    return () => {
      handleShowAlert();
    };
  }, [employes]);
  const indexOfLastEmploye = currentPage * employesPerPage;
  const indexOfFirstEmploye = indexOfLastEmploye - employesPerPage;
  const currentEmployes = employes.slice(
    indexOfFirstEmploye,
    indexOfLastEmploye
  );
  const totalPageNum = Math.ceil(employes.length / employesPerPage);
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success text-white"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <Alert show={showAlert} variant="success" dismissible>
        Employyelist successfully updated
      </Alert>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployes.map((employe) => (
            <tr key={employe.id}>
              <Employe employe={employe} />
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pages={totalPageNum}
        setCurrentPage={setCurrentPage}
        currentEmployes={currentEmployes}
      employes={employes}
      ></Pagination>
      <Modal show={show} onHide={handleClose}>
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
  );
};
export default EmployeList;
