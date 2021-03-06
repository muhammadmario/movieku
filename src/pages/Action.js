import useFetch from "../helper/usefetch";
import request from "../helper/request";
import MovieList from "../component/MovieList";
import Loading from "../component/Loading";

const Action = () => {
  const { data, loading, setPage, page } = useFetch(request.fetchActionMovies);

  return (
    <div className="Action">
      {loading && <Loading />}
      {data && <MovieList data={data} setPage={setPage} page={page} />}
    </div>
  );
};

export default Action;
