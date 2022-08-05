import React from 'react'
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
           <div className='btn btn-md btn-danger'>Add</div>            
        </div>
       </div>
       
      </form>
      </div>
      </div>
     )
  }
}

  export default Searchbar
  