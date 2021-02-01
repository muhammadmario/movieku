import useFetch from '../helper/usefetch'
import request from '../helper/request'
import MovieList from '../component/MovieList';

const TopRated = () => {
    const { data, loading } = useFetch(request.fetchTopRated)

    return (
        <div className='top-rated'>
            {loading && <div>Loading...</div>}
            {data && <MovieList data={data} />}
        </div>
    );
}

export default TopRated;