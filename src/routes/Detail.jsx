import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Toggle from "../components/Toggle";

const omdbApi = `https://www.omdbapi.com/?apikey=1a993ee0&i=`;

const Detail = () => {
  let { id } = useParams(); // Dynamic parameter from detail:id <Link to="x">
  console.log(id);

  const [movieDetail, setMovieDetail] = useState("");

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
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <Toggle movieDetail={movieDetail} />
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {movieDetail.Title}
            </h1>
            <div className="mt-3">
              <p className="text-3xl text-gray-900">{movieDetail.Year}</p>
            </div>
            <div className="mt-3">
              <p className="text-xl text-gray-900">{movieDetail.Actors}</p>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700 space-y-6">
                <p>{movieDetail.Plot}</p>
              </div>
            </div>
            <div className="mt-8 flex justify-between">{/* link back */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
