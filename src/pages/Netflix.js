import useFetch from "../helper/usefetch";
import request from "../helper/request";
import MovieList from "../component/MovieList";
import Loading from "../component/Loading";

const Netflix = () => {
  const { data, loading, setPage, page } = useFetch(
    request.fetchNetflixOriginals
  );
  return (
    <div className="netflix">
      {loading && <Loading />}
      {data && <MovieList data={data} setPage={setPage} page={page} />}
    </div>
  );
};

export default Netflix;
