import React from 'react'
import { useState } from 'react'
import './App.css'
class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            showcontent: true
        }
        this.showmore=()=>{
            this.setState({showcontent:false})
        }
    }
// showmore(){
//     this.setState({showcontent:true})
// }
    render() {

        return (
       


<div className="App-items">
<button onClick={this.showmore}>Click</button>
    {this.state.showcontent ?(
<div >
  
     {this.props.children}
    </div>
) : null}
</div>


       
          

           

        )

    }
}

export default Card;