import { useState } from "react";
import Movelist from "./Movelist";
import Searchbar from "./Searchbar";
import React from "react";

import "./app.css";
import AddMovie from "./Addmovies";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };
  async componentDidMount() {
    const baseURL = "http://localhost:3002/movies";
    const response = await fetch(baseURL);
    console.log(response);
    const data = await response.json();
    console.log(data);
    this.setState({ movies: data });
  }
  // Delete movie
  deleteMovie = async (movie) => {
    const URL = `http://localhost:3002/movies/${movie.id}`;
    await fetch(URL, {
      method: "Delete",
    });
    const newMovelist = this.state.movies.filter((m) => m.id !== movie.id);
    //  this.setState({
    //   movies:newMovelist
    //  })
    this.setState((state) => ({
      movies: newMovelist,
    }));
  };
  // Search Movie
  searchMovie = (event) => {
    // console.log(event.target.value);
    this.setState({ searchQuery: event.target.value });
  };
  // Add Movie
  addMovie = async (movie) => {
    await axios.post("http://localhost:3002/movies", movie);
    this.setState((state) => ({
      movies: state.movies.concat([movie]),
    }));
  };
  render() {
    let filteredMovies = this.state.movies.filter((movie) => {
      return (
        movie.Name.toLowerCase().indexOf(
          this.state.searchQuery.toLowerCase()
        ) !== -1
      );
    });
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <React.Fragment>
                  <div className="row">
                    <div className="col-lg-12">
                      <Searchbar searchMovieProp={this.searchMovie} />
                    </div>
                  </div>

                  <Movelist
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                  />
                </React.Fragment>
              )}
            ></Route>

            <Route
              path="/add"
              render={({ history }) => (
                <AddMovie
                  onAddMovie={(movie) => {
                    this.addMovie(movie);
                    history.push("/");
                  }}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
