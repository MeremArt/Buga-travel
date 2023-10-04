import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Etrike/Home/Home";
import "./App.css";
import Etrike from "./Pages/Etrike/Etrike"; 
import Homep from "./Pages/Etrike/Homepage/Homep";
import MobileApp from "./mobile/MobileApp";
import Ambasador from "./Pages/Ambasador/Ambasador";
import DesktopApp from "./desktop/DesktopApp";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Invest from "./Pages/invest/Invest";

const Driver = () => (
  <>
    <div className="hide-lg">
      <MobileApp />
    </div>
    <div className="hide-sm">
      <DesktopApp />
    </div>
  </>
);

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/ambasador" element={<Ambasador />} />
        <Route path="/" element={<Homep />} />
        <Route path="/investment" element={<Etrike />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/homepage" element={<Homep />} />
        <Route path="/buynow" element={<Invest />} />
        {/* Add your additional routes here */}
      </Routes>
    </Router>
  );
}

export default App;
