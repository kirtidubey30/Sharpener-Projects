import React, { useEffect, useState } from "react";
import classes from "./Movies.module.css";

function MoviesList() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [cancelRetryFlag, setCancelRetryFlag] = useState(false);
  const [newTitle, setTitle] = useState("");
  const [newDesc, setDesc] = useState("");
  const [dir, setDir] = useState("");

  async function fetchData() {
    setIsloading(true);
    const response = await fetch("https://swapi.dev/api/films");
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
  const handleDeleteItem = (itemId) => {
    setMoviesList(moviesList.filter((movie) => movie.id !== itemId));
  };
  const onAddMovie = () => {
    const newItem = {
      episode_id: moviesList.length + 1,
      title: newTitle,
      opening_crawl: newDesc,
      director: dir,
    };
    console.log("Data added =", newItem);
    setMoviesList([...moviesList, newItem]);
    setDesc("");
    setDir("");
    setTitle("");
  };
  return (
    <React.Fragment>
      <button className={classes.btn}>Fetch Movies</button>
      <button onClick={cancelRetrying}>Cancel Retry</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {error.length === 0 && isLoading && <p>Loading...</p>}
      <div className={classes.parentDivOflists}>
        <div className={classes.form}>
          <form>
            <span>
              <label>Title</label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </span>
            <span>
              <label>Opening Text</label>
              <input
                type="text"
                value={newDesc}
                onChange={(e) => setDesc(e.target.value)}
              ></input>
            </span>
            <span>
              <label>Description</label>
              <input
                type="text"
                value={dir}
                onChange={(e) => setDir(e.target.value)}
              ></input>
            </span>
          </form>
          <button onClick={onAddMovie}>Add Movie</button>
        </div>
        {moviesList.length > 0 && (
          <div className={classes.moviesDetails}>
            <div className={classes.listHeading}>LISTS : </div>
            {moviesList.map((movies) => (
              <span key={movies.id}>
                {movies.title} - {movies.desc} -
                <div className={classes.removeBtnDiv}>
                  <b>{movies.director}</b>
                  <button onClick={() => handleDeleteItem(movies.id)}>
                    Remove
                  </button>
                </div>
              </span>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default MoviesList;
