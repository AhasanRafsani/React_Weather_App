
export const weatherReducer = (state,action)=>{
     switch(action.type){
        case "GET_WEATHER_REQUEST":
          return {
               ...state,
               weatherDataLoading:true
           }
        case "GET_WEATHER_REQUEST_SUCESS":
            return {
                ...state,
                weatherDataLoading:false,
                weatherData:action.payload
            }
        case "GET_WEATHER_REQUEST_FAIL":
            return {
                ...state,
                weatherDataLoading:false,
                weatherDataHasError:action.payload
            }
        case "GET_LOCATION_REQUEST":
            return {
                ...state,
                locationLoading:true
            }
        case "GET_LOCATION_REQUEST_SUCESS":
            return {
                ...state,
                locationLoading:false,
                location:action.payload
                }
        case "GET_LOCATION_REQUEST_FAIL":
            return {
                 ...state,
                 locationLoading:false,
                 locationHasError:action.payload
                }      
        default:
            return state       
     }
}