import Axios from "axios";

export const getMovies = async (setMoviesShows) => {
  return await Axios.get("http://127.0.0.1:5000/api/get_movies").then((res) =>
    setMoviesShows(res.data.results)
  );
};

export const getTVShows = async (setMoviesShows) => {
  return await Axios.get("http://127.0.0.1:5000/api/get_tv_shows").then(
    (res) => {
      setMoviesShows(res.data.results);
    }
  );
};

export const search_movies = async (query, setMoviesShows) => {
  return await Axios.get(
    `http://127.0.0.1:5000/api/movie_search/${query}`
  ).then((res) => {
    setMoviesShows(res.data.results);
  });
};

export const search_tv = async (query, setMoviesShows) => {
  return await Axios.get(`http://127.0.0.1:5000/api/tv_search/${query}`).then(
    (res) => {
      setMoviesShows(res.data.results);
    }
  );
};
