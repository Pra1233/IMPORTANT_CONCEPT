import React, { useId } from 'react'
import { useReducer } from 'react'

const WithoutReducer = () => {
  const id=useId();
  const name=useId();   
  console.log(id,name);

const initialState={count:0,text:""};

const reducer=(state,action)=>{
  switch(action.type){
   case "INCREMENT":
      return {...state,count:state.count+1};
  case "SETTEXT":
     return {...state,text:action.payload};
  default:
   return state;   
  }
}

const [state,dispatch]=useReducer(reducer,initialState);


  return (
    <div>
      <h1>{state.count}</h1>
      <h2>{state.text}</h2>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>Change Count</button>
       <button onClick={()=>dispatch({type:"SETTEXT", payload:state.count})}>Change TEXT</button>
    </div>
  )
}

export default WithoutReducer