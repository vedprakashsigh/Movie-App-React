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

export const search_movies_genre = async (query, setMoviesShows) => {
  if (query === "") return getMovies(setMoviesShows);
  return await Axios.get(
    `http://127.0.0.1:5000/api/movie_genre_search/${query}`
  ).then((res) => {
    setMoviesShows(res.data.results);
  });
};

export const search_tv_genre = async (query, setMoviesShows) => {
  if (query === "") return getTVShows(setMoviesShows);
  return await Axios.get(
    `http://127.0.0.1:5000/api/tv_genre_search/${query}`
  ).then((res) => {
    setMoviesShows(res.data.results);
  });
};

export const getMoviesGenre = async (setGenre) => {
  return await Axios.get("http://127.0.0.1:5000/api/get_movies_genres").then(
    (res) => {
      setGenre(res.data.genres);
    }
  );
};

export const getTVShowsGenre = async (setGenre) => {
  return await Axios.get("http://127.0.0.1:5000/api/get_tv_genres").then(
    (res) => {
      setGenre(res.data.genres);
    }
  );
};
