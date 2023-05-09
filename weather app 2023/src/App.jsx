import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/home";
import Search from "./components/search";

function App() {
  const [locationData, setLocationData] = useState();
  const [currentData, setcurrentData] = useState();
  const [isLoading, setİsloading] = useState(false);
  const [searchData, setSearchData] = useState("Baku");
  const [inputSearch, setİnputSearch] = useState("");
  const getAll = () => {
    setİsloading(true);
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=2e4ccef92991439daf8110516232903&q=${searchData}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setLocationData(data.location);
        setcurrentData(data.current);
        setİsloading(false);
      });
  };
  const changeforSearch = () => {
    setSearchData(inputSearch);
  };
  useEffect(() => {
    getAll();
  }, [searchData]);

  return (
    <div className="container ">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="wheatherApp">
          <div className="searchArea">
            <Search
              setİnputSearch={setİnputSearch}
              changeforSearch={changeforSearch}
            ></Search>
            <Home locationData={locationData} currentData={currentData}></Home>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
