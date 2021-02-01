import useFetch from '../helper/usefetch'
import request from '../helper/request'
import MovieList from '../component/MovieList';

const Horror = () => {
    const { data, loading } = useFetch(request.fetchHorrorMovies)

    return (
        <div className='horror'>
            {loading && <div>Loading...</div>}
            {data && <MovieList data={data} />}
        </div>
    );
}

export default Horror;