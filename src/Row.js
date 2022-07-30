import React, { useEffect, useState } from 'react'
import axios from 'axios';

const base_url = "https://image.tmdb.org./t/p/original/";

function Row({ title, fetchUrl }) {

    const [movies, setMovies] = useState([]);

    //Only will run one becoz of [] 
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log("request");
            setMovies(request.data.results);
            
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    //console.log(movies);
    //console.log("https://api.themoviedb.org/3/movie/550?api_key=fecba95dc258b08f5b81fec41f195064");

    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row_poster">
                {movies.map(movie => (
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name} />
                ))}
            </div>

        </div>
    )
}

export default Row