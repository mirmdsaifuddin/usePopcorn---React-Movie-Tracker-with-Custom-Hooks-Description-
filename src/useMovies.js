import { useEffect, useState } from "react";

//const KEY = "ff653ffe";
export function useMovies(KEY, query, handleCloseMovie) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setISLoader] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setISLoader(true);
          setError("");
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("Something went wrong");

          const data = await res.json();
          if (data.Response === "False")
            throw new Error(data.Error || "Movie Not Found");
          setMovies(data.Search);
          setError("");
          //console.log(data.Search);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err.message);
            setError(err.message);
          }
        } finally {
          setISLoader(false);
        }
      }
      if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }
      handleCloseMovie();
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { isLoading, movies, error };
}
