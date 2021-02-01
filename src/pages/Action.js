import useFetch from '../helper/usefetch'
import request from '../helper/request'
import MovieList from '../component/MovieList';

const Action = () => {
    const { data, loading } = useFetch(request.fetchActionMovies)

    return (
        <div className='Action'>
            {loading && <div>Loading...</div>}
            {data && <MovieList data={data} />}
        </div>
    );
}

export default Action;