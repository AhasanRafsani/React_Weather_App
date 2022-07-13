import React from "react";
import { WiThermometerExterior} from "react-icons/wi";

const HourlyWeather = ({data})=>{

    console.log(data);

      const hourFormet = (data)=>{

          const d = new Date(data.dt*1000);
       
          let hour;

          if(d.getHours()<12){

             if(d.getHours() === 0){
                hour = 12
                return `${hour} am`
             } 
              hour = d.getHours();
              return `${hour} am`
          }
          else if(d.getHours()===12){
              hour = d.getHours();
              return `${hour} pm`
          }
          else{
              hour = d.getHours() % 12;
              return `${hour} pm`
          }
      }
    
    return(
        
        <div className=" h-[80%] w-[16%]  bg-slate-50 bg-opacity-50 flex-shrink-0 text-center py-1">
              <p className="text-xs md:text-sm font-semibold">{  hourFormet (data)}</p>
              <img className=" h-[50%] w-[50%] mx-auto" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
              <p className=" text-xs md:text-sm mx-1"><span className="inline-block text-orange-600 "> <WiThermometerExterior size={15}/> </span>{Math.round(data.temp)}&#176;c</p>   
                
        </div>
        
    )
}

export default HourlyWeather;