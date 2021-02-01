import useFetch from '../helper/usefetch'
import request from '../helper/request'
import MovieList from '../component/MovieList'
import Loading from '../component/Loading'

const Home = () => {
    const { data, loading } = useFetch(request.fetchTrending)

    return (
        <div className='home'>
            {loading && <Loading />}
            {data && <MovieList data={data} />}
        </div>
    );
}

export default Home;