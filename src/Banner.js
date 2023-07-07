import React, { useState,useEffect } from 'react'
import './Row';
import './banner.css';
import axios from './axios';
import requests from './request';
function Banner() {
  const truncate = (input) =>
        input?.length > 300 ? `${input.substring(0, 254)}...` : input;
  const [movie,setMovies] = useState([]);
  useEffect(() => {
      async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovies(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)]
          );
          return request;
      }
      fetchData();
  },[]);
  console.log(movie);
  return (
    <div >
      <header className = "banner"
            style = {{
              backgroundSize : 'cover',
              backgroundImage : `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
              )`,
              backgroundPosition : "center"
            }}
      >
      <div className='banner_content'>
            <h1 className='banner-title'>{movie?.title || movie?.name || movie.original_name }</h1>
            <div className="button-contain">
              <button className='button'>Play</button>
              <button className='button'>My List</button>
            </div>

            <h1 className="banner_desc">{truncate(movie?.overview,150)}</h1>
      </div>
      <div className='banner--fadebottom'/>
      </header>
    </div>
  )
}


export default Banner

