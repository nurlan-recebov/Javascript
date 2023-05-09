import { useEffect, useState } from "react";
import "./search.css";

function Search({ setİnputSearch, changeforSearch }) {
  return (
    <>
      <header>
        <input
          type="text"
          placeholder="Search,city,country or location"
          onChange={(e) => setİnputSearch(e.target.value)}
        />
        <button onClick={changeforSearch}>
          <i style={{ fontSize: "20px" }} className="fas fa-search"></i>
        </button>
      </header>
    </>
  );
}

export default Search;
