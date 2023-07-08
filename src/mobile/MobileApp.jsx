import React, { useEffect } from "react";
import DriverPageMobile from "./DriverPageMobile";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function MobileApp() {
  return (
    <>
      <Navbar />
      <DriverPageMobile />
      <Footer />
    </>
  );
}

export default MobileApp;
