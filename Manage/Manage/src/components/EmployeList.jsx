import Employe from "./Employe"
import { useContext } from "react"
import   {EmployeContext} from "./contexts/EmployeContext"
import {Form,Button} from 'react-bootstrap'
const EmployeList=()=>{
  const{employes} = useContext(EmployeContext)
    return( <div>
        <div className="table-title">
				<div className="row">
					<div className="col-sm-6">
						<h2>Manage <b>Employees</b></h2>
					</div>
					<div className="col-sm-6">
						<Button className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>					
					</div>
				</div>
			</div>
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
       <Employe employes={employes}/>
       </tbody>
       </table>
       </div>
    )
}
export default EmployeList