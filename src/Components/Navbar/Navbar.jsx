import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Buga from "./images/Buga.png";
import BookPreview from "./BookPreview";

const navItem = [
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/investment",
    text: "Own an Etrike",
  },
  {
    path: "/driver",
    text: "Drive",
  },
  {
    path: "/ambasador",
    text: "Ambassadors",
  },
];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [whatScreenSize, setWhatScreenSize] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleJoinWaitlist = () => {
    setShowPopup(true);
    document.body.classList.add("popup-open");
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.classList.remove("popup-open");
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleClosePreview = () => {
    setSelectedBook(null);
  };

  useEffect(() => {
    AOS.init({ once: true });

    return () => {
      AOS.refresh();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const breakpoint = 890;

      if (width >= breakpoint) {
        setWhatScreenSize("desktop");
      } else {
        setWhatScreenSize("mobile");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("overlay")) {
      closePopup();
    }
  };

  return (
    <section className="landingNavHeader">
      <div className="landingNavHeaderInner">
        <div className="logo">
          <NavLink to="/">
            <div className="logo-div">
              <img className="bugalogo" src={Buga} alt="Logo" />
            </div>
          </NavLink>
        </div>
        <nav className={`landingNavigation ${navOpen && "mobile"}`}>
          {navItem.map(({ path, text }, index) => (
            <NavLink
              key={index}
              to={path}
              duration={3000}
              activeClassName="active"
              onClick={() => setNavOpen(false)}
            >
              {text}
            </NavLink>
          ))}
        </nav>
        <div
          className={`landingNavigationButtons ${
            whatScreenSize === "mobile" && "hidden"
          }`}
        >
          <button className="secondaryButton" onClick={handleJoinWaitlist}>
            Join Our Waitlist
          </button>
        </div>
        <div
          className="hamburgerToggleMenu"
          onClick={() => setNavOpen(!navOpen)}
        >
          <div className={`burger ${navOpen && "one"}`} />
          <div className={`burger ${navOpen && "two"}`} />
          <div className={`burger ${navOpen && "three"}`} />
        </div>
      </div>

      {showPopup && (
        <div className="overlay" onClick={handleOverlayClick}>
          <BookPreview book={selectedBook} onClose={handleClosePreview} />
        </div>
      )}
    </section>
  );
};

export default Navbar;
