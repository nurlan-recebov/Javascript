import React from 'react'
import { useState } from 'react'
import './App.css'
import Card from './card';
class App extends React.Component {
   

    render() {

        return (
          
<div>
    <Card>
    <div className="App">
    
    <h3>{this.props.cardTitle}</h3>
    <img src={this.props.image} alt="" srcset="" />
   </div>
    
    </Card>
   

   </div>

           

        )

    }
}

export default App;