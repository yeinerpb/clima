import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";

const WeatherApp = () => {
    const[weather, setWeather] = useState({})
  const Success = pos =>{
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8f8d53b4105e16525da88ec0929245f2`)
     .then(res => setWeather(res.data));
  }


  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(Success);
  },[])

  
    return (
        <div className='container'>
            <div className='card'>
                <h1>Weather App</h1>
        
                <ul>
                    <div className='location'>
                        <li>{weather.name},</li>
                        <li>{weather.sys?.country}</li>
                    </div>
                <div className='temperature'>
                    <li><b>{weather.main?.temp}</b></li><br />                   
                </div>
                <div className='other-data'><br />
                    <div>
                         <img src={`https://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />    
                    </div>
                    <div>
                        <li><b>Wind speed:</b>{weather.wind?.speed}Km/h</li>
                        <li><b>Clouds:</b>{weather.weather?.[0].description}</li>
                        <li><b>Humidity:</b>{weather.main?.humidity}</li>
                          
                    </div>
     
                </div>
                <div>
                    <button><b> Degrees °F/°C </b></button>
                </div>
                </ul>
            </div>
        </div>
    );
};

export default WeatherApp;