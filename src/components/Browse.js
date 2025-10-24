
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { API_OPTIONS } from "../utils/constants";


const Browse = () => {
  const showGptSearch = useSelector ((store)=> store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
  

console.log(API_OPTIONS)
  return (
    <div>
      <Header />
      {
        showGptSearch ?
         <GptSearch /> :
         <>
          <MainContainer />
          <SecondaryContainer />
         </>
      }
      
     
      {/* MainContainer 
        - VideoBackground
        - VideoTitle
      SecondaryContainer
        - MovieList * n
        - cards * n */}
    </div>
  );
};

export default Browse;
