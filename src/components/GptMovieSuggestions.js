import React, { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const IMG_CDN = "https://image.tmdb.org/t/p/w500";

const GptMovieSuggestions = ({ userInput, onMovieClick, clearSuggestionsTrigger }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  //  Fetch suggestions while typing
  useEffect(() => {
    if (!userInput || userInput.trim() === "") {
      setSuggestions([]);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${userInput}&language=en-US&page=1`,
          API_OPTIONS
        );
        const data = await res.json();
        setSuggestions(data.results || []);
      } catch (error) {
        console.error(error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [userInput]);

  // 🔹 Clear suggestions when search button is clicked
  useEffect(() => {
    setSuggestions([]);
  }, [clearSuggestionsTrigger]);

  if (!userInput || suggestions.length === 0) return null;

  return (
    <ul className="absolute top-full left-0 w-full bg-[#141414] text-white rounded-b-lg shadow-lg border border-gray-700 overflow-hidden z-50">
      {loading && <li className="px-4 py-3 text-gray-400">Loading...</li>}
      {suggestions.slice(0, 8).map((movie) => (
        <li
          key={movie.id}
          onClick={() => onMovieClick(movie)}
          className="px-4 py-3 hover:bg-gray-800 cursor-pointer flex justify-between items-center transition"
        >
          <div className="flex items-center gap-3">
            {movie.poster_path && (
              <img
                src={IMG_CDN + movie.poster_path}
                alt={movie.title}
                className="w-12 h-16 object-cover rounded-sm"
              />
            )}
            <span className="text-sm font-medium">{movie.title}</span>
          </div>
          <span className="text-xs text-gray-400">
            {movie.release_date?.slice(0, 4) || "N/A"}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default GptMovieSuggestions;
