import React,{useContext} from "react";
import {WeatherContext} from "../contexts/WeatherContext";
import { ImLocation2 } from "react-icons/im";

const CurrentLocation = ()=>{

    const {location} = useContext(WeatherContext);
     
       
       
    return (
        
        <div className="absolute z-10 w-full top-[16%]  md:top-[14%] ">
             <div className="flex items-center justify-center">
                 <ImLocation2 size={35} color={"red"}/>
                 <h2 className=" text-black text-2xl md:text-4xl font-semibold">{location.name?.split(" ")[0]}</h2>
             </div>
            
        </div>
    )
}

export default CurrentLocation;