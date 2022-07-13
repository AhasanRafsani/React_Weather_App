import React,{useContext} from "react";
import {WeatherContext} from "../contexts/WeatherContext";
import DailyWeather from "./DailyWeather";

const DailyForecast = ({data})=>{
    
    const { weatherData } = useContext(WeatherContext);
    
    return(

        <div className=" flex h-[90%] w-full items-center justify-center gap-1">
              {
                       weatherData.daily?.map((data,index)=>(

                            (index !==0 && index<=5) ? < DailyWeather key={index} data={data}/> : null
                      ))  
             }
        </div>
    );
}

export default DailyForecast;