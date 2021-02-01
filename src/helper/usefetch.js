import { useState, useEffect } from 'react'
import axios from 'axios'


const useFetch = (url) => {
    const base_url = "https://api.themoviedb.org/3";

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const [detail, setDetail] = useState([])


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(base_url + url)
            setData(request.data.results)
            setDetail(request.data)
            setLoading(false)
        }
        fetchData()
    }, [url])
    return { loading, data, detail };
}

export default useFetch;