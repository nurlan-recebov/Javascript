import React from 'react'
import './app.css'
const Movelist = (props) =>{
    
        return(
            <div className='container'> 
            <div className='row'>
            {props.movies.map((movie,i) => (
             <div className='col-lg-3' key={i}>
             <div className='card mb-4 shadow-sm'>
           <img className='card-img-top' src={movie.ImageUrl} alt="" srcset="" />
            <div className='card-body'>
             <h5 className='card-title'>{movie.Name}</h5>
             <p className='card-text'>{movie.Overview}</p>
             <div className='d-flex justify-content-between align-items-center'>
                 <button onClick={(event) => props.deleteMovieProp(movie)} type='button' className='btn btn-md btn-outline-danger'>Delete</button>
                 <h3><span className='badge bg-warning text-dark'>{movie.Rating}</span></h3>
             </div>
            </div>
            </div>       
            </div>
            ))}
            </div>
 
 </div>
        )
    
}
export default Movelist