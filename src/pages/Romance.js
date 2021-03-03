import useFetch from "../helper/usefetch";
import request from "../helper/request";
import MovieList from "../component/MovieList";
import Loading from "../component/Loading";

const Romance = () => {
  const { data, loading, setPage, page } = useFetch(request.fetchRomanceMovies);

  return (
    <div className="romance">
      {loading && <Loading />}
      {data && <MovieList data={data} setPage={setPage} page={page} />}
    </div>
  );
};

export default Romance;
