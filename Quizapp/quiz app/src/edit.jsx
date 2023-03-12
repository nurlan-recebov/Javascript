import {Form,Button} from 'react-bootstrap'
import { QuizContext } from './api/contextapi'
import {useContext, useState} from "react"
const EditForm=({theEmploye})=>{
    const {updateEmploye}=useContext(QuizContext)
    const quiz=theEmploye 
    const id = quiz.id;

const[name,setName]=useState(quiz.name)
const[img,setImg]=useState(quiz.img)
const updatedEmploye={id,img,name}
    const handleSubmit=(e)=>{
           e.preventDefault()
           updateEmploye(id,updatedEmploye)
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
export default EditForm