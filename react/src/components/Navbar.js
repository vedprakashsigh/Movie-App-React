import { useState } from "react";
import { search_movies, search_tv } from "../logic";

export const Navbar = ({ flag, setFlag, setMoviesShows }) => {
  const [query, setQuery] = useState("");
  return (
    <nav>
      <ul>
        <li onClick={() => setFlag(1)}>Movie</li>
        <li onClick={() => setFlag(0)}>TV</li>
      </ul>
      <form>
        <input
          type="text"
          placeholder="Search"
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <button
        className="btn"
        onClick={() =>
          flag === 1
            ? search_movies(query, setMoviesShows)
            : search_tv(query, setMoviesShows)
        }
      >
        Search
      </button>
    </nav>
  );
};
