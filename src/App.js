import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import './App.css';

// 727a5ba

const API_URL="http://www.omdbapi.com?apikey=727a5ba"

const movie1={
    Poster: "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00…MtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
    Title: "Italian Spiderman",
    Type: "movie",
    Year: "2007",
    imdbID: "tt2705436"
}

const App = () => {

    const [movies,setMovies] = useState([]);
    const [searchTerm,setSearchTerm]= useState([]);

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data=await response.json();

        setMovies(data.Search);
    }

    useEffect(() =>{
        searchMovies('spiderman');
    },[]);

    return (
        <div className="app">
            <h1>Movie Catalouge</h1>

            <div className="search">
                <input placeholder="Search for movie"
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                
                alt="search"
                onClick={() => searchMovies(searchTerm)}/>


            </div>
            {
                movies.length >0
                ? (
                    <div className="container">
                        {
                        movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ): (
                    <div className="empty">
                        <h2>No Movies found</h2>
                    </div>
                )
            }
            

        </div>
    );
}

export default App;
