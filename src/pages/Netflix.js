import useFetch from '../helper/usefetch'
import request from '../helper/request'
import MovieList from '../component/MovieList';

const Netflix = () => {
    const { data, loading } = useFetch(request.fetchNetflixOriginals)
    return (
        <div className="netflix">
            {loading && <div>Loading...</div>}
            {data && <MovieList data={data} />}
        </div>
    );
}

export default Netflix;