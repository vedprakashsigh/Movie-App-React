import { useEffect, useState } from "react";
import {
  getMovies,
  getTVShows,
  search_movies_genre,
  search_tv_genre,
} from "../logic";

export const Genre = ({ flag, genre, setMoviesShows }) => {
  const [genreId, setGenreId] = useState("");
  const [colorFlag, setColorFlag] = useState(false);
  const [col, setCol] = useState("orange");

  useEffect(() => {
    colorFlag === true ? setCol("blue") : setCol("orange");
  }, [colorFlag]);

  useEffect(() => {
    const fn = async () => {
      flag === 1
        ? await search_movies_genre(genreId, setMoviesShows)
        : await search_tv_genre(genreId, setMoviesShows);
    };

    fn();
  }, [flag, genreId, setMoviesShows]);

  return (
    <section className="genre">
      {genre.length > 0 &&
        genre.map((g) => {
          return (
            <button
              style={{ background: col }}
              className="button"
              key={g.id}
              id={g.id}
              onClick={() => {
                setColorFlag(!colorFlag);
                let arr = genreId.split(g.id.toString());
                if (arr.length !== 1) {
                  setGenreId(genreId.replaceAll(g.id.toString(), ""));
                } else setGenreId(`${genreId},${g.id}`);
              }}
            >
              {g.name}
            </button>
          );
        })}
      <button
        className="button"
        onClick={() => {
          setColorFlag(false);
          setGenreId("");
        }}
      >
        Clear All
      </button>
    </section>
  );
};
