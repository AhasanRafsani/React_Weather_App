import React from "react";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import CurrentWeather from "./CurrentWeather";

const WeatherInfoLayout = ()=>{
    
    return (
         <>
         {
          
            <div className="flex flex-col md:flex-row  absolute z-10 top-[25%] h-[70%] w-[90%] md:w-[70%] mx-auto inset-x-0 gap-1 ">

                  <div className=" w-full md:w-[25%]  h-[30%]  md:h-full ">
                       <CurrentWeather/>
                   </div>

                  <div className=" flex flex-col h-full md:w-[75%] w-full gap-1"> 
                         {/* Hourly Forecast */}
                        <div className=" h-[38%] w-full bg-stone-600 bg-opacity-60 px-2">
                            <p className=" text-sm text-slate-300 md:text-lg h-[10%]">Hourly Forecast</p> 
                            <HourlyForecast/>
                        </div>
                         {/*///////////*/}

                         {/* Daily Forecast */}
                        <div className=" h-[62%] w-full bg-stone-600 bg-opacity-60 px-2 ">
                            <p className="text-sm text-slate-300 md:text-lg h-[10%]">Daily Forecast</p> 
                            <DailyForecast/>
                         </div>
                         {/*///////////*/}
                  </div>

            </div> 
        }
         </>
    );
}

export default WeatherInfoLayout;