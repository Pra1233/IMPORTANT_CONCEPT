import React, { useRef, useState,useMemo } from 'react'

const Search = () => {
const [arr,setArr]=useState([]);
const [searchText,setSearchText]=useState('');
const text=useRef('');


const searchItems= useMemo(()=>{
  return arr.filter(data=>data.text.toLowerCase().includes(searchText.toLowerCase())); 
},[arr,searchText])



const handleSubmit=(e)=>{
 e.preventDefault();
 const textInput=text.current.value;
 setArr(prevArr=>[...prevArr,{ text:textInput,id:new Date().toString()}]);
 text.current.value='';
}
console.log(searchText);
  return (
    <>
    <label>
   Search:
   <input type="search" onChange={(e)=>setSearchText(e.target.value)}/>
    </label>
    <hr/>

    <form onSubmit={handleSubmit}>
        <label>
            Enter text:
          <input type="text" ref={text}  />
          
        </label>
         <button type='submit'>Submit</button>
    </form>
    {
        searchItems.map(e=>(
            <h1 key={e.id}>{e.text}</h1>
        ))
    }
    </>
  )
}

export default Search