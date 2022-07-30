import { useState } from 'react'
import Movelist from './Movelist'
import Searchbar from './Searchbar'
import React from 'react'
import './app.css'

class App extends React.Component{
  state={
    movies:[
      {
        "id":1,
        'Name':"Red Notice",
        'Rating':"7.5",
        'Overview':"Netflix film",
        "ImageUrl":"https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
      },
      {
        "id":2,
        'Name':"The Tourist",
        'Rating':"8.6",
        'Overview':"Popular film",
        "ImageUrl":"https://m.media-amazon.com/images/I/910A+wjqAjL._SL1500_.jpg"
      },
      {
        "id":3,
        'Name':"Passengers",
        'Rating':"9.5",
        'Overview':"Popular film",
        "ImageUrl":"https://m.media-amazon.com/images/M/MV5BZjk4ZTMwMTYtOTk1NC00OTA0LWFhMGYtZTBjMzViMDY2YWZjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
      },
      {
        "id":4,
        'Name':"Keep up with The Kardashians",
        'Rating':"5.6",
        'Overview':"Popular show",
        "ImageUrl":"https://m.media-amazon.com/images/M/MV5BNzM4ZWJiOTMtNGE2OC00OWZhLTkyZTYtN2FiNDhlZjIyODMxXkEyXkFqcGdeQXVyNTYxMjkyNDI@._V1_.jpg"
      },
      {
        "id":5,
        'Name':"Guardians of The Galaxy",
        'Rating':"8.6",
        'Overview':"Disney film",
        "ImageUrl":"https://cdn1.ntv.com.tr/gorsel/TO1lAl7hxk2dQDB5tnujpA.jpg?width=1000&mode=crop&scale=both"
      },
       {
        "id":6,
        'Name':"Mad Max",
        'Rating':"8.9",
        'Overview':"Popular film",
        "ImageUrl":"https://flxt.tmsimg.com/assets/p13053_p_v12_bh.jpg"
      },
      {
        "id":7,
        'Name':"The Hunger Games",
        'Rating':"9.6",
        'Overview':"Popular film",
        "ImageUrl":"https://m.media-amazon.com/images/M/MV5BNjQzNDI2NTU1Ml5BMl5BanBnXkFtZTgwNTAyMDQ5NjE@._V1_.jpg"
      },
      {
        "id":8,
        'Name':"Sex education",
        'Rating':"8.4",
        'Overview':"Netflix series",
        "ImageUrl":"https://m.media-amazon.com/images/M/MV5BOTE0MjQ1NDU3OV5BMl5BanBnXkFtZTgwNTI4MTgwNzM@._V1_.jpg"
      },

    ]
  }
  deleteMovie = (movie) =>{
   const newMovelist = this.state.movies.filter(
    m => m.id !==movie.id
   )
   this.setState({
    movies:newMovelist
   }

   )
  }
  render(){
    return (
      <div className="container">
      <div className='row'>
          <div className=''>
         
          <Movelist movies={this.state.movies}
          deleteMovieProp={this.deleteMovie}
          >
        
        </Movelist>
          
       
          </div>
         
      </div>
     
      </div>
    )
  }
}


export default App
