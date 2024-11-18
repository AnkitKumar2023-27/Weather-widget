import { useState } from 'react'
import SearchBOX from './weather'
import WeatherBox from './WeatherBox'
import './App.css'

function App() {
  const [weatherinfo, setwetherinfo] = useState({
    location:"kanpur",
    feelsLike: 16.17,
    humedity: 94,
    temp: 16.05,
    tempMax: 16.05,
    tempMin:16.05,
    wether:"fog",
})
let updateInfo=(newInfo)=>{
  setwetherinfo(newInfo);
}
  return (
    <div className='box'>
      <SearchBOX updateInfo={updateInfo}/>
    <br />
   <WeatherBox info={weatherinfo}/>
   </div>
  
  )
}

export default App
