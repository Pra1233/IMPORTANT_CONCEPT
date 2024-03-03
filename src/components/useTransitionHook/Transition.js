import React, { useState,useTransition } from 'react'

const Transition = () => {
const[ispending,startTransition]=useTransition();

const[input,setInput]=useState('');
const [Arr,setArr]=useState([]);
const handleChange=(e)=>{
    setInput(e.target.value); //high priority
    let n=20000;

    startTransition(()=>{ //it will low priority 
    const arr=[];
  for(let i=0;i<n;i++){
  arr.push(e.target.value);
 }
  setArr(arr);
    })
  

 //set input and set arr are scheduled together so that is why both become slow so we need to prioritize one
 // setinput is doing earlier and it is waiting for setArr() also which make setInput slow
 //in react every thing is by default high priority so we need to make some low priority
 //after high priority  run it run low priority
 //use usetransition only when  it required because it render two time one for  
    // setInput(e.target.value);
 //and other for  setArr(arr);
}


  return (
<>
<input type='text' value={input} onChange={handleChange}/>

   {ispending
    ? "Loading ..." 
    : Arr.map((data,index)=>(
        <h3 key={index}>{data}</h3> 
    ))}
</>


  )  
}

export default Transition