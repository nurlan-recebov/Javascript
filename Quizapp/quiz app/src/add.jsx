import {Form,Button} from 'react-bootstrap'
import { QuizContext } from './api/contextapi'
import {useContext, useState} from "react"
const AddForm=()=>{
const {addEmployee}=useContext(QuizContext)
const[name,setName]=useState('')
const[img,setImg]=useState('')
    const handleSubmit=(e)=>{
           e.preventDefault()
           addEmployee(img,name) 
    }
    return(

       <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control value={img} onChange={e=>setImg(e.target.value)}  type='text' placeholder='Img-link *' required></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control value={name} onChange={e=>setName(e.target.value)} type='text' placeholder='Name*'></Form.Control>
        </Form.Group>
      
       
        
        <Button variant="success" type="submit" block>Add new Employee</Button>
       </Form>
    )
} 
export default AddForm