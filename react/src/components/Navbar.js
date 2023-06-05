import { useState } from "react";
import { search_movies, search_tv } from "../logic";

export const Navbar = ({
  flag,
  setFlag,
  setMoviesShows,
  lastUrl,
  setLastUrl,
}) => {
  const [query, setQuery] = useState("");

  return (
    <nav>
      <ul>
        <li onClick={() => setFlag(1)}>Movie</li>
        <li onClick={() => setFlag(0)}>TV</li>
      </ul>
      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            flag === 1
              ? search_movies(query, setMoviesShows, setLastUrl, lastUrl)
              : search_tv(query, setMoviesShows, setLastUrl, lastUrl);
          }}
        >
          <input
            type="text"
            placeholder="Search"
            className="search"
            onChange={(e) => {
              e.preventDefault();

              setQuery(e.target.value);
              flag === 1
                ? search_movies(query, setMoviesShows, setLastUrl, lastUrl)
                : search_tv(query, setMoviesShows, setLastUrl, lastUrl);
            }}
          />
        </form>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            flag === 1
              ? search_movies(query, setMoviesShows, setLastUrl, lastUrl)
              : search_tv(query, setMoviesShows, setLastUrl, lastUrl);
          }}
        >
          Search
        </button>
      </div>
    </nav>
  );
};
