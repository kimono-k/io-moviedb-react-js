import { useEffect, useState } from "react";

const Toggle = ({ movieDetail }) => {
  const [favoriteMovies, setFavoriteMovies] = useState(
    JSON.parse(localStorage.getItem("favoriteMovies")) ?? [] // if left === null/undefined then run the right one.
  );

  // Iterate over all favoritemovies and get the specific ids
  const favoriteMoviesIDs = favoriteMovies.map(
    (favoriteMovie) => favoriteMovie.imdbID
  );

  // Does the mapped array contain the string from the specific imdbID?
  const isChecked = favoriteMoviesIDs.includes(movieDetail.imdbID); // true/false values for toggle happens here

  /**
   * Removes or adds movies to the localStorage when you click on the toggle button.
   */
  const toggleButton = () => {
    // If the button is checked and includes the ID of the movie detail is present (true) then delete that movie
    if (isChecked) {
      console.log("Filter!");
      const newFavorites = favoriteMovies.filter(
        (favoriteMovie) => favoriteMovie.imdbID !== movieDetail.imdbID // false (switch), we compare the mapped array with the original array
      );
      setFavoriteMovies(newFavorites);
      console.log(newFavorites);
      localStorage.setItem("favoriteMovies", JSON.stringify(newFavorites));
      // If the button isn't checked then turn it on and add the old object copy with the new object
    } else {
      const newFavorites = [...favoriteMovies, movieDetail]; // Old data from localstorage + new movieDetail
      setFavoriteMovies(newFavorites);
      console.log(newFavorites);
      localStorage.setItem("favoriteMovies", JSON.stringify(newFavorites));
    }
  };

  return (
    <div className="flex flex-row-reverse">
      <label className="relative flex justify-between items-center group p-2 text-xl">
        <b>{isChecked ? "🥰" : "Add to favorites"}</b>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleButton}
          className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
        />
        <span className="w-16 h-10 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6 group-hover:after:translate-x-1"></span>
      </label>
    </div>
  );
};

export default Toggle;
