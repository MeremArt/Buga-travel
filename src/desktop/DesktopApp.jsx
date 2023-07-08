import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import DriversPageDeskTop from './DriverPageDesktop';
import Footer from '../Component/Footer/Footer';


function DesktopApp() {
  return (
<>
<Navbar/>
<DriversPageDeskTop />
<Footer/>
</>
  );
}

export default DesktopApp;
