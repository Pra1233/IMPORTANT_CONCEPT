

// const Button = (props) => {
// //  const [toggle,setToggle]=useState(false);

//   return (
//     <div>
//      { props.toggle && (<h2>Button from Child</h2>)}
//        <button onClick={props.Toggle}>Click</button>
//     </div>
//   )
// }

// export default Button

// --------------------------------------------------------------
// formad ref transform functional component  
// function called with ref it is useImperativeHandler

import React, { useState,forwardRef,useImperativeHandle } from 'react'
const Button =forwardRef((props,ref) => { //first props,ref
 const [toggle,setToggle]=useState(false);

// useImperativeHandle(ref,()=>({})) // function return object 


useImperativeHandle(ref,()=>({
    alterToggle(){ //function any name
      setToggle(prev=>!prev)
    }
}))

  return ( 
    <div>
     {toggle && (<h2>Button from Child</h2>)}
       <button >Click</button>
    </div>
  )
})

export default Button
