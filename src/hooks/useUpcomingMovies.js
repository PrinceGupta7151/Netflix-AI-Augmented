import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies =()=>{
    const dispatch = useDispatch();

  const getUpcomingMovies = async ()=>{
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?&page=1',
        API_OPTIONS
      );
      if (!data.ok) {
        console.error('TMDB upcoming responded with', data.status, await data.text());
        return;
      }
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    } catch (err) {
      console.error('Failed to fetch upcoming movies:', err);
    }

  }
  useEffect(()=>{
    getUpcomingMovies();
  },[])
}

export default  useUpcomingMovies;