import React, {useState, useEffect } from 'react';
import axios from './axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './Row.css';
const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row(props) {
    const [movies,setMovies ] = useState([]);
    const [trailerUrl,settrailerUrl ] = useState("");
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(props.fetchurl);
           
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [props.fetchurl]);
    const opts={
      height : "400",
      width : "100%",
      playerVars:{
        autoplay:1,
      },
    };
    const handleClick = (movie) =>{
        if(trailerUrl){ 
          settrailerUrl("");
        }else{
          movieTrailer(movie?.title || movie?.name || movie.original_name || "")
          .then((url) =>{
            const urlparams = new URLSearchParams(new URL(url).search);
              settrailerUrl(urlparams.get('v'));
          })
          .catch((error) => console.log(error));
        }
    };
  return (
    <div>
      <h1>{props.title}</h1>
      {/*row-contains */}
      <div className='row_posters'>
           { movies.map(movie => (
             
               <img 
               onClick = {() => handleClick(movie)}
               src={`${baseUrl}${movie.poster_path}`} 
               key= {movies.id} className="row_poster" 
               alt={movie.name} />
            )) }     
       </div>
      {trailerUrl &&  <Youtube videoId = {trailerUrl} opts={opts}></Youtube>}
    </div>
  )
}

export default Row
