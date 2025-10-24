import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies =()=>{
    const dispatch = useDispatch();
    const [movie,setMovie]=useState('')
    console.log(movie)

 useEffect(()=>{

        localStorage.setItem('movie', JSON.stringify(movie))
      },[movie])

  const getNowPlayingMovies = async ()=>{
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?&page=1',
        API_OPTIONS
      );

      if (!data.ok) {
        console.error('TMDB now_playing responded with', data.status, await data.text());
        return;
      }

      const res = await data.json();
      setMovie(res.results);
      dispatch(addNowPlayingMovies(res.results));
    } catch (err) {
      console.error('Failed to fetch now_playing movies:', err);
    }

  }
  useEffect(()=>{
    getNowPlayingMovies();
  },[])
}

export default useNowPlayingMovies;