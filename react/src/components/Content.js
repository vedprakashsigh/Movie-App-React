import { useEffect } from "react";
import { getMovies, getTVShows } from "../logic";
import { InfoCard } from "./InfoCard";
import { Pagenation } from "./Pagenation";

export const Content = ({ flag, moviesShows, setMoviesShows }) => {
  useEffect(() => {
    flag === 1 ? getMovies(setMoviesShows) : getTVShows(setMoviesShows);
  }, [flag, setMoviesShows]);

  return (
    <main className="main-content">
      <section className="genre"></section>
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
      <Pagenation />
    </main>
  );
};
