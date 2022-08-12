import React from "react";
import Book from "./Book";
import "./Booklist.css";
import {BookContext} from "../contexts/BookContext";
class Booklist extends React.Component {
  
  render() {
 
    return (
       <BookContext.Consumer>{value=>{
        return( <section className="page-section" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">BookFolio</h2>
            <h3 className="section-subheading text-muted">
              Lorem ipsum dolor sit amet consecte
              tur.
            </h3>
          </div>
          <div className="row">
            {value.books.map((book, i) => {
              return <Book book={book} key={i}></Book>;
            })}
          </div>
        </div>
      </section>)
       }}</BookContext.Consumer>
    )
  }
}
export default Booklist;
