import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const base_url = "https://api.themoviedb.org/3";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [detail, setDetail] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${base_url}${url}&page=${page}`);
      setData(request.data.results);
      console.log(request.data);
      setDetail(request.data);
      setLoading(false);
    }
    fetchData();
  }, [url, page]);

  return { loading, data, detail, setPage, page };
};

export default useFetch;
