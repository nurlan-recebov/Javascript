import { useEffect, useState } from "react";
import "./home.css";

function Home({ locationData, currentData }) {
  return (
    <div>
      {
        <>
          {(locationData && currentData && (
            <div className="wheaterInfo">
              <div className="wheatherInfo-top">
                <h1 className="wheaterCountry">{locationData.name}</h1>
                <img src={currentData.condition.icon} alt="" />

                <h3>{currentData.condition.text} Clouds</h3>
                <h3 className="tepm">{currentData.temp_c}</h3>

                <h3 className="tepm">{currentData.temp_f}</h3>
                <h3>Time {currentData.last_updated}</h3>
              </div>
              <div className="wheatherInfo-bottom">
                <h3>Wind {currentData.wind_degree}MPH</h3>
                <h3>Visibility {currentData.vis_km} M</h3>
              </div>
            
            </div>
          )) || (
            <div className="error">
              <h1>Data Not Found</h1>
            </div>
          )}
        </>
      }
    </div>
  );
}

export default Home;
