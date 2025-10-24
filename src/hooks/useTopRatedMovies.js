import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies =()=>{
    const dispatch = useDispatch();

  const getTopRatedMovies = async ()=>{
    try {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?&page=1',
        API_OPTIONS
      );
      if (!data.ok) {
        console.error('TMDB top_rated responded with', data.status, await data.text());
        return;
      }
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    } catch (err) {
      console.error('Failed to fetch top rated movies:', err);
    }

  }
  useEffect(()=>{
    getTopRatedMovies();
  },[])
}

export default  useTopRatedMovies;