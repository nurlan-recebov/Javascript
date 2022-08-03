import React from 'react'
class Searchbar extends React.Component{
 
 handleFormsubmit=(event)=>{
  event.preventDefault();
 


}
  render(){
    return (
      <form onSubmit={this.handleFormsubmit}>
       <div className='form-row mb-5 mt-2'>
         <div className='col-12'>
           <input onChange={this.props.searchMovieProp}           
           type="text" className='form-control ' placeholder='Search a movie' />
         </div>
       </div>
      </form>
     )
  }
}

  export default Searchbar
  