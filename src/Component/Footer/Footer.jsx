import React from "react";
import Footerlogo from "./images/Footerlogo.svg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";
import Facebook from "./images/facebook.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-div">
      <div className="div-1">
        <div className="image-container">
          <img src={Footerlogo} className="img-responsive" />
        </div>
        <div className="logo-space">
          <img src={twitter} />
          <img src={Facebook} />
          <img src={instagram} />
        </div>
      </div>
      <div className="footer-sub">
        <h2 className="foot-head">Company</h2>
        <ul className="footer-text">
          <li>About</li>
          <li>Blog</li>
          <li>Ambassadors</li>
        </ul>
      </div>
      <div className="footer-sub">
        <h2 className="foot-head">Legal</h2>
        <ul className="footer-text">
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="footer-sub">
        <h2 className="foot-head">Contact</h2>
        <ul className="footer-text">
          <li>admin@bugatravels.com</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
