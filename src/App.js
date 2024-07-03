import './App.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import MovieCard from './MovieCard';

const apiKey = 'http://www.omdbapi.com?apikey=b9b15076'

const App = () => {

  const[movies,setMovies] = useState([]);

  const [searchTerm,setSearchTerm] = useState();
  const searchMovies = async(title) => {
    const response = await fetch(`${apiKey}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Superman');
  },[]);
  return (
    <div className="app">
      <h1>MovieLand</h1>
        <div className='search'>
          <input
            placeholder='Search the movies' 
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}            
          />
           <img   
            src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {
          movies.length>0
          ?(
            <div className='container'>
              {movies.map((movie) => (
                <MovieCard movie = {movie} />
              ))}
            </div> 
          ):(
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )
          
        }

         
    </div>
  ); 
}

export default App;
