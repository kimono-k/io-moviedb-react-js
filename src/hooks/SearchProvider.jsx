import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Global variables
const omdbApi = `https://www.omdbapi.com/?apikey=1a993ee0&s=`;

// Custom Hooks
const SearchResultContext = React.createContext(); // Used as a provider
const MovieResultContext = React.createContext();

// Custom Hook for making the return value globally available to all children
export function useSearchData() {
  return useContext(SearchResultContext);
}

export function useMovieData() {
  const movieDataContext = useContext(MovieResultContext);
  if (movieDataContext === undefined || movieDataContext === null) {
    throw new Error(
      'MovieResultContext must be used within the MovieResultContextProvider'
    );
  }
  return useContext(MovieResultContext);
}

// The provider is where the state and functions live (for global usage)
export function SearchProvider({ children }) {
  // State variables
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState('');
  const navigate = useNavigate();

  // Functions
  // Search for a movie
  const search = (event) => {
    setSearchTerm(event.target.value);
    fetch(`${omdbApi}${searchTerm}`)
      .then((response) => response.json())
      .then((json) => setMovies(json))
      .catch((error) => {
        console.error(error);
      });
    console.log(movies);
    return movies;
  };

  // Redirect to home route while searching
  const navigateHandler = () => {
    return navigate('/');
  };

  return (
    <SearchResultContext.Provider value={{ search, navigateHandler }}>
      <MovieResultContext.Provider value={movies}>
        {children}
      </MovieResultContext.Provider>
    </SearchResultContext.Provider>
  );
}
