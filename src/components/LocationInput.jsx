import React,{useState,useContext,useEffect} from "react";
import { BiSearch } from "react-icons/bi";
import {WeatherContext} from "../contexts/WeatherContext";

const LocationInput = ()=>{
    const [userInput,setUserInput] = useState("");
    const {getLocationWeatherByUserInput,getLocationWeatherByGiolocation,getLocationByGiolocation} = useContext(WeatherContext)
    const handleInputChange = (e)=>{
        setUserInput(e.target.value);
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        getLocationWeatherByUserInput(userInput);
        getLocationByGiolocation(userInput);
    }
    useEffect(()=>{
        if(userInput === ""){
          if(navigator.geolocation){
              navigator.geolocation.getCurrentPosition((pos)=>{
                   getLocationWeatherByGiolocation({lat:pos.coords.latitude,lon:pos.coords.longitude});
                   getLocationByGiolocation({lat:pos.coords.latitude,lon:pos.coords.longitude});
                },
              (err)=>{
                  console.log(err.message)
              },

              {
                 enableHighAccuracy:true,
              }
              )
           }
        }
        //getLocationWeatherByGiolocation(userInput);
    },[userInput])

    return(
        <div className="absolute z-10 top-7 inset-x-0 mx-auto w-[60%] md:w-[35%] h-10">
            
            <form onSubmit={handleSubmit}>

               <input className="absolute h-full w-full text-lg bg-slate-800 bg-opacity-75 text-white px-2 rounded-xl" 
                  type="text" 
                  placeholder="Search Location"
                  value={userInput} 
                  onChange={handleInputChange}/>
               <button type="submit" className="absolute z-10 right-2 top-1 text-white hover:text-blue-500 focus:text-blue-500" ><BiSearch  size={30} /></button> 

            </form>
        </div>
    )
}
export default LocationInput;