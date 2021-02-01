import useFetch from '../helper/usefetch'
import request from '../helper/request'
import MovieList from '../component/MovieList';

const Romance = () => {
    const { data, loading } = useFetch(request.fetchRomanceMovies)

    return (
        <div className='romance'>
            {loading && <div>Loading...</div>}
            {data && <MovieList data={data} />}
        </div>
    );
}

export default Romance;