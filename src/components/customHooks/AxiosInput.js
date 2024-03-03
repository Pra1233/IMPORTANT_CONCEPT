
import useAxios from './useAxios';
const AxiosInput = () => {
 
    const {data,isLoading,error}=useAxios('https://jsonplaceholder.typicode.com/posts');

  return (
    <>
    {data && data.map(e=>(
        <h1 key={e.id}>{e.title}</h1>
    ))}
    {isLoading && <h2>Loading ...</h2>}
     {error && <span>{error}</span>}
     {data && console.log(data)};
    </>
  )
}

export default AxiosInput;