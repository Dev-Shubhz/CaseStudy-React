// import logo from "./logo.svg";
import "./App.css";
//
// import Home from './day10/Home';
// import ResponsiveAppBar from "./day10/web";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Registration from "./day10/Registration";
// import UseMemo from "./task/UseMemo";
// import Usecallback from "./task/Usecallback";
// import Usereducer from "./task/Usereducer";
// import CounterTwo from "./task/Counter2";
// import One from "./task/One";
// import Three from "./task/Three";
// import Errorboundary from "./task/Errorboundary";
// import Two from "./task/Two";
// import Home from "./task/Home"
// import About from "./task/About";
import React, { Suspense, lazy } from "react";
// import Product from "./task/axiosdata/Product";
// import Sidemenu from "./task/muitutorials/Sidemenu";
// import { makeStyles } from "@mui/styles";
// import { width } from "@mui/system";
// import Header from "./task/muitutorials/Header";
// import { CssBaseline } from "@mui/material";
// import Store1 from "./Store1";
// import { Provider } from "react-redux";
// import Todo from "./redux/components/Todo";
// import SwipeableTextMobileStepper from "./day10/Home";
// import Classtask2 from "./day10/Classtask2";
// import ToDolist from "./task/ToDolist";
// import Testcomponent from "./testing/Testcomponent";
import Testcomponent from "./testing/Testcomponent";
import Register from "./casestudy/Register";
import Login1 from "./casestudy/Login1";
// import Home1 from "./casestudy/Home1";
import NavBar from "./casestudy/NavBar";
import H1 from "./casestudy/H1";
// import Table1 from "./casestudy/Table1";
import Table2 from "./casestudy/Table";

// const Home = lazy(() => import("./task/Home"));

// const About = lazy(() => import("./task/About"));

// const useStyles=makeStyles({
//   appMain:{
//     paddingLeft:'320px',
//     width:'100%'
//   }
// })

function App() {
  // const comp = [
  //   { id: 1, title: "given work", completed: false },
  //   { id: 2, title: "home work", completed: true },
  // ];
  // const classes=useStyles();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login1 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<H1 />} />
          <Route path="/table" element={<Table2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// {comp.map((testcomponent) => {
//   return <Testcomponent testcomponent={testcomponent} />;
// })}
// <Sidemenu/>
// <div className={classes.appMain} >
// <Header/>
// </div>
// <CssBaseline/>
// <Usecallback/>
// <CounterTwo/>
// <Usereducer/>

// <UseMemo/>

// <BrowserRouter>
// <ResponsiveAppBar/>
// <Routes>
// <Route path="/home" element={<Home/>}/>
// <Route path="/about" element={<About/>}/>

// </Routes>
// </BrowserRouter>
// <Errorboundary>
// <One/>
// </Errorboundary>
// <Errorboundary>
// <Two/>
// </Errorboundary>

// <h1>Lazy loading</h1>
// <Suspense fallback={<div>please wait....Home is loading</div>}>
//   <Home />
// </Suspense>
// <Suspense fallback={<div>please wait.... About is loading</div>}>
//   <About />
// </Suspense>

// <Provider store={Store1}>
//   <Todo />
// </Provider>
