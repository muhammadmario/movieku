import useFetch from "../helper/usefetch";
import request from "../helper/request";
import MovieList from "../component/MovieList";
import Loading from "../component/Loading";

const TopRated = () => {
  const { data, loading, setPage, page } = useFetch(request.fetchTopRated);

  return (
    <div className="top-rated">
      {loading && <Loading />}
      {data && <MovieList data={data} setPage={setPage} page={page} />}
    </div>
  );
};

export default TopRated;
