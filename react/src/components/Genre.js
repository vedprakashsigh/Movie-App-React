import { useEffect, useState } from "react";
import { search_movies_genre, search_tv_genre } from "../logic";

export const Genre = ({ flag, genre, setMoviesShows, setLastUrl, lastUrl }) => {
  const f = () => {
    let initialColorFlag = {};
    initialColorFlag =
      genre?.length > 0 &&
      genre.map((g) => {
        return { ...initialColorFlag, [g.id]: false };
      });
    return initialColorFlag;
  };

  const [genreId, setGenreId] = useState("");
  const [colorFlag, setColorFlag] = useState(f());

  useEffect(() => {
    const fn = async () => {
      flag === 1
        ? await search_movies_genre(
            genreId,
            setMoviesShows,
            setLastUrl,
            lastUrl
          )
        : await search_tv_genre(genreId, setMoviesShows, setLastUrl, lastUrl);
    };

    fn();
  }, [flag, genreId, setMoviesShows]);

  return (
    <section className="genre">
      {genre?.length > 0 &&
        genre.map((g) => {
          return (
            <button
              style={{ background: "orange" }}
              className={`button ${colorFlag[g.id] ? "colored" : ""}`}
              key={g.id}
              id={g.id}
              onClick={() => {
                setColorFlag({ ...colorFlag, [g.id]: !colorFlag[g.id] });
                let arr = genreId.split(g.id.toString());
                if (arr.length !== 1) {
                  setGenreId(genreId.replaceAll(g.id.toString(), ""));
                } else {
                  setGenreId(`${genreId},${g.id}`);
                }
              }}
            >
              {g.name}
            </button>
          );
        })}
      <button
        className="button"
        onClick={() => {
          setColorFlag({});
          setGenreId("");
        }}
      >
        Clear All
      </button>
    </section>
  );
};
