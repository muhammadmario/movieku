import { Link } from 'react-router-dom'
const MovieList = ({ data }) => {
    const base_url_img = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="movieList">
            {data.map(movie => (
                <Link to={`/movie/${movie.id}`}>
                    <div className="poster" key={movie.id}>
                        <img src={base_url_img + movie.poster_path} alt={movie.name} />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default MovieList;