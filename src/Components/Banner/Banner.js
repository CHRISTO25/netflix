import React from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY ,imageUrl} from '../../Constants/Constant'
import { useState,useEffect } from 'react'




function Banner() {
   const [movie,setMovie]= useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
      console.log(Response.data.results);

      const generateRandomNumber = (min, max) => {
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomValue;
      };
    
      const minLimit = 0; // Your minimum limit
      let maxLimit = Response.data.results.length-1;   // Your maximum limit
      const randomValue = generateRandomNumber(minLimit, maxLimit);
      setMovie(Response.data.results[randomValue])
    })
  },[])
  


  return (
    <div style={{backgroundImage:`url( ${movie?imageUrl+movie.backdrop_path:''})`}}   className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:''}</h1>
            <div className='banner-buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie?movie.overview:''}</h1>
        </div>
        <div className="fade-bottom"></div>
      
    </div>
  )
}

export default Banner
