import React,{useReducer} from 'react'

const ACTIONS={
    NAME:'name',
    ADDRESS:'address',
    AGE:'age'
}

const reducer=(state,action)=>{
  switch(action.type){
    case ACTIONS.NAME:
        return {...state, [ACTIONS.NAME ]:action.payload  };
    
    case ACTIONS.ADDRESS:
        return { ...state,[ACTIONS.ADDRESS]:action.payload};
        
    case ACTIONS.AGE: 
         return {...state,[ACTIONS.AGE]:action.payload};    
        default:
            return {...state};
  }
}


const ReducerForm = () => {
    const [state,dispatch]=useReducer(reducer,{
        name:"",
       address:"",
       age:"",
    });

const submitHandler=(e)=>{
 e.preventDefault();
  const obj={
   name: state.name,
   address:state.address,
   age:state.age,
  }
  console.log(obj);
}


  return (
<>
    <form onSubmit={submitHandler}>
        <input type="text" name="name" placeholder='Enter name' onChange={(e)=>dispatch({type:ACTIONS.NAME,payload:e.target.value})} />
        <input type='text' name='address' placeholder='Enter address' onChange={(e)=>dispatch({type:ACTIONS.ADDRESS,payload:e.target.value})}/>
        <input type='number' name='age' placeholder='Enter Age'onChange={(e)=>dispatch({type:ACTIONS.AGE, payload:e.target.value})} />
        <button type='submit'>Submit</button>
    </form>

</>
  )
}

export default ReducerForm