import "./App.css";
import WithoutReducer from "./components/useReducer/WithoutReducer";
import UseReducer from "./components/useReducer/UseReducer";
import UseEffect from "./components/useEffect/UseEffect";
import Ref from "./components/useRef/Ref";
import Card from "./components/useContext/Card";
import UseMemo from "./components/useMemo/UseMemo";
import ReactMemo from "./components/useMemo/ReactMemo";
import { useState } from "react";
// import Input from "./components/customHooks/Input";
import LifecycleMethod from "./components/LifecycleMethod/Lifecycle";
import Life from "./components/LifecycleMethod/Life";
import ChildrenProp from "./components/childrenprops/ChildrenProp";
import Count from "./components/redux/Count";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Student1 from "./components/HigherOrderComponent/Student1";
import Student2 from "./components/HigherOrderComponent/Student2";
import ComponentB from "./components/Siblings/useParams/ComponentB";
import Componet from "./components/Siblings/useParams/Componet";
import ComponentA from "./components/Siblings/locationState/ComponentA";
import UseCallbackk from "./components/USEcallbackk/UseCallback";
import ComponentLifecycle from "./components/LifecycleMethod/FunctionalComponent/ComponentLifecycle";
import USEMemo from "./components/useMemo/Mu";
import { useContext } from "react";
import NameContext from "./store/name-context";
import Toolkit from "./components/reduxtoolkit/Toolkit";
// import Parent from "./components/SibilngCommunication/Parent";
import Parent from "./components/SibilngCommunication/ActualSiblingCommunication/ParentA";
import MainSection from "./components/PropsDrilling/MainSection";
import Main from "./components/LazyLoading/Main";
// import Deffered from "./components/useDefferedValue/useDeffered";
import Transition from "./components/useTransitionHook/Transition";
import Input from "./components/Input/Input";
import NewReducer from "./components/useReducer/NewReducer";
import ReducerForm from "./components/useReducer/ReducerForm";
import Search from "./components/SearchBar/Search";
import AxiosInput from "./components/customHooks/AxiosInput";
import Routing from "./components/LazyLoading/Routing";
import Imperative from "./components/useImperativeHandler/Imperative";


function App() {
  const [val, setCount] = useState(0);
  const [showCount, setshowCount] = useState(true);
  const nameCtx = useContext(NameContext);
  // console.log(nameCtx.name);

  return (
    <div className="App">
      {/* <WithoutReducer /> */}
      {/* <UseReducer /> */}

      {/* <UseEffect /> */}

      {/* <Ref /> */}

      {/* <UseMemo /> */}

      {/* If in data i bass val then it rerender everytine ReactMemo */}
      {/* <ReactMemo data="hell" /> */}
      {/* <h1>{val}</h1>
      <button onClick={() => setCount(val + 1)}>Click</button> */}

      {/* <Card /> */}

      {/* <Input /> */}

      {/* <LifecycleMethod /> */}
      {/* <Life /> */}

      {/* <ChildrenProp /> */}

      {/* <Count /> */}

      {/* <Router>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/count">Count</NavLink>

        <Routes>
          <Route path="/" exact element={<Input />} />
          <Route path="/count" exact element={<Count />} />
        </Routes>
      </Router> */}

      {/* <Student1 />
      <Student2 /> */}

      {/* <Componet /> */}
      {/* <ComponentA /> */}

      {/* <UseCallbackk /> */}
      {/* 
      {showCount && <ComponentLifecycle />}
      <button onClick={() => setshowCount(!showCount)}>Click</button> */}

      {/* <USEMemo /> */}

      {/* <Toolkit /> */}

      {/* <Parent /> */}
      {/* <Parent /> */}

      {/* <MainSection /> */}
      {/* <Main /> */}
      {/* <Deffered/> */}

      {/* <Transition/> */}
      {/* <NewReducer/> */}

   {/* <Input/> */}
  {/* <ReducerForm/> */}
  
  {/* <Search/> */}
  {/* <AxiosInput/> */}
  {/* <Routing/> */}

  <Imperative/>



    </div>
  );
}

export default App;
