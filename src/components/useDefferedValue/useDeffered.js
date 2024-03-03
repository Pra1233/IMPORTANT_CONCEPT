import React, { useState, useDeferredValue } from 'react'


const Deffered = () => {
  const [data,setData]=useState(0);
  const deferredValue=useDeferredValue(data,{ timeoutMs: 2000 });
  console.log(data,deferredValue);

  return (
  <>
  <h1>{data}</h1>
  <h2>{deferredValue}</h2>
  <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
  
  </>
  )
}

export default Deffered;