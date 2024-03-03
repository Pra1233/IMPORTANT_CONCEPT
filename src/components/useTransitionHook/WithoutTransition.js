import React, { useState } from 'react'

const WithoutTransition = () => {
const[input,setInput]=useState('');
const [Arr,setArr]=useState([]);
const handleChange=(e)=>{
    setInput(e.target.value);
    let n=20000;
    const arr=[];
 for(let i=0;i<n;i++){
    arr.push(e.target.value);
 }
 setArr(arr);
 //set input and set arr are scheduled together so that is why both become slow so we need to prioritize one
 // setinput is doing earlier and it is waiting for setArr() also which make setInput slow
}


  return (
<>
<input type='text' value={input} onChange={handleChange}/>
{
    Arr.map((data,index)=>(
        <h3 key={index}>{data}</h3> 
    ))
}

</>


  )  
}

export default WithoutTransition;