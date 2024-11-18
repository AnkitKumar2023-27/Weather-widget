import React from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CardMedia from '@mui/material/CardMedia';

export default function WeatherBox ({info}) {
 const clear_url="https://up.yimg.com/ib/th?id=OIP.n6-tbSLDFYMwCNmHgWK4zQHaEo&pid=Api&rs=1&c=1&qlt=95&w=152&h=95"
 const rainy_url="https://tse2.mm.bing.net/th?id=OIP._2P_0LWG-SX72k-7rB5iUQHaEK&pid=Api&P=0&h=220";
 const cold_url="https://images.search.yahoo.com/images/view;_ylt=AwrO6ZI.4zpn0CImADuJzbkF;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzFkNTIxMjg2OWI2M2Y2ZmJjZTNhN2ViNmNiYjljMzE2BGdwb3MDOQRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fsearch%2Fimages%3Fp%3DCold%2BWeather%2Bdelhi%26type%3DE210US885G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D9&w=960&h=562&imgurl=images.hindustantimes.com%2Frf%2Fimage_size_960x540%2FHT%2Fp2%2F2020%2F12%2F15%2FPictures%2Fdelhi-weather-winter_2a59ac24-3ef3-11eb-bd1a-21d65ef31d5e.jpg&rurl=https%3A%2F%2Fwww.hindustantimes.com%2Fcities%2Fcold-wave-conditions-in-delhi-from-december-16-to-18%2Fstory-qWgogVP5AZMRYrbVKPLjVK.html&size=35KB&p=Cold+Weather+delhi&oid=1d5212869b63f6fbce3a7eb6cbb9c316&fr2=piv-web&fr=mcafee&tt=Cold+wave+conditions+in+Delhi+from+December+16+to+18+%7C+Latest+News+Delhi+-+Hindustan+Times&b=0&ni=21&no=9&ts=&tab=organic&sigr=f6qtaQ6k.i8o&sigb=J5TlfARycO.9&sigi=BPA7mJkA3j3H&sigt=d6k6k8nLNErY&.crumb=NeCluG9cCqB&fr=mcafee&fr2=piv-web&type=E210US885G0"
 

  return (
      <div style={styles.weatherBox}>
      <h2 style={styles.location}>{info.location}</h2>
      <div style={styles.info}>
      <CardMedia style={styles.icon}
          component="img"
          height="140"
          image={info.humedity>80 ? rainy_url:info.temp>15 ? clear_url:cold_url}
          alt="Wether image"
        />
        <div>
          <h1 style={styles.temperature}>{info.temp}°C</h1>
          <p style={styles.condition}><b>{<AcUnitIcon/>} Looks:{info.wether}</b></p>
        </div>
      </div>
      <div style={styles.details}>
        <p>Max temp{info.tempMax}</p>
        <p>Min Temp:{info.tempMin}</p>
        <p>Feels like: {info.feelsLike}°C</p>
        <p>Humidity: {info.humedity}%</p>
      </div>
    </div>
  );
}

const styles = {
  weatherBox: {
    background: "#8ddae4",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
 
  },
  location: {
    margin: "0",
    color: "#333",
  },
  info: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px 0",
  },
  icon: {
    width: "200px",
    height: "80px",
    marginRight: "15px",
    borderRadius:"15px",

  },
  temperature: {
    margin: "0",
    fontSize: "2.5rem",
    color: "#ff4500",
  },
  condition: {
    margin: "0",
    fontSize: "1.2rem",
    color: "#3a59ff",
  },
  details: {
    color: "#777",
    fontSize: "0.9rem",
  },
};

