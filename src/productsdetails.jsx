import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const [movieData, setMovieData] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${params.id}&apikey=acac0345`)
      .then((response) => response.json())
      .then((data) => setMovieData(data))
      .catch((error) => console.error("Error fetching movie data:", error));
  }, [params.id]);

  if (!movieData) {
    return <div className="h-screen p-9">Loading...</div>;
  }

  return (
    <div className="flex flex-col h-[500px]">
      <div className="flex items-center justify-around">
      <img src={movieData.Poster} alt={movieData.Title} className="w-[350px] h-[400px] p-5 " />
      <div className="w-[30%]">
      <h2 className="text-xl font-bold py-4">{movieData.Title}</h2>
      <h2 className="text-sm font-bold py-4">Year: {movieData.Year}</h2>
      <h2 className="text-sm font-medium py-4">IMDb ID: {movieData.imdbID}</h2>
      </div>
      </div>
    </div>
  );
}

export default ProductDetails;
