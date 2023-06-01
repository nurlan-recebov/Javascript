import { useState } from "react";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import "./App.css";
import Button from "./Components/ButtonStyled";
function App() {
  return (
    <>
      <Home></Home>
      <Category></Category>
    </>
  );
}

export default App;
