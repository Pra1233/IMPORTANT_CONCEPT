
//we can toggle from  child also parend by creating callback function in parent

// Approach 1
// const Imperative = () => {
//     const [toggle,setToggle]=useState(false);
//   const toggleHandler=()=>{
//       setToggle(prev=>!prev);
//   }

//   return (
//     <div>
//      <div>Button </div>
//      <Button Toggle={toggleHandler} toggle={toggle}/>

//     </div>
//   )
// }

// export default Imperative

import React, { useRef, useState } from 'react'
import Button from './Button'


// Approach 2  Aim we want to state  high priority
// Make button reference how??
const Imperative = () => {
    const buttonRef=useRef(null);

  return (
    <div>
     <div>Button</div>
      <button onClick={()=>buttonRef.current.alterToggle()}>PArent Button</button>
     <Button ref={buttonRef}/>

    </div>
  )
}

export default Imperative
