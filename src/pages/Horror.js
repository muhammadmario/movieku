import useFetch from '../helper/usefetch'
import request from '../helper/request'
import MovieList from '../component/MovieList'
import Loading from '../component/Loading'

const Horror = () => {
    const { data, loading } = useFetch(request.fetchHorrorMovies)

    return (
        <div className='horror'>
            {loading && <Loading />}
            {data && <MovieList data={data} />}
        </div>
    );
}

export default Horror;