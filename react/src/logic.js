import Axios from "axios";

export const getMovies = async (
  setMoviesShows,
  setLastUrl,
  lastUrl,
  pgno = 1
) => {
  if (pgno === 1) {
    return await Axios.get(`http://127.0.0.1:5000/api/get_movies/${pgno}`).then(
      (res) => {
        setMoviesShows(res.data.results);
        setLastUrl(`http://127.0.0.1:5000/api/get_movies`);
      }
    );
  } else {
    return await Axios.get(`${lastUrl}/${pgno}`).then((res) => {
      setMoviesShows(res.data.results);
    });
  }
};

export const getTVShows = async (
  setMoviesShows,
  setLastUrl,
  lastUrl,
  pgno = 1
) => {
  if (pgno === 1) {
    return await Axios.get(
      `http://127.0.0.1:5000/api/get_tv_shows/${pgno}`
    ).then((res) => {
      setMoviesShows(res.data.results);
      setLastUrl(`http://127.0.0.1:5000/api/get_tv_shows/`);
    });
  } else {
    return await Axios.get(`${lastUrl}/${pgno}`).then((res) => {
      setMoviesShows(res.data.results);
    });
  }
};

export const search_movies = async (
  query,
  setMoviesShows,
  setLastUrl,
  lastUrl,
  pgno = 1
) => {
  if (query === "") return getMovies(setMoviesShows, setLastUrl, lastUrl);
  if (pgno === 1) {
    return await Axios.get(
      `http://127.0.0.1:5000/api/movie_search/${query}/${pgno}`
    ).then((res) => {
      setMoviesShows(res.data.results);
      setLastUrl(`http://127.0.0.1:5000/api/movie_search/${query}`);
    });
  } else {
    return await Axios.get(`${lastUrl}/${pgno}`).then((res) => {
      setMoviesShows(res.data.results);
    });
  }
};

export const search_tv = async (
  query,
  setMoviesShows,
  setLastUrl,
  lastUrl,
  pgno = 1
) => {
  if (query === "") return getTVShows(setMoviesShows, setLastUrl, lastUrl);
  if (pgno === 1) {
    return await Axios.get(
      `http://127.0.0.1:5000/api/tv_search/${query}/${pgno}`
    ).then((res) => {
      setMoviesShows(res.data.results);
      setLastUrl(`http://127.0.0.1:5000/api/tv_search/${query}/`);
    });
  } else {
    return await Axios.get(`${lastUrl}/${pgno}`).then((res) => {
      setMoviesShows(res.data.results);
    });
  }
};

export const search_movies_genre = async (
  query,
  setMoviesShows,
  setLastUrl,
  lastUrl,
  pgno = 1
) => {
  if (query === "") return getMovies(setMoviesShows, setLastUrl, lastUrl);
  if (pgno === 1) {
    return await Axios.get(
      `http://127.0.0.1:5000/api/movie_genre_search/${query}/${pgno}`
    ).then((res) => {
      setMoviesShows(res.data.results);
      setLastUrl(`http://127.0.0.1:5000/api/movie_genre_search/${query}`);
    });
  } else {
    return await Axios.get(`${lastUrl}/${pgno}`).then((res) => {
      setMoviesShows(res.data.results);
    });
  }
};

export const search_tv_genre = async (
  query,
  setMoviesShows,
  setLastUrl,
  lastUrl,
  pgno = 1
) => {
  if (query === "") return getTVShows(setMoviesShows, setLastUrl, lastUrl);
  if (pgno === 1) {
    return await Axios.get(
      `http://127.0.0.1:5000/api/tv_genre_search/${query}/${pgno}`
    ).then((res) => {
      setMoviesShows(res.data.results);
      setLastUrl(`http://127.0.0.1:5000/api/tv_genre_search/${query}`);
    });
  } else {
    return await Axios.get(`${lastUrl}/${pgno}`).then((res) => {
      setMoviesShows(res.data.results);
    });
  }
};

export const getMoviesGenre = async (setGenre) => {
  return await Axios.get(`http://127.0.0.1:5000/api/get_movies_genres`).then(
    (res) => {
      setGenre(res.data.genres);
    }
  );
};

export const getTVShowsGenre = async (setGenre) => {
  return await Axios.get(`http://127.0.0.1:5000/api/get_tv_genres`).then(
    (res) => {
      setGenre(res.data.genres);
    }
  );
};
