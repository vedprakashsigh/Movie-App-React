import { useTMDB } from "../useTMDB";
import { InfoCard } from "./InfoCard";
import { Pagenation } from "./Pagenation";

const API_KEY = "api_key=e09e73373fe71e5e88a2defeacfd7210";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const SEARCH_URL = BASE_URL + "/search/movie?" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";

export const Content = () => {
  const [movieList, refetch] = useTMDB(API_URL);

  return (
    <main className="main-content">
      <section className="genre"></section>
      <InfoCard />
      {movieList.forEach((movie) => movie.title)}
      {/* {movieList.title} */}
      <Pagenation />
    </main>
  );
};
