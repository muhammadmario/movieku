import useFetch from "../helper/usefetch";
import request from "../helper/request";
import MovieList from "../component/MovieList";
import Loading from "../component/Loading";

const Documentaries = () => {
  const { data, loading, setPage, page } = useFetch(request.fetchDocumentaries);

  return (
    <div className="documentaries">
      {loading && <Loading />}
      {data && <MovieList data={data} setPage={setPage} page={page} />}
    </div>
  );
};

export default Documentaries;
