import useFetch from '../helper/usefetch'
import request from '../helper/request'
import MovieList from '../component/MovieList'
import Loading from '../component/Loading'

const Comedy = () => {
    const { data, loading } = useFetch(request.fetchComedyMovies)

    return (
        <div className='comedy'>
            {loading && <Loading />}
            {data && <MovieList data={data} />}
        </div>
    );
}

export default Comedy;