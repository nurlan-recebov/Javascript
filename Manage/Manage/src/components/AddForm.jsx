import {Form,Button} from 'react-bootstrap'
const AddForm=()=>{
    return(
       <Form >
        <Form.Group>
            <Form.Control type='text' placeholder='Name *' required></Form.Control>
        </Form.Group>
       
        <Form.Group>
            <Form.Control as='textarea' placeholder='Adress *' rows={3}></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control type='text' placeholder='Phone *'></Form.Control>
        </Form.Group>
        <Button variant="success" type="submit" block>Add new Employee</Button>
       </Form>
    )
} 
export default AddForm