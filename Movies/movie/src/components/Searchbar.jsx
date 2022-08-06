import React from 'react'
import {Link} from "react-router-dom"
class Searchbar extends React.Component{
 
 handleFormsubmit=(event)=>{
  event.preventDefault();
 


}
  render(){
    return (
      <div className='container'>
        <div className='row'>
      <form onSubmit={this.handleFormsubmit}>
       <div className='form-row mb-5 mt-2 d-flex'>
         <div className='col-10'>
           <input onChange={this.props.searchMovieProp}           
           type="text" className='form-control ' placeholder='Search a movie' />
         </div>
         <div className="col-2">
           <Link to="/add" className='btn btn-md btn-danger'>Add</Link>            
        </div>
       </div>
       
      </form>
      </div>
      </div>
     )
  }
}

  export default Searchbar
  