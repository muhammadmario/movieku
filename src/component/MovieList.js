import { Link } from "react-router-dom";
import Fuse from "fuse.js";
import { useState } from "react";

const MovieList = ({ data }) => {
  const base_url_img = "https://image.tmdb.org/t/p/original/";

  const [query, setquery] = useState("");

  const fuse = new Fuse(data, {
    keys: ["title", "overview"],
    includeScore: true,
  });

  const results = fuse.search(query);

  console.log(results);

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
      {movieResult.map((movie) => (
        <Link to={`/movie/${movie.id}`}>
          <div className="poster" key={movie.id}>
            <img src={base_url_img + movie.poster_path} alt={movie.name} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
