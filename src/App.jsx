import React from "react";
import MobileApp from './mobile/MobileApp';
import DesktopApp from './desktop/DesktopApp';
import './App.css';
import Etrike from "./Pages/Etrike/Etrike";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const Home = () => <h1>
  <br />
  <br />
  <br />
  <center className="white">Coming Soom</center>
</h1>;

const Driver = () => <>
<div className=' hide-lg'>
<MobileApp/>
</div>
<div className=' hide-sm'>
<DesktopApp/>
</div>
</>;

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/investment" element={<Etrike/>} />
        <Route path="/driver" element={<Driver/>} />
        <Route element={<Home/>} />
        </Routes>
  </Router>
  );
}

export default App;
