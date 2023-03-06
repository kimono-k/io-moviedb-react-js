// oldtoggle

const [isChecked, setIsChecked] = useState(false);
const [favoriteMovie, setFavoriteMovie] = useState([]);

const toggleButton = () => {
  // if button is enabled then push the movie in the array
  if (!isChecked && !favoriteMovie.includes(movieDetail)) {
    setIsChecked(true);
    favoriteMovie.push(movieDetail);
    console.log(favoriteMovie);

    // if button is disabled then remove that specific index
  } else {
    setIsChecked(false);
    console.log('Current index of array removed');
    console.log(favoriteMovie);
  }
};
