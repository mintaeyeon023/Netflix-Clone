import axios from "axios";

// base usrl to make requets to the movie db API call in short

// https://api.themoviedb.org/3/discover/movie?api_key=fecba95dc258b08f5b81fec41f195064&&with_genres=27

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

// DEMO Call API call for GET()
// instance.get('/foo-bar'); 

export default instance;
