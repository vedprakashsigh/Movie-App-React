import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useTMDB = (url) => {
  const {
    data: movieList,
    isLoading,
    refetch,
  } = useQuery(["movieList"], async () => {
    return await Axios.get(url).then((res) => res.data.results);
  });
  // movieList.forEach((m) => {
  //   console.log(m.title);
  // });
  console.log(movieList);
  return [movieList, refetch];
};
