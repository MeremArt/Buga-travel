
import Footerlogo from "./Images/Footerlogo.svg";
import twitter from "./Images/twitter.svg";
import instagram from "./Images/instagram.svg";
import Facebook from "./Images/facebook.svg";
import "./Footer.css";
import React, { useEffect, useState } from "react";

const Footer = () => {
  var [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const breakpoint = 890;

      if (width >= breakpoint) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className="footer-div">
      <div className="div-1">
        <div className="image-container">
          <img src={Footerlogo} className="img-responsive" style={isMobile?{position:'relative',right:'calc(100vw * .28)',width:'200px'}:{position:'relative',right:'40px'}} alt="Footer Logo" />
        </div>
        <div className="height"/>
        <div className="logo-space" style={isMobile?{position:'relative',top:'20px',width:'200px'}:{}}>
          <img src={Facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={instagram} alt="Instagram" />
        </div>

          {isMobile?'':<button className="secondaryButton">Join Our Waitlist</button>}
      </div>
      {!isMobile?'':<div><br /><br /><br /></div>}

      <div className="footer-sub">
        <h2 className="foot-head">Company</h2>
        <div className="height2"/>
        <ul className="footer-text">
          <li style={{textAlign:'start'}}>About</li>
          <li style={{textAlign:'start'}}>Blog</li>
          <li style={{textAlign:'start'}}>Ambassadors</li>
        </ul>
      </div>
      <div className="footer-sub">
        <h2 className="foot-head">Legal</h2>
        <div className="height2"/>
        <ul className="footer-text">
          <li style={{textAlign:'start'}}>Terms of Use</li>
          <li style={{textAlign:'start'}}>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-sub">
        <h2 className="foot-head">Contact</h2>
        <div className="height2"/>
        <ul className="footer-text">
          <li style={{textAlign:'start'}}>admin@bugatravels.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
