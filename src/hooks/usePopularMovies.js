import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies =()=>{
    const dispatch = useDispatch();

  const getPopularMovies = async ()=>{
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/popular?&page=1',
        API_OPTIONS
      );
      if (!data.ok) {
        console.error('TMDB popular responded with', data.status, await data.text());
        return;
      }
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    } catch (err) {
      console.error('Failed to fetch popular movies:', err);
    }

  }
  useEffect(()=>{
    getPopularMovies();
  },[])
}

export default  usePopularMovies;