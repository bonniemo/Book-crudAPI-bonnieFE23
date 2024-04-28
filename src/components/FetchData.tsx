import { useFetch } from "../hooks/useFetch"


const FetchData = ({ url }:{ url: string }) => {
    const { data, loading, error } = useFetch(url)

    loading && <p>Loading...</p>
    error && <p>Error: {error}</p>
    
  return (
    <>
    {data &&
        <>
            <h1>{}</h1>
        </>
    }        
    </>
  )
}

export default FetchData