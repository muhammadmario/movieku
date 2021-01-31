import useFetch from '../helper/usefetch'
import request from '../helper/request'
import MovieList from '../helper/MovieList';

const Home = () => {
    const { data, loading } = useFetch(request.fetchTrending)

    return (
        <div className='home'>
            {loading && <div>Loading...</div>}
            {data && <MovieList data={data}/>}
        </div>
    );
}

export default Home;