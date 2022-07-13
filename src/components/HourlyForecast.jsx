import React,{useContext,useEffect,useState,useRef} from "react";
import HourlyWeather from "./HourlyWeather";
import {WeatherContext} from "../contexts/WeatherContext";
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";

const HourlyForecast = ()=>{
    const [showArrow,setShowArrow] = useState(true)
    const {weatherData} = useContext(WeatherContext);
    const slider = useRef();

     const handleScrollLeft = ()=>{
         slider.current.scrollLeft = slider.current.scrollLeft - 250;
     }

     const handleScrollRight = ()=>{
         slider.current.scrollLeft = slider.current.scrollLeft + 250;
     }

     const handlesize = ()=>{
       if(window.innerWidth <= 441){
          setShowArrow(false)
       }
       else{
          setShowArrow(true)
       }
     }
    
    useEffect(()=>{

        window.addEventListener('resize',handlesize);

        return ()=> window.removeEventListener('resize',handlesize)
    })
    
    return(
          <div className="relative h-[90%] w-full">
           { showArrow ? <FiChevronLeft onClick={ handleScrollLeft } className=" absolute z-10 inset-y-0 my-auto left-0 cursor-pointer bg-slate-600 rounded-full bg-opacity-5 hover:bg-opacity-50 text-red-600" size={35} /> : null }
                <div ref={slider} className=" absolute h-full w-full flex items-center gap-1 overflow-x-scroll scroll-smooth scrollbar-hide">
                 {
                    weatherData.hourly?.map((value,index)=>(
                     ( index !== 0 && index<=24 ) ? <HourlyWeather key={index} data={value}/> : null
                   ))
                 }
               </div>
            { showArrow ? <FiChevronRight onClick={handleScrollRight}  className=" absolute  z-10 inset-y-0 my-auto right-0 cursor-pointer bg-slate-600 rounded-full bg-opacity-5 hover:bg-opacity-50 text-red-600" size={35} /> : null }
         </div>
    )
}

export default HourlyForecast;