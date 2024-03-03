import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = (url) => {

const [data,setData]=useState([]);
const [isLoading,setIsLoading]=useState(false);
const [error,setError]=useState(null);

useEffect(()=>{

const fetchData=async()=>{
   setIsLoading(true); 
try{
const res=await axios.get(url);
const data=await res?.data;
setData(data);
 
}
catch(e){
    console.log(e);
    setError(e);
}
setIsLoading(false);
}
fetchData();

},[url])    


  return {data,isLoading,error}
}

export default useAxios;