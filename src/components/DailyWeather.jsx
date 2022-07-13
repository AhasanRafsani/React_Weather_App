import React from "react";

const DailyWeather = ({data})=>{

    const days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

    const months = ["January","February","March","April","May","June","July",
                      "August","September","October","November","December"];

    console.log(data);
    const d = new Date(data.dt*1000)
    

    return(
        
        <div className="basis-[20%] md:h-[70%] h-[80%]  bg-slate-50 bg-opacity-50  text-center ">
             <p className="font-semibold"><span className=" text-red-600 mr-1">{d.getDate()}</span>{months[d.getMonth()]}</p>
             <p>{days[d.getDay()]}</p>
             <img className=" mx-auto md:h-[50%] h-[40%] md:w-[80%]" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
             <p className="">{Math.round(data.temp.max)}&#176;<span className=" text-xl ">/</span>{Math.round(data.temp.min)}&#176;</p>
        </div>
        
    )
}

export default DailyWeather;