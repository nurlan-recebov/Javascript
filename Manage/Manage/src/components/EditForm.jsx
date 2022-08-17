import { Form, Button } from "react-bootstrap";
import { EmployeContext } from "./contexts/EmployeContext";
import { useContext, useState } from "react";
const EditForm = ({theEmploye}) => {
  const { updateEmploye } = useContext(EmployeContext);
  const employe = theEmploye;
  const id = employe.id;
  const [name, SetName] = useState(employe.name);
  const [phone, SetPhone] = useState(employe.phone);
  const [address, SetAddress] = useState(employe.address);
  const [email, SetEmail] = useState(employe.email);
  const updatedEmploye={id,name,phone,address,email}
  const handleSubmit=(e)=>{
    e.preventDefault()
    updateEmploye(id,updatedEmploye)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          value={name}
          type="text"
          placeholder="Name *"
          required
          onChange={(e)=> SetName(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          value={phone}
          type="text"
          placeholder="Phone *"
          onChange={(e)=> SetPhone(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Control
          value={address}
          as="textarea"
          placeholder="Adress *"
          rows={3}
          onChange={(e)=> SetAddress(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Control
          value={email}
          type="text"
          placeholder="Email *"
          required
          onChange={(e)=> SetEmail(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button variant="success" type="submit" block>
        Add new Employee
      </Button>
    </Form>
  );
};
export default EditForm;
