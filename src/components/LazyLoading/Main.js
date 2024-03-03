// import React, { Suspense } from "react";

// import {
//   BrowserRouter as Router,
//   NavLink, Routes,
//   Route,
// } from "react-router-dom";
// // const Home = React.lazy(() => import("./Home"));
// import Home from "./Home";

// // Lazy Loading
// // lazy is function which taake another function as argument
// const About = React.lazy(() => import("./About"));
// // import About from "./About";


// const Main = () => {
//   return (
//     <Router>
//       <NavLink to="/home">Home</NavLink>
//       <NavLink to="/about">About</NavLink>

//       <Routes>
//         <Route
//           path="/home"
//           element={
//             <Suspense fallback=".Loading...">
//               <Home />
//             </Suspense>
//           }
//         />
//         <Route
//           path="/about"
//           element={
//             <Suspense fallback="Loading...">
//               <About />
//             </Suspense>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default Main;
