import React, { useState, useEffect } from "react";
import axios from "../API/axios"
import "./css/Row.css"

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <>
    <div className="row">

      <h2>{title}</h2>
      <div className="row__posters">

      {movies.map(movie => (
          <img className="row__poster" src={`${base_url}${movie.poster_path}`} alt={movie.name} key={movie.id} />
          ))}
          </div>
    </div>
    </>
  );
};

export default Row;
