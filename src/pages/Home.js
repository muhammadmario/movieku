import useFetch from "../helper/usefetch";
import request from "../helper/request";
import MovieList from "../component/MovieList";
import Loading from "../component/Loading";

const Home = () => {
  const { data, loading, setPage, page } = useFetch(request.fetchTrending);

  return (
    <div className="home">
      {loading && <Loading />}
      {data && <MovieList data={data} setPage={setPage} page={page} />}
    </div>
  );
};

export default Home;
