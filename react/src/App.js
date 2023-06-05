import { useState } from "react";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import "./App.scss";

export const App = () => {
  const [flag, setFlag] = useState(1);
  const [moviesShows, setMoviesShows] = useState([]);
  const [lastUrl, setLastUrl] = useState("");

  return (
    <div className="App">
      <header>
        <Navbar
          className="navbar"
          flag={flag}
          setFlag={setFlag}
          setMoviesShows={setMoviesShows}
          lastUrl={lastUrl}
          setLastUrl={setLastUrl}
        />
      </header>
      <main>
        <Content
          flag={flag}
          moviesShows={moviesShows}
          setMoviesShows={setMoviesShows}
          lastUrl={lastUrl}
          setLastUrl={setLastUrl}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
