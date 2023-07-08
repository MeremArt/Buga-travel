// const Footer = () => {
// return (
//   <div className="footer-div">
//     <div className="div-1">
//       <div className="image-container">
//         <img src={Footerlogo} className="img-responsive" alt="Footer Logo" />
//       </div>
//       <div className="logo-space">
//         <img src={twitter} alt="Twitter" />
//         <img src={Facebook} alt="Facebook" />
//         <img src={instagram} alt="Instagram" />
//       </div>
//     </div>
//     <div className="footer-sub">
//       <h2 className="foot-head">Company</h2>
//       <ul className="footer-text">
//         <li>About</li>
//         <li>Blog</li>
//         <li>Ambassadors</li>
//       </ul>
//     </div>
//     <div className="footer-sub">
//       <h2 className="foot-head">Legal</h2>
//       <ul className="footer-text">
//         <li>Terms of Use</li>
//         <li>Privacy Policy</li>
//       </ul>
//     </div>
//     <div className="footer-sub">
//       <h2 className="foot-head">Contact</h2>
//       <ul className="footer-text">
//         <li>admin@bugatravels.com</li>
//         <li>Privacy Policy</li>
//       </ul>
//     </div>
//   </div>
// );
// };

// export default Footer;

import Footerlogo from "./Images/Footerlogo.svg";
import twitter from "./Images/twitter.svg";
import instagram from "./Images/instagram.svg";
import Facebook from "./Images/facebook.svg";
import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <div className="footer-div">
      <div className="div-1">
        <div className="image-container">
          <img src={Footerlogo} className="img-responsive" alt="Footer Logo" />
        </div>
        <div className="logo-space">
          <img src={twitter} alt="Twitter" />
          <img src={Facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
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
