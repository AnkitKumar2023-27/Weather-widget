import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function SearchBOX({updateInfo}){
    let[ city,setcity]=useState("");
    
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="cb24d4ade76ffa62258041812368d12a";
    
    let getInfo=async()=>{
       let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse=await response.json();
       console.log(jsonResponse)
  

    let result={
        location:city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humedity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        wether:jsonResponse.weather[0].description,
        
    }
    console.log(result)
    return result;
}

    let handelChange=(event)=>{
        setcity(event.target.value)
    };


    let handelSubmit=async(event)=>{
        event.preventDefault();
        console.log(city);
        setcity("")
        getInfo();
        let newInfo=await getInfo();
        updateInfo(newInfo)
    }


    return(

        <div  className="serchBox">
            <h3>Enter City Here</h3>
            <form action=""  onSubmit={handelSubmit}>
             <TextField id="outlined-basic" label="City" variant="outlined"name="city" onChange={handelChange} 
             value={city}
             required
             
             />
             <br /><br />
             <Button variant="contained" type="submit">Search</Button>
             </form>
             

        </div>
      
    )
}