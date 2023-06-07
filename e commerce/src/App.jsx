import { useState } from "react";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { Add } from "./pages/Add";
import "./App.css";

import { BrowserRouter,Route,Routes } from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/category' element={<Category/>}></Route>
      <Route exact path='/add' element={<Add/>}></Route>
    </Routes>
    </BrowserRouter>
   
    </>

  );
}

export default App;
