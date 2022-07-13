import React,{useContext} from "react";
import { WiHumidity } from "react-icons/wi";
import { GiWindTurbine } from "react-icons/gi";
import { WiSolarEclipse } from "react-icons/wi";
import { WeatherContext } from "../contexts/WeatherContext";


const CurrentWeather = ()=>{

    const {weatherData} = useContext(WeatherContext);
    console.log(weatherData)

    const uviIndex = (weatherData)=>{
     
       if(weatherData.current?.uvi <= 2){
          return "Low";
       }
       else if( (weatherData.current?.uvi <= 7) && (weatherData.current?.uvi >= 3)){
           return "Moderate To High";
       }
       else{
          return " Very High ";
       }
    }
    
    return(

                <div className="flex flex-row md:flex-col h-full w-full gap-1">
                       { /*current Weather icon start */ }
                      <div className="w-[33%] md:w-full h-full md:h-[38%] bg-stone-500 bg-opacity-75 p-1">
                           <p className=" text-slate-300 capitalize text-center  md:text-xl">{weatherData.current?.weather[0].description}</p> 
                           <img  className=" mx-auto  h-fit" src={`http://openweathermap.org/img/wn/${weatherData.current?.weather[0].icon}@2x.png`} alt="weather icon"/>
                       </div>
                       {/*///////////*/}

                       { /*current Weather temp start */ }
                       <div className=" w-[33%] md:w-full h-full md:h-[25%] p-1 text-center text-slate-300 bg-stone-500 bg-opacity-75">
                           <h2 className=" font-semibold text-4xl md:text-6xl mt-[15%] md:mt-1 ">{Math.floor(weatherData.current?.temp)}<span>&#176;c</span></h2>
                           <p className=" text-sm md:text-lg mt-1">Feels Like: {Math.floor(weatherData.current?.feels_like)} &#176;c</p>
                       </div>
                       {/*///////////*/}
                       
                       { /*humidity and WindSpeed section start*/ }
                       <div className="w-[33%] md:w-full h-full md:h-[37%] flex flex-col  items-center justify-center gap-2 ">
                           
                            <div className=" flex items-center w-full h-[25%] md:h-[25%] bg-stone-500 bg-opacity-75 gap-4 ">
                                 <WiHumidity className=" w-[30%]" size={35} color={"rgb(255,221,0)"}/>
                                 <h3 className=" w-[70%] text-center text-sm text-slate-300 md:text-xl font-bold ">{weatherData.current?.humidity}<span className="text-lg"> %</span></h3>
                            </div>

                            <div className="flex justify-evenly items-center w-full h-[25%] md:h-[25%] bg-stone-500 bg-opacity-75 gap-2">
                                 <GiWindTurbine className=" w-[30%]" size={30} color={"rgb(255,221,0)"} />
                                 <h3 className=" w-[70%] text-center  text-sm text-slate-300 md:text-xl font-bold ">{Math.round(weatherData.current?.wind_speed*3.6)}<span className="text-sm font-semibold"> km/h</span></h3>
                            </div>

                            <div className="flex justify-evenly items-center w-full h-[25%] md:h-[25%] bg-stone-500 bg-opacity-75 py-auto gap-1">
                                  <WiSolarEclipse className=" w-[30%]"  size={35} color={"rgb(255,221,0)"} />
                                  <h3 className=" w-[70%] text-center p-1  text-xs md:text-lg text-slate-300">{ Object.keys(weatherData).length !==0 ? uviIndex(weatherData) : null }</h3>
                            </div>

                            
                       </div>
                       {/*///////////*/}
               </div>
    )
}

export default CurrentWeather;