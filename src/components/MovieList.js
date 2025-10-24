import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
   
  return (
    <div className='px-6 py-4 '>
        <h1 className='text-xl md:text-2xl font-bold text-white mb-3 px-2'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'>
            
            <div className='flex '>
                {
                    movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default MovieList