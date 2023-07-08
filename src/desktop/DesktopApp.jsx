import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";

import DriversPageDeskTop from "./DriversPageDesktop";
import Footer from "../Components/Footer/Footer";

function DesktopApp() {
  return (
    <>
      <Navbar />

      <DriversPageDeskTop />
      <Footer />
    </>
  );
}

export default DesktopApp;
