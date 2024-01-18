import React from 'react'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../Constants/Constant'
import { useState,useEffect } from 'react'
import axios  from '../../axios'

import Youtube from 'react-youtube'


function RowPost(props) {
  const[movie,setMovie]=useState([])
  const [urlid,setUrlid]=useState()
  useEffect(()=>{
       axios.get(props.url).then((response)=>{
        console.log(response.data);
        setMovie(response.data.results)
       })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const movieProvider=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data);
      if (response.data.results.length!==0) {
        setUrlid(response.data.results[0])
      }
      else{

        console.log('array empty');

      }
    }).catch((err)=>{console.log(err);})
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
          movie.map((x)=>{
            return(
              <img onClick={(()=>movieProvider(x.id))}  className={props.small?'smallposter':'poster'} src={`${imageUrl+x.backdrop_path}`} alt="loading" />
            )
          })
        }
        
        
      </div> 

    { urlid && <Youtube opts={opts} videoId={urlid.key}/>}
          </div>
  )
}

export default RowPost
