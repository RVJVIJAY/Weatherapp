import React from 'react';
import { useEffect,useState } from 'react';
const WeatherDetails = ({ cityname, country, temper, latitude, longitude, humidity, windspeed ,weatherr}) => {
  
    const [weatherIcon, setWeatherIcon] = useState("");

    useEffect(() => {
      
      if (weatherr && weatherr.length > 0) {
        const iconCode = weatherr[0].icon;
        setWeatherIcon(getWeatherIcon(iconCode));
      }
    }, [weatherr]);

    const getWeatherIcon = (code) => {
        switch (code) {
          case '01d': return 'clear.png'; // clear sky day
          case '01n': return 'clear.png'; // clear sky night
          case '02d': return 'cloud.png'; // few clouds day
          case '02n': return 'cloud.png'; // few clouds night
          case '03d': return 'clouds.png'; // scattered clouds day
          case '03n': return 'drizzle.png'; // scattered clouds night
          case '04d': return 'clouds.png'; // broken clouds day
          case '04n': return 'cloud.png'; // broken clouds night (assuming same image)
          case '09d': return 'rain.png'; // shower rain day
          case '09n': return 'rain.png'; // shower rain night
          case '10d': return 'rain.png'; // rain day
          case '10n': return 'rain-night.png'; // rain night
          case '11d': return 'wind.png'; // thunderstorm day
          case '11n': return 'wind.png'; // thunderstorm night (assuming same image)
          case '13d': return 'snow.png'; // snow day
          case '13n': return 'snow.png'; // snow night (assuming same image)
          case '50d': return 'humidity.png'; // mist day
          case '50n': return 'humidity.png'; // mist night (assuming same image)
          default: return 'clear.png'; // default image if code doesn't match
        }
      };
    return (
    <div className='weather-details-container'>
    <div className='weather-details-section'>
        {weatherIcon && (
          <div className='weather-icon'>
            <img src={`/assets/${weatherIcon}`} alt='Weather Icon' />
          </div>
        )}
        <h1 className='city-name'>{cityname}</h1>
        <h3 className='country'>{country}</h3>
        <h1 className='temperature'>{Math.round(temper) /10 }&deg;C</h1>
      </div>

      <div className='weather-details-section coord'>
        <div className='weather-detail'>
          <h3 className='detail-label'>Latitude</h3>
          <p className='detail-value'>{latitude}</p>
        </div>
        <div className='weather-detail'>
          <h3 className='detail-label'>Longitude</h3>
          <p className='detail-value'>{longitude}</p>
        </div>
      </div>

      <div className='weather-details-section'>
        <div className='weather-detail'>
          <h1 className='humidity-label'>Humidity</h1>
          <p className='humidity-value'>{humidity}</p>
        </div>
        <div className='weather-detail'>
          <h1 className='wind-speed-label'>Wind Speed</h1>
          <p className='wind-speed-value'>{windspeed}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
