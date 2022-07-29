import React from 'react'
class Movelist extends React.Component{
    render(){
        return(
            <div className='row d-flex justify-content-center'> 
           <div className='col-lg-8'>
<div className='card mb-4 shadow-sm'>
<img className='card-img-top' src="https://flxt.tmsimg.com/assets/p13053_p_v12_bh.jpg" alt="" srcset="" />
<div className='card-body'>
    <h5 className='card-title'>Sample Movie</h5>
    <p className='card-text'>Sample movie description</p>
    <div className='d-flex justify-content-between align-items-center'>
        <button type='button' className='btn btn-md btn-outline-danger'>Delete</button>
        <h2>9.0</h2>
    </div>
</div>
</div>       
</div>
 </div>
        )
    }
}
export default Movelist