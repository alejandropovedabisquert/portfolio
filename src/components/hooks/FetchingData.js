import { useEffect, useState } from "react"

const FetchingData = (url) =>{
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    useEffect(()=>{
        const getData = async ()=>{
            await fetch(url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }, setLoading(true))
            .then(response => response.json())
            .then(response =>{
                setData(response.portfolio)
                setLoading(false)
            }).catch(err => setError(err));
        }
        getData()
    },[url])
    return {data, error, loading}

}

export default FetchingData