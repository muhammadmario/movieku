import useFetch from '../helper/usefetch'
import request from '../helper/request'
import MovieList from '../component/MovieList';

const Documentaries = () => {
    const { data, loading } = useFetch(request.fetchDocumentaries)

    return (
        <div className='documentaries'>
            {loading && <div>Loading...</div>}
            {data && <MovieList data={data} />}
        </div>
    );
}

export default Documentaries;