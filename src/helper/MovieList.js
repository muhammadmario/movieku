const MovieList = ({ data }) => {
    const base_url_img = "https://image.tmdb.org/t/p/original/";
    return (
        <div className="movieList">
            {data.map(movie => (
                    <div className="poster">
                        <img src={base_url_img + movie.poster_path} alt={movie.name} />
                    </div>
            ))}
        </div>
    );
}

export default MovieList;