import React, { useState } from "react";
import classes from "./Movies.module.css";
function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);
  const getData = () => {
    console.log("inisde getData()");
    fetch("https://swapi.dev/api/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data =", data);
        const moviesData = data.results.map((movies) => ({
          title: movies.title,
          id: movies.episode_id,
          desc: movies.opening_crawl,
          director: movies.director,
        }));
        console.log("moviesList =", moviesList);
        return setMoviesList(moviesData);
      });
  };
  return (
    <React.Fragment>
      <button className={classes.btn} onClick={getData}>
        MoviesList
      </button>
      {moviesList.length > 0 && (
        <div className={classes.moviesDetails}>
          {moviesList.length > 0 &&
            moviesList.map((movies) => (
              <span key={movies.id}>
                {movies.title} - {movies.desc} - <b>{movies.director}</b>
              </span>
            ))}
        </div>
      )}
    </React.Fragment>
  );
}

export default MoviesList;
