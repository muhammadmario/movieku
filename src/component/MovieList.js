import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import { useState, useEffect } from "react";

const MovieList = ({ data, setPage, page }) => {
  const base_url_img = "https://image.tmdb.org/t/p/original/";

  const [scrollY, setScrollY] = useState(0);

  const logit = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", logit);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  console.log(scrollY);

  const handlePrevPage = () => {
    setPage((c) => c - 1);
  };

  const handleNextPage = () => {
    setPage((c) => c + 1);
    setScrollY(0);
  };

  //   fuse.js
  const [query, setquery] = useState("");
  const fuse = new Fuse(data, {
    keys: ["title", "overview"],
    includeScore: true,
  });
  const results = fuse.search(query);
  const movieResult = query ? results.map((result) => result.item) : data;

  const handleOnSearch = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    setquery(value);
  };

  return (
    <div className="movieList">
      <div className="search">
        <i class="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search movie"
          value={query}
          onChange={handleOnSearch}
        />
      </div>
      <div className="movie">
        {movieResult.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <div className="poster" key={movie.id}>
              <img src={base_url_img + movie.poster_path} alt={movie.name} />
            </div>
          </Link>
        ))}
      </div>

      <div className="pagination">
        {page < 2 ? (
          <button>Previous Page</button>
        ) : (
          <button onClick={handlePrevPage}>Previous Page</button>
        )}

        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default MovieList;
