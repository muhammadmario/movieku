import useFetch from '../helper/usefetch'
import request from '../helper/request'
import MovieList from '../component/MovieList';

const Comedy = () => {
    const { data, loading } = useFetch(request.fetchComedyMovies)

    return (
        <div className='comedy'>
            {loading && <div>Loading...</div>}
            {data && <MovieList data={data} />}
        </div>
    );
}

export default Comedy;