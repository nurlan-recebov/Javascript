import {Form,Button} from 'react-bootstrap'
import { EmployeContext } from './contexts/EmployeContext'
import {useContext, useState} from "react"
const AddForm=()=>{
    const{addEmployee}=useContext(EmployeContext)
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[address,setAdress]=useState('')
    const[phone,setPhone]=useState('')

    const handleSubmit=(e)=>{
           e.preventDefault()
           addEmployee(name,email,address,phone)
    }
    return(

       <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control value={name} onChange={e=>setName(e.target.value)} type='text' placeholder='Name *' required></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control value={email} onChange={e=>setEmail(e.target.value)} type='text' placeholder='Phone *'></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control value={address} onChange={e=>setAdress(e.target.value)} as='textarea' placeholder='Adress *' rows={3}></Form.Control>
        </Form.Group>
      
        <Form.Group>
            <Form.Control value={phone} onChange={e=>setPhone(e.target.value)} type='text' placeholder='Email *' required></Form.Control>
        </Form.Group>
        <Button variant="success" type="submit" block>Add new Employee</Button>
       </Form>
    )
} 
export default AddForm