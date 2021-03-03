import useFetch from "../helper/usefetch";
import request from "../helper/request";
import MovieList from "../component/MovieList";
import Loading from "../component/Loading";

const Comedy = () => {
  const { data, loading, setPage, page } = useFetch(request.fetchComedyMovies);

  return (
    <div className="comedy">
      {loading && <Loading />}
      {data && <MovieList data={data} setPage={setPage} page={page} />}
    </div>
  );
};

export default Comedy;
