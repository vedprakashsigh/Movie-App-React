import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import "./App.scss";

export const App = () => {
  const [flag, setFlag] = useState(1);
  const [moviesShows, setMoviesShows] = useState([]);

  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <div className="App">
        <header>
          <Navbar
            className="navbar"
            flag={flag}
            setFlag={setFlag}
            setMoviesShows={setMoviesShows}
          />
        </header>
        <main>
          <Content
            flag={flag}
            moviesShows={moviesShows}
            setMoviesShows={setMoviesShows}
          />
          {/* {console.log(moviesShows)} */}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </QueryClientProvider>
  );
};
