import React,{useContext} from "react";
import weatherImage from "./assets/images/weatherApp.jpg";
import WeatherInfoLayout from "./components/WeatherInfoLayout";
import LocationInput from "./components/LocationInput";
import CurrentLocation from "./components/CurrentLocation";
import {WeatherContext} from "./contexts/WeatherContext";
import Loading from "./components/Loading";

function App() {
  const { weatherDataLoading } = useContext(WeatherContext);
  return (
        <div className=" w-full h-screen relative">
             <img className="absolute h-full w-full object-cover" src={weatherImage} alt="weather"/>
             <LocationInput/>
             <CurrentLocation/>
             {
             weatherDataLoading ? <Loading/> : <WeatherInfoLayout/> 
             }
        </div>
  );
}

export default App;
