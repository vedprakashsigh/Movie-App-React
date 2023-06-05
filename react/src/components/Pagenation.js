import { useEffect, useState } from "react";
import { getMovies, getTVShows } from "../logic";

export const Pagenation = ({ flag, setLastUrl, lastUrl, setMoviesShows }) => {
  const [pgno, setPgno] = useState(1);

  useEffect(() => {
    const fn = async () => {
      flag === 1
        ? await getMovies(setMoviesShows, setLastUrl, lastUrl, pgno)
        : await getTVShows(setMoviesShows, setLastUrl, lastUrl, pgno);
    };

    fn();
  }, [pgno]);

  return (
    <div className="pagenation">
      <span
        className={`prev ${pgno <= 1 && "disabled"}`}
        onClick={async () => {
          pgno > 1 && setPgno(pgno - 1);
        }}
      >
        Previous Page
      </span>
      <span className="pgno">{pgno}</span>
      <span
        className="next"
        onClick={async () => {
          setPgno(pgno + 1);
        }}
      >
        Next Page
      </span>
    </div>
  );
};
