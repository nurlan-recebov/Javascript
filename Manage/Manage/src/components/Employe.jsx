import React from "react"

const Employe=({employes})=>{
    return(
        <>
        {
            employes.map((employe)=>(
                <tr key={employe.id}>
                <td>{employe.name}</td>
                <td>{employe.email}</td>
                <td>{employe.address}</td>
                <td>{employe.phone}</td>
                <td>
                    <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                    <a href="#deleteEmployeeModal" className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                </td>
            </tr>
            ))
        }
        </>
     
    )
}
export default Employe