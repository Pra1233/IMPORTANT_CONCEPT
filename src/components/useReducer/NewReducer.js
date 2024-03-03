import React, { useReducer, useState } from 'react'

const ACTIONS={
ADD_TODO:'add_todo',
TOGGLE_TODO:'toggle_todo',
DELETE_TODO:'delete_todo',
}

const reducer=(todo,action)=>{
 switch(action.type){
    case ACTIONS.ADD_TODO:
        return [...todo,{id:Date.now(),name:action.payload.name,complete:false}]
    
        case ACTIONS.TOGGLE_TODO:
            return todo.map(item=>item.id===action.payload.id ?{...item,complete:true}:item);
        case  ACTIONS.DELETE_TODO:
            return todo.filter(item=>item.id!==action.payload.id);
    default:
        return todo;
 }
}


const NewReducer = () => {  
const[todo,dispatch]=useReducer(reducer,[]);
const [name,setName]=useState('');


const submitHandler=(e)=>{
 e.preventDefault();
 dispatch({type:ACTIONS.ADD_TODO,payload:{name:name}})
}

const toggleHandler=(id)=>{
 dispatch({type:ACTIONS.TOGGLE_TODO,payload:{id}});
}

const deleteHandler=(id)=>{
   dispatch({type:ACTIONS.DELETE_TODO,payload:{id}})
}


  return (

    <>
       <form onSubmit={submitHandler}>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <button type='submit'> Submit</button>
    </form>

    {todo.map(e=>(
        <div key={e.id}>
        <h2 style={{color:e.complete?'green':'red'}}> {e.name}  </h2>
      {!e.complete &&  <button onClick={()=>toggleHandler(e.id)}>Mark Complete</button>}
        <button onClick={()=>deleteHandler(e.id)}>Delete</button>
        <hr/>
        </div>
    ))}
 
    </>
  )
}

export default NewReducer