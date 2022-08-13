import React from "react";
import Book from "./Book";
import "./Booklist.css";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";
class Booklist extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(contextTheme) => (
          <BookContext.Consumer>
            {(contextBook) => {
              const { books } = contextBook;
              const { changeTheme, isDarkTheme, dark, light } = contextTheme;
              const theme = isDarkTheme ? dark : light;

              return (
                <section
                  className="page-section"
                  style={{ background: theme.bg, color: theme.txt }}
                  id="portfolio"
                >
                  <div className="container">
                    <div className="text-center">
                      <h2 className="section-heading text-uppercase">
                        BookFolio
                      </h2>
                      <h3 className="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consecte tur.
                      </h3>
                      <button
                      
                        onClick={changeTheme}
                        type="button"
                        className="btn btn-sm mb-4 btn-danger"
                      >
                        Change theme
                      </button>
                    </div>
                    <div className="row">
                      {books.map((book, i) => {
                        return <Book book={book} key={i}></Book>;
                      })}
                    </div>
                  </div>
                </section>
              );
            }}
          </BookContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default Booklist;
