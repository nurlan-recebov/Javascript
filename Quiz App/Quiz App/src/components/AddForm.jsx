import {Form,Button} from 'react-bootstrap'
import { EmployeContext } from './contexts/askcontext'
import {useContext, useState} from "react"
const AddForm=()=>{
    const{addEmployee}=useContext(EmployeContext)
    const[img,setImg]=useState('')
    const[sual,setSual]=useState('')
    const[A,setA]=useState('')
    const[B,setB]=useState('')
    const[C,setC]=useState('')
    const[D,setD]=useState('')
    const[dogru,setDogru]=useState('')

    const handleSubmit=(e)=>{
           e.preventDefault()
           addEmployee(img,sual,A,B,C,D,dogru)
    }
    return(

       <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control value={img} onChange={e=>setImg(e.target.value)} type='text' placeholder='Img-link *' required></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control value={sual} onChange={e=>setSual(e.target.value)} type='text' placeholder='Sual*'></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control value={A} onChange={e=>setA(e.target.value)}  type='text' placeholder='A*' ></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control value={B} onChange={e=>setB(e.target.value)} type='text' placeholder='B*' ></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control value={C} onChange={e=>setC(e.target.value)} type='text' placeholder='C *' ></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control value={D} onChange={e=>setD(e.target.value)}  type='text' placeholder='D *' ></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Control value={dogru} onChange={e=>setDogru(e.target.value)} type='text' placeholder='Dogru cavab *'></Form.Control>
        </Form.Group>
      
        
        <Button variant="success" type="submit" block>Add new Employee</Button>
       </Form>
    )
} 
export default AddForm