import { useEffect, useState } from "react";
import {
  getMovies,
  getMoviesGenre,
  getTVShows,
  getTVShowsGenre,
} from "../logic";
import { InfoCard } from "./InfoCard";
import { Pagenation } from "./Pagenation";
import { Genre } from "./Genre";

export const Content = ({
  flag,
  moviesShows,
  setMoviesShows,
  setLastUrl,
  lastUrl,
}) => {
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    flag === 1
      ? getMovies(setMoviesShows, setLastUrl, lastUrl)
      : getTVShows(setMoviesShows, setLastUrl, lastUrl);
  }, [flag, setMoviesShows]);

  useEffect(() => {
    flag === 1 ? getMoviesGenre(setGenre) : getTVShowsGenre(setGenre);
  }, [flag, setGenre]);

  return (
    <main className="main-content">
      <Genre
        genre={genre}
        flag={flag}
        lastUrl={lastUrl}
        setLastUrl={setLastUrl}
        setMoviesShows={setMoviesShows}
      />
      <section className="info-card">
        {moviesShows.length > 0 ? (
          moviesShows.map((movieShow) => {
            return (
              <InfoCard
                className="card"
                key={movieShow.id}
                poster_path={movieShow.poster_path}
                overview={movieShow.overview}
                title={movieShow.title}
                release_date={movieShow.release_date}
                vote_average={movieShow.vote_average}
              />
            );
          })
        ) : (
          <h1>Sorry, No items Found!</h1>
        )}
      </section>
      <Pagenation
        flag={flag}
        lastUrl={lastUrl}
        setLastUrl={setLastUrl}
        setMoviesShows={setMoviesShows}
      />
    </main>
  );
};
