import React from 'react'
import './app.css'
class Movelist extends React.Component{
    render(){
        return(
            <div className='container'> 
            <div className='row'>
            {this.props.movies.map((movie) => (
             <div className='col-lg-3'>
             <div className='card mb-4 shadow-sm'>
           <img className='card-img-top' src={movie.ImageUrl} alt="" srcset="" />
            <div className='card-body'>
             <h5 className='card-title'>{movie.Name}</h5>
             <p className='card-text'>{movie.Overview}</p>
             <div className='d-flex justify-content-between align-items-center'>
                 <button type='button' className='btn btn-md btn-outline-danger'>Delete</button>
                 <h2>{movie.Rating}</h2>
             </div>
            </div>
            </div>       
            </div>
            ))}
            </div>
 
 </div>
        )
    }
}
export default Movelist