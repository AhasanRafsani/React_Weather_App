import {createContext,useReducer} from "react";
import axios from "axios";
import { weatherReducer } from "./WeatherReducer";

const initialState = {
    locationLoading:false,
    location:{},
    locationHasError:null,
    weatherDataLoading:false,
    weatherData:{},
    weatherDataHasError:null,
}
export const WeatherContext = createContext(initialState);

const WeatherContextProvider = ({children})=>{

    const [state,dispatch] = useReducer(weatherReducer,initialState);
    
    const getLocationWeatherByUserInput = async(location)=>{
        try{
            dispatch({type:"GET_WEATHER_REQUEST"});
            const {data} = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${process.env.REACT_APP_API_KEY}`);
            const weather = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${(data[0].lat).toString()}&lon=${(data[0].lon).toString()}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`);
            dispatch({type:"GET_WEATHER_REQUEST_SUCESS",payload:weather.data});
        }
        catch(err){
            dispatch({type:"GET_WEATHER_REQUEST_FAIL",payload:err.message});
        }
    }

    const getLocationWeatherByGiolocation = async(data)=>{
        try{
            dispatch({type:"GET_WEATHER_REQUEST"});
            const weather = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${(data.lat).toString()}&lon=${(data.lon).toString()}&units=metric&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}`);
            dispatch({type:"GET_WEATHER_REQUEST_SUCESS",payload:weather.data});
        }
        catch(err){
            dispatch({type:"GET_WEATHER_REQUEST_FAIL",payload:err.message});
        } 
    }

    const getLocationByGiolocation = async(data)=>{
        console.log(typeof(data));
        try{
            dispatch({type:"GET_LOCATION_REQUEST"});
            if(typeof(data)==="object"){
                const location = await axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${(data.lat).toString()}&lon=${(data.lon).toString()}&limit=5&appid=${process.env.REACT_APP_API_KEY}`);
                console.log(location.data[0]);
                dispatch({type:"GET_LOCATION_REQUEST_SUCESS",payload:location.data[0]});
            }else{
                const location = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${data}&appid=${process.env.REACT_APP_API_KEY}`);
                console.log(location);
                dispatch({type:"GET_LOCATION_REQUEST_SUCESS",payload:location.data[0]});
            }
        }
        catch(err){
            dispatch({type:"GET_LOCATION_REQUEST_FAIL",payload:err.message});
        } 
    }


    return(
        <WeatherContext.Provider value={{
            weatherDataLoading:state.weatherDataLoading,
            weatherData:state.weatherData,
            weatherDataHasError:state.weatherDataHasError,
            locationLoading:state.locationLoading,
            location:state.location,
            locationHasError:state.locationHasError,
            getLocationWeatherByUserInput,
            getLocationWeatherByGiolocation,
            getLocationByGiolocation }}>
              {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContextProvider;