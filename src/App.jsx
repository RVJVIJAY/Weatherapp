import React, { useState } from 'react';
import './App.css';
import WeatherDetails from './WeatherDetails';

function App() {
  const [city, setCity] = useState("");
  const [datas,setData]=useState(null)
  const [country,setContry]=useState("")
  const [temperature,setTemperature]=useState("")
  const [latitude,setLatitude]=useState("")
  const [longitude,setLongitude]=useState("")
  const [humidity,setHumidity]=useState("")
  const [wind,setWind]=useState("")
  const [weatherData, setWeatherData] = useState("");
  const KEY = 'eba9b88e0a1690fa50252e72d12b16ea';

  async function Datafunction() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      else{
      const data = await response.json();
      setData(data)
      setCity(data.name)
      setContry(data.sys.country)
      setTemperature(data.main.temp)
      setLatitude(data.coord.lat)
      setLongitude(data.coord.lon)
      setHumidity(data.main.humidity)
      setWind(data.wind.speed)
      setWeatherData(weatherData.weather)
      console.log(weatherData)
      console.log(city)
      console.log(country)
      console.log(data);
      }

    } 
    catch (error) {
    //  alert('Error fetching data:', error);
    console.error(error)
    }
  }

  const handleCityName=(e)=>{
    setCity(e.target.value)
  }

  const handleButtonClick=()=>{
    Datafunction();
  }

  return (
    <div className='container'>
       <h1>Weather App</h1>
      <div className='input-container'>
       
      <input
        type="text"
        value={city}
        onChange={handleCityName}
        placeholder="Enter city name"
      />
      <button onClick={handleButtonClick}>Get Weather</button>
      </div>
   {  datas && <WeatherDetails cityname={city} country={country} temper={temperature} latitude={latitude}
      longitude={longitude} humidity={humidity} windspeed={wind} weatherr={weatherData}
      />}
    </div>
  );
}

export default App;
