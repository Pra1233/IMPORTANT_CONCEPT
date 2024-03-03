import React, { useEffect, useState } from 'react'

const Input = () => {

const[data,setData]=useState({
    name:"",
    age:"",
    address:"",
});

useEffect(()=>{
console.log(data);
},[data]);

const handleChange=(e)=>{
    e.preventDefault();
    setData(prevData=>({...prevData,[e.target.name]:e.target.value}));
}


  return (
    <>
    <form>
        <input type='text'  name="name" placeholder='Enter name' onChange={handleChange}/>
        <input type='number' name="age" placeholder='Enter Age' onChange={handleChange}/>
        <input type='text' name="address" placeholder='Enter Address' onChange={handleChange}/>
      
    </form>
    
    
    </>
  )
}

export default Input;