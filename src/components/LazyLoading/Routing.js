import React,{Suspense, lazy} from 'react'
import {NavLink ,Route ,Switch } from 'react-router-dom';
const Home=lazy(()=>import('./Home') );
const About=lazy(()=>import('./About'));



const Routing = () => {
  return (
    <>
    <NavLink to="/home"  activeClassName="link">Home</NavLink>
    <NavLink to="/about" activeClassName="link">About</NavLink>

     <Switch>
        <Route path="/home" exact>
            <Suspense fallback={"Loading..."}>
             <Home/> 
            </Suspense>    
              </Route>
       
        <Route path="/about" exact ><Suspense fallback={"Loading..."}><About/></Suspense></Route>
     </Switch>

    </>
   
  )
}

export default Routing