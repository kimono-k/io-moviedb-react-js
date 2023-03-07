import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const omdbApi = `https://www.omdbapi.com/?apikey=1a993ee0&i=`;

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState(
    JSON.parse(localStorage.getItem("favoriteMovies")) ?? []
  );

  console.log(favoriteMovies[0]);

  return (
    <div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {favoriteMovies.map((favoriteMovie) => (
          <li key={favoriteMovie.imdbID}>
            <img src={favoriteMovie.Poster} />
            <br />
            <p className="text-center">{favoriteMovie.Title}</p>
            <p className="text-center">{favoriteMovie.Year}</p>
            <div className="grid grid-cols-2 gap-16">
              <Link to={`../edit/${favoriteMovie.imdbID}`}>
                <button className="left-12 text-yellow-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transiton-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Edit
                </button>
              </Link>
              <button className="right-5 color: text-red-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transiton-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-right">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
