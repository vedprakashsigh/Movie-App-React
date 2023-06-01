import { useEffect, useState } from "react";

export const Genre = ({ genre }) => {
  const [genreId, setGenreId] = useState("");
  const [colorFlag, setColorFlag] = useState(false);
  const [col, setCol] = useState("orange");

  useEffect(() => {
    colorFlag === true ? setCol("blue") : setCol("orange");
  }, [colorFlag]);

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
                setGenreId(`${genreId},${g.id}`);
              }}
            >
              {g.name}
            </button>
          );
        })}
    </section>
  );
};
