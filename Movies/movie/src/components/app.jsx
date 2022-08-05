import { useState } from 'react'
import Movelist from './Movelist'
import Searchbar from './Searchbar'
import React from 'react'


import './app.css'


class App extends React.Component{
  state={
    movies:[],
    searchQuery:""
  }
  async componentDidMount() {
    const baseURL = "http://localhost:3002/movies";
    const response = await fetch(baseURL);
    console.log(response);
    const data = await response.json();
    console.log(data)
    this.setState({movies: data})
  }
  deleteMovie = async (movie) =>{
    const URL =   `http://localhost:3002/movies/${movie.id}`;
    await fetch(URL,{
      method:"Delete"
    })
   const newMovelist = this.state.movies.filter(
    m => m.id !==movie.id

    )
  //  this.setState({
  //   movies:newMovelist
  //  })
  this.setState(state =>({
    movies:newMovelist
  }))
  }
  searchMovie=(event)=>{
    // console.log(event.target.value);
    this.setState({searchQuery:event.target.value})
  }
  render(){
    let filteredMovies = this.state.movies.filter(
      (movie) => {
    return movie.Name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      }
    )
    return (
      <div>
    <Searchbar searchMovieProp={this.searchMovie}/>
    <Movelist movies={filteredMovies}deleteMovieProp={this.deleteMovie}/>
      
       </div>  
       
       
        
           
   

     
      
    )
  }
}


export default App
