import React, { useState } from "react";
import "./BookPreview.css";
import Buga from "./images/Buga.png";
import { NavLink } from "react-router-dom";

const BookPreview = ({ book, onClose }) => {
  const [on1, setON1] = useState(true);
  const [on2, setON2] = useState(false);
  const [on3, setON3] = useState(false);
  const [on4, setON4] = useState(false);
  const [on5, setON5] = useState(false);
  const [on6, setON6] = useState(false);
  const [on7, setON7] = useState(false);
  const [on8, setON8] = useState(false);
  const [on9, setON9] = useState(false);
  const [on10, setON10] = useState(false);
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("book-preview-overlay")) {
      onClose();
      document.body.classList.remove("popup-open");
    }
  };

  const handleCloseClick = () => {
    onClose();
    document.body.classList.remove("popup-open");
  };

  return (
    <div className="book-preview-overlay" onClick={handleOverlayClick}>
      <div className="overlay">
        <div className="cover-all">
          <div className="popup">
            <center>
              <div className="logo">
                <NavLink to="/">
                  <div className="logo-div">
                    <img className="bugalogo" src={Buga} alt="Logo" />
                  </div>
                </NavLink>
              </div>
              <h2>Be the first to know once we launch</h2>
              <form className="join-wait-form">
                <section className="Sign-input-form">
                  <div className="form-row">
                    <label className="input-text" htmlFor="fullname">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="Sign-input-join"
                      id="fullname"
                      name="fullname"
                      placeholder="Enter name"
                      autoComplete="name"
                      style={{ color: "#B0B1B2", fontSize: "14px" }}
                    />
                  </div>
                  <div className="form-row">
                    <label className="input-text" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="Signup-input"
                      id="email"
                      name="email"
                      placeholder="Enter email address"
                      autoComplete="email"
                      style={{ color: "#B0B1B2", fontSize: "14px" }}
                    />
                  </div>
                  <button className="modal-wait">Join the waitlist</button>
                  {/* <button onClick={handleCloseClick}>Close</button> */}
                </section>
              </form>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPreview;
