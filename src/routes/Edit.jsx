import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const omdbApi = `https://www.omdbapi.com/?apikey=1a993ee0&i=`;

let remarkDetail;

const Edit = () => {
  let { id } = useParams();
  console.log(id);

  const [favoriteMovies, setFavoriteMovies] = useState(
    JSON.parse(localStorage.getItem("favoriteMovies")) ?? []
  );

  console.log(favoriteMovies.remark);

  const [movieDetail, setMovieDetail] = useState("");
  const [remark, setRemark] = useState(localStorage.getItem("Remark") ?? []);

  function editRemark(e) {
    setRemark(e.target.value);
  }

  function buttonHandler(e) {
    e.preventDefault();
    remarkDetail = favoriteMovies.remark = remark;
    localStorage.setItem("Remark", remarkDetail);
    // addremark should be added together with the previous version of the movieDetail
  }

  // const newFavorites = [...favoriteMovies, movieDetail]; // Old data from localstorage + new movieDetail
  // setFavoriteMovies(newFavorites);
  // console.log(newFavorites);
  // localStorage.setItem("favoriteMovies", JSON.stringify(newFavorites));

  useEffect(() => {
    fetch(`${omdbApi}${id}`)
      .then((response) => response.json())
      .then((json) => setMovieDetail(json))
      .catch((error) => {
        console.error(error);
      });
  }, [id]); // [] = stops the infinite loop, [] = dependency array (x is afhankelijk)

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div>
            <div className="w-full aspect-w-1 aspect-h-1">
              <img
                src={movieDetail.Poster}
                className="w-full h-full object-center object-cover sm:rounded-lg"
              />
            </div>
          </div>
          <form>
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <div className="mt-1">
                  <input
                    name="Title"
                    type="text"
                    defaultValue={movieDetail.Title}
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Year
                </label>
                <div className="mt-1">
                  <input
                    name="Year"
                    type="text"
                    defaultValue={movieDetail.Year}
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Actors
                </label>
                <div className="mt-1">
                  <input
                    name="Actors"
                    type="text"
                    defaultValue={movieDetail.Actors}
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700">
                  Remarks
                </label>
                <div className="mt-1">
                  <textarea
                    name="Remarks"
                    type="text"
                    value={remark}
                    onChange={editRemark}
                    className="shadow-sm p-2 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  onClick={buttonHandler}
                  className="text-sm text-blue-500 hover:text-black"
                  type="submit"
                >
                  Save favorite
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
