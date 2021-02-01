import { useParams } from 'react-router-dom'
import useFetch from '../helper/usefetch';
import { useHistory } from 'react-router-dom'

const MovieDetail = () => {
    const base_url_img = "https://image.tmdb.org/t/p/original/";
    const API_KEY = "67a2bc575f9b0e7e770c3feb6aa69392";
    const { id } = useParams()
    const { loading, detail } = useFetch(`/movie/${id}?api_key=${API_KEY}`)
    const history = useHistory()

    return (
        <div>
            {loading && <div>Loading...</div>}
            {detail &&
                <div className="movie-detail">
                    <div className="movie-detail-container">
                        <div className="poster">
                            <img src={base_url_img + detail.poster_path} alt={detail.title} />
                        </div>
                        <div className="desc">
                            <h2>{detail.title}</h2>
                            <p>{detail.overview}</p>
                            <p><span>Release date :</span> {detail.release_date}</p>
                            <p><span>Status :</span> {detail.status}</p>
                            <p><span>Vote average :</span> {detail.vote_average}</p>
                        </div>
                        <div className="button-wrapper">
                            <button onClick={() => history.go(-1)}>Back</button>
                        </div>
                    </div>
                </div>}
        </div>


    );
}

export default MovieDetail;