import React, { useState } from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { API_OPTIONS } from "../utils/constants";

const IMG_CDN = "https://image.tmdb.org/t/p/w500";

const GptSearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [clearSuggestionsTrigger, setClearSuggestionsTrigger] = useState(0); // ✅ new

  // 🔹 Handle click on suggestion
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setUserInput("");
    setSearchResults([]);
  };

  // 🔹 Handle search button click
  const handleSearchClick = async () => {
    if (!userInput.trim()) return;

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${userInput}&language=en-US&page=1`,
        API_OPTIONS
      );
      const data = await res.json();
      setSearchResults(data.results || []);
      setSelectedMovie(null);

      // ✅ trigger suggestions to disappear
      setClearSuggestionsTrigger(prev => prev + 1);
    } catch (error) {
      console.error("Search failed:", error);
      setSearchResults([]);
    }
  };

  return (
    <div className="pt-20 flex flex-col items-center bg-[#141414] min-h-screen text-white">
      {/* Search Bar */}
      <div className="w-1/2 relative flex gap-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Search for movies..."
          className="flex-grow px-6 py-3 rounded-full bg-[#333] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
        />
        <button
          onClick={handleSearchClick}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition"
        >
          Search
        </button>

        {/* Suggestions Dropdown */}
        <GptMovieSuggestions
          userInput={userInput}
          onMovieClick={handleMovieClick}
          clearSuggestionsTrigger={clearSuggestionsTrigger} // ✅ pass trigger
        />
      </div>

      {/* Selected Movie */}
      {selectedMovie && (
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="w-48 h-72 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition transform duration-300">
            {selectedMovie.poster_path ? (
              <img
                src={IMG_CDN + selectedMovie.poster_path}
                alt={selectedMovie.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No Image
              </div>
            )}
          </div>
          <p className="text-lg font-semibold">{selectedMovie.title}</p>
          <p className="text-gray-400">
            {selectedMovie.release_date || "Unknown release"}
          </p>
        </div>
      )}

      {/* Search Results Grid */}
      {searchResults.length > 0 && (
        <div className="mt-12 w-11/12">
          <h2 className="text-2xl font-bold mb-6">Search Results</h2>
          <div className="grid grid-cols-6 gap-6">
            {searchResults.map((movie) => (
              <div
                key={movie.id}
                className="w-full h-[240px] bg-[#222] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition transform duration-300 cursor-pointer"
                onClick={() => handleMovieClick(movie)}
              >
                {movie.poster_path ? (
                  <img
                    src={IMG_CDN + movie.poster_path}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No Image
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
