import Axios from "axios";
import { InfoCard } from "./InfoCard";
import { Pagenation } from "./Pagenation";

import { useLayoutEffect, useState } from "react";

export const Content = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovies = async () => {
    await Axios.get("http://127.0.0.1:5000/api/get_movies").then((res) => {
      setMovieList(res.data.results);
    });
  };

  useLayoutEffect(() => {
    setMovieList(getMovies());
  }, []);

  return (
    <main className="main-content">
      <section className="genre"></section>
      <section className="info-card">
        {movieList.length > 0 &&
          movieList.map((movie) => {
            return (
              <InfoCard
                className="card"
                key={movie.id}
                poster_path={movie.poster_path}
                overview={movie.overview}
                title={movie.title}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
              />
            );
          })}
      </section>
      <Pagenation />
    </main>
  );
};
