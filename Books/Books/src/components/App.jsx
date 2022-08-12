import { useState } from "react";
import React from "react";
import "./App.css";
import Booklist from "./Booklist";
import BookContextProvider from "../contexts/BookContext";
import ThemeContextProvider from "../contexts/ThemeContext";
class App extends React.Component {
  render() {
    return (
      <div>
        <ThemeContextProvider>
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;
