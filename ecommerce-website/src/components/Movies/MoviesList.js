import React, { useEffect, useState } from "react";
import classes from "./Movies.module.css";

function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [cancelRetryFlag, setCancelRetryFlag] = useState(false);

  async function fetchData() {
    setIsloading(true);
    const response = await fetch("https://swapi.dev/api/film");
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return await response.json();
  }
  async function retryFetchData() {
    try {
      setError("");
      const data = await fetchData();
      const moviesData = data.results.map((movies) => ({
        title: movies.title,
        id: movies.episode_id,
        desc: movies.opening_crawl,
        director: movies.director,
      }));
      setMoviesList(moviesData);
      setIsloading(false);
    } catch (err) {
      console.error(err.message);
      setError("Something went wrong ....Retrying");
      if (cancelRetryFlag) {
        await new Promise((resolve) => setTimeout(resolve, 9000));
        await retryFetchData();
      }
    }
  }

  useEffect(() => {
    retryFetchData();
    return () => {
      setCancelRetryFlag(true);
    };
  }, []);

  function cancelRetrying() {
    setCancelRetryFlag(true);
  }

  return (
    <React.Fragment>
      <button className={classes.btn}>MoviesList</button>
      <button onClick={cancelRetrying}>Cancel Retry</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {error.length === 0 && isLoading && <p>Loading...</p>}
      {moviesList.length > 0 && (
        <div className={classes.moviesDetails}>
          {moviesList.map((movies) => (
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
