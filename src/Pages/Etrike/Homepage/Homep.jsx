import React, { useEffect, useState } from "react";
import "./Homep.css";
// import "./FAQLanding.style.css";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import Homeimg from "../images/Homep1.svg";
import Mobile from "../images/mobile.svg";
import Section3 from "../images/section3.png";
import FAQ from "../images/faqe.svg";
import Stuimg1 from "../images/student1.svg";
import Stuimg from "../images/Students.svg";
import x from "../images/x.png";
import Textchange from "./TextChanger.jsx";
import x2 from "../images/x2.png";
import driveimf from "../images/drivebuga.svg";
import mobileImage from "../images/Trustedbymobile.svg";
import desktopImage from "../images/TrustedbyDesktop.svg";
import MobileappImage from "../images/Mobliaapp.svg";
import Mobilemap from "../images/mobilemap.svg";
import wheel from "../images/wheels.svg";
import FAQLanding from "../../../Components/FAQLanding";
import Guymobile from "../images/guyman.svg";
import Guydesktop from "../images/guydesktop.svg";

import Carousel from "../../../Components/Carousel/Carousel";
import AutoPlaySlider from "../../../Components/AutoPlaySlider/AutoPlaySlider";

function Homep() {
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

  const navigate = useNavigate();
  const handlabs = () => {
    navigate("/ambasador");
  };
  // const slides = [
  //   { text: "Slide 1" },
  //   { text: "Slide 2" },
  //   { text: "Slide 3" },
  //   { text: "Slide 4" },
  //   { text: "Slide 5" },
  // ];

  return (
    <>
      {" "}
      {isMobile ? (
        <>
          <Navbar />
          <br />
          <br />
          <br />
          <br />
          <br />
          <main className="">
            <img
              src={Mobile}
              style={{
                width: "100vw",
              }}
              alt="Mobile Image"
            />
          </main>

          <center
            style={{
              position: "absolute",
              top: "calc(100vw * .92)",
              width: "100vw",
            }}
          >
            <button className="secondaryButton">Join Our Waitlist</button>
          </center>
          <center
            style={{
              position: "absolute",
              top: "calc(100vw * 4.45)",
              width: "100vw",
            }}
          >
            <button className="secondaryButton">Create a free account</button>
          </center>
          <center
            style={{
              position: "absolute",
              top: "calc(100vw * 6.45)",
              width: "100vw",
            }}
          >
            <Carousel />
          </center>
          <center
            style={{
              position: "absolute",
              top: "calc(100vw * 9.8)",
              width: "100vw",
            }}
          >
            <button className="secondaryButtonBlack">Join Our Waitlist</button>
          </center>
          <center
            style={{
              position: "absolute",
              top: "calc(100vw * 12.82)",
              width: "100vw",
            }}
          >
            <button onClick={handlabs} className="secondaryButton">
              Join 200+ ambassadors
            </button>
          </center>
          <center
            style={{
              position: "absolute",
              top: "calc(100vw * 17.86)",
              width: "100vw",
            }}
          >
            <AutoPlaySlider />
          </center>
          <center
            style={{
              position: "absolute",
              top: "calc(100vw * 19.9)",
              width: "100vw",
            }}
          >
            <div className="sp-form">
              <MdEmail className="md-sp " />{" "}
              <input
                className="in-sp"
                type="text"
                placeholder="Email Address"
              />{" "}
              <button className="btn-sub">Subscribe</button>{" "}
            </div>
          </center>
          <center
            style={{
              position: "absolute",
              top: "calc(100vw * 20.86)",
              width: "100vw",
            }}
          >
            <Footer />
          </center>
        </>
      ) : (
        <>
          <Navbar />
          <main className="">
            <div className="body-homep">
              <div className="head-homep container">
                <div
                  style={{ fontFamily: "Satoshi" }}
                  className="Homp-center-text"
                >
                  <h2>
                    Transforming{" "}
                    <span
                      style={{ color: "#FFCC2A", fontFamily: "General Sans" }}
                    >
                      {" "}
                      Mobility{" "}
                    </span>
                    in Africa.
                  </h2>
                  <p>Helping You Travel To, From and Around</p>
                  <p>Safely and Comfortably.</p>
                  <div>
                    <button className="btn-Homep-waitlist">
                      Join Our Waitlist
                    </button>
                  </div>
                </div>
                <div className="Homp-center-img">
                  <img
                    src={Homeimg}
                    className="Homep-img"
                    alt="Student-Image"
                  />
                </div>
              </div>

              <section className=" Homep-middle">
                <div style={{ fontFamily: "Satoshi" }} className=" container">
                  <div
                    style={{ fontFamily: "Satoshi" }}
                    className=" Homp-center-text"
                  >
                    <h2>
                      <Textchange />
                      {/* Need a ride <span style={{ color: "#FFCC2A" }}> to </span>
                      school? */}
                    </h2>
                  </div>
                </div>
                <div className="need-a-ride container">
                  <div
                    style={{ fontFamily: "Satoshi" }}
                    className="Homp-center-text Homp-center-text3"
                  >
                    <h2>We’ve got you!</h2>
                    <p>
                      <img className="tpl" src={Stuimg1} alt="student-Image" />
                    </p>
                  </div>
                  <div className="students-homep">
                    <img className="" src={Stuimg} alt="student-Image" />
                    <br />
                    <div>
                      <button className="btn-Homep-waitlist-2">
                        Join Our Waitlist
                      </button>
                    </div>
                  </div>

                  <br />
                </div>

                <br />
                <br />
                <br />

                <div className="image-container container">
                  {isMobile ? (
                    <img
                      className="Homp-render-mobile"
                      src={mobileImage}
                      alt="Mobile Image"
                    />
                  ) : (
                    <img
                      className="chicks"
                      src={desktopImage}
                      alt="Desktop Image"
                    />
                  )}
                </div>
                <br />
                <br />

                <div className="communte">
                  <div className=" Homp-center-text4">
                    <h2>
                      Commute with ease and{" "}
                      <span
                        style={{
                          color: "#FFCC2A",
                        }}
                      >
                        {" "}
                        peace of mind
                      </span>
                    </h2>
                  </div>

                  <p>
                    Buga Travels is more than just a ride-hailing app - it's a
                    trusted companion for all your campus transportation needs,
                    with vetted drivers, real-time tracking, and emergency
                    features at your fingertips.
                  </p>
                </div>

                <br />
                <br />
                <br />
                <div>
                  <Carousel />
                </div>
                <br />
                <br />
                <br />

                <section className=" Homp-center-text4">
                  <h2 style={{ fontFamily: "General Sans" }}>
                    <center>Travelling solo or splitting the bill?</center>
                  </h2>
                  <h2>
                    <center>
                      {" "}
                      We’ve{" "}
                      <span
                        style={{ color: "#FFCC2A", fontFamily: "General Sans" }}
                      >
                        got you
                      </span>
                    </center>
                  </h2>
                  {/* <img src={MobileappImage} alt="mobileapp" /> */}
                  <img src={x} className="fitWidth" alt="mobileapp" />
                  <img src={x2} className="fitWidth" alt="mobileapp" />
                </section>

                {/* <div className="background-img-cut">
              <div className="Homep-map-img">
                <img
                  className="mobile-buga"
                  src={Mobilemap}
                  alt="mobile map image"
                />
              </div>
              <section className="text-background">
                <h2 id="head-text-order">Ordering a ride is easy!</h2>
                <div>
                  <h2>Create an Account</h2>
                  <p>
                    Sign up for an account to access personalized features,
                    manage your bookings, and enjoy a seamless experience.
                  </p>
                </div>
                <div>
                  <h2>Enter Your Destination</h2>
                  <p>
                    Input your destination details and let our advanced system
                    guide you to the best routes and options for a smooth travel
                    experience.
                  </p>
                </div>
                <div>
                  <h2>Negotiate with your driver and get moving!</h2>
                  <p>
                    Name your price using our price range figures as a guide,
                    and select a preferred driver from the numerous offers
                    rolling in.
                  </p>
                </div>
                <button className="btn-join-black">Join Our Waitlist</button>
              </section>
            </div> */}

                <div className="Homp-center-text5">
                  <h2>
                    <center>Join Our Exclusive Community of Ambassadors</center>
                  </h2>
                </div>
                <br />
                <br />
                <div className="guysmile">
                  <div className="guytext">
                    <div className="mbassdor-text">
                      <h2>
                        "Buga Travels has helped me develop social and digital
                        skills through their ambassador program. I’ve also come
                        in contact with valuable networks that’ll aid my growth.
                        They are so intentional about the growth of their
                        ambassadors"
                      </h2>
                    </div>
                    <div className="btn-amassdor">
                      <button onClick={handlabs} className="guy-btn">
                        Join 200+ ambassadors
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              {/* <div className="image-container">
          {isMobile ? (
            <img
              className="guy-render-mobile"
              src={Guymobile}
              alt="Mobile Image"
            />
          ) : (
            <img src={Guydesktop} alt="Desktop Image" />
          )}
        </div> */}
              <div className="Homep-black-bg">
                <img className="black-box" src={driveimf} />

                <img className="whee" src={wheel} alt="driving image" />
              </div>
              <center>
                <div id="FAQ" className="Faq-landing">
                  {/* <FAQLanding /> */}
                  <section
                    id="faq"
                    style={{
                      backgroundImage: `url('${Section3}')`,
                      backgroundSize: "auto 100%",
                      backgroundPosition: "50% 50%",
                    }}
                  >
                    <br />
                    <br />

                    {/* start of faq */}
                    <div className="container">
                      <div className="row">
                        <div className="col-4">
                          <br />
                          <img src={FAQ} style={{ marginLeft: "20px" }} />
                        </div>

                        <div className="col-8">
                          <div
                            style={{
                              width: 655.99,
                              height: "100%",
                              marginLeft: "10px",
                              boxShadow:
                                "0px 0.2701253294944763px 13.506266593933105px rgba(0, 0, 0, 0.10)",
                              borderRadius: 5.4,
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                alignSelf: "stretch",
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                display: "inline-flex",
                              }}
                            >
                              <div
                                style={{
                                  height: on1 ? 200 : 110,
                                  paddingTop: 18.74,
                                  paddingBottom: 18.74,
                                  paddingLeft: 18.74,
                                  paddingRight: 37.49,
                                  background: on1 ? "#FFCC2A" : "white",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "flex-start",
                                  gap: 7.5,
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    width: 600.99,
                                    position: "relative",
                                  }}
                                >
                                  {on1 ? (
                                    <div
                                      style={{
                                        fontFamily: "General Sans",
                                        width: 600,
                                        height: 89.03,
                                        left: 32.8,
                                        top: 78.72,
                                        position: "absolute",
                                        textAlign: "justify",
                                        color: "black",
                                        fontSize: 14.25,
                                        fontWeight: "500",
                                        wordWrap: "break-word",
                                      }}
                                    >
                                      Buga Travels h a dedicated emergency
                                      support system in place to sist drivers in
                                      ce of emergencies. If you encounter an
                                      emergency situation while on a ride, you
                                      can use the emergency button within the
                                      app to immediately notify our support
                                      team. They will provide guidance and
                                      necessary sistance to ensure your safety
                                      and the safety of your psengers.
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  <div
                                    style={{
                                      left: 0,
                                      top: 0,
                                      position: "absolute",
                                      color: "#121212",
                                      tFamily: "General Sans",
                                      fontSize: 18.74,
                                      fontWeight: "600",
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    01
                                  </div>
                                  <div
                                    style={{
                                      width: 600,
                                      height: 45,
                                      left: 32.8,
                                      top: 0,
                                      position: "absolute",
                                    }}
                                  >
                                    <div
                                      style={{
                                        left: 0,
                                        top: 0,
                                        position: "absolute",
                                        color: "#151515",
                                        fontSize: 16.87,
                                        fontFamily: "General Sans",
                                        fontWeight: "600",
                                        wordWrap: "break-word",
                                        paddingRight: 40,
                                      }}
                                    >
                                      What type of support does Buga Travels
                                      provide to drivers in ce of emergencies?
                                    </div>
                                    <div
                                      onClick={() => {
                                        setON1(!on1);
                                      }}
                                      style={{
                                        left: 555.85,
                                        top: 7.5,
                                        position: "absolute",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        display: "inline-flex",
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: 28.34,
                                          height: 28.34,
                                          borderRadius: 9999,
                                          border: "0.14px black solid",
                                        }}
                                      />
                                      {on1 ? (
                                        <div
                                          style={{
                                            width: 9.63,
                                            height: 9.63,
                                            left: 9.48,
                                            top: -3,
                                            fontWeight: 500,
                                            fontSize: 20,
                                            position: "absolute",
                                          }}
                                        >
                                          x
                                        </div>
                                      ) : (
                                        <div
                                          style={{
                                            width: 22.23,
                                            height: 22.23,
                                            position: "relative",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: 9.26,
                                              height: 4.63,
                                              left: 9.48,
                                              top: -16.26,
                                              position: "absolute",
                                              background: "black",
                                              border: "0.14px black solid",
                                            }}
                                          ></div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                style={{
                                  height: on2 ? 200 : 110,
                                  paddingTop: 18.74,
                                  paddingBottom: 18.74,
                                  paddingLeft: 18.74,
                                  paddingRight: 37.49,
                                  background: on2 ? "#FFCC2A" : "white",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "flex-start",
                                  gap: 7.5,
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    width: 600.99,
                                    position: "relative",
                                  }}
                                >
                                  {on2 ? (
                                    <div
                                      style={{
                                        width: 600,
                                        height: 89.03,
                                        left: 32.8,
                                        top: 78.72,
                                        position: "absolute",
                                        textAlign: "justify",
                                        color: "black",
                                        fontFamily: "General Sans",
                                        fontSize: 14,
                                        fontWeight: "500",
                                        wordWrap: "break-word",
                                      }}
                                    >
                                      Currently, Buga Travels does not have a
                                      psenger rating system. However, we
                                      encourage drivers to provide feedback and
                                      report any issues they may encounter
                                      during a ride. This feedback helps us
                                      monitor and address any concerns related
                                      to psenger behaviour
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  <div
                                    style={{
                                      left: 0,
                                      top: 0,
                                      position: "absolute",
                                      color: "#121212",
                                      fontSize: 18.74,
                                      fontFamily: "General Sans",
                                      fontWeight: "600",
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    02
                                  </div>
                                  <div
                                    style={{
                                      width: 600,
                                      height: 45,
                                      left: 32.8,
                                      top: 0,
                                      position: "absolute",
                                    }}
                                  >
                                    <div
                                      style={{
                                        left: 0,
                                        top: 0,
                                        position: "absolute",
                                        color: "#151515",
                                        fontSize: 16.87,
                                        fontFamily: "General Sans",
                                        fontWeight: "600",
                                        wordWrap: "break-word",
                                        paddingRight: 40,
                                      }}
                                    >
                                      Is there a rating system for psengers
                                      well?
                                    </div>
                                    <div
                                      onClick={() => {
                                        setON2(!on2);
                                      }}
                                      style={{
                                        left: 555.85,
                                        top: 7.5,
                                        position: "absolute",
                                        flexDirection: "column",
                                        fontFamily: "General Sans",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        display: "inline-flex",
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: 28.34,
                                          height: 28.34,
                                          borderRadius: 9999,
                                          border: "0.14px black solid",
                                        }}
                                      />
                                      {on2 ? (
                                        <div
                                          style={{
                                            width: 9.63,
                                            height: 9.63,
                                            left: 9.48,
                                            top: -3,
                                            fontWeight: 500,
                                            fontSize: 20,
                                            fontFamily: "General Sans",
                                            position: "absolute",
                                          }}
                                        >
                                          x
                                        </div>
                                      ) : (
                                        <div
                                          style={{
                                            width: 22.23,
                                            height: 22.23,
                                            position: "relative",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: 9.26,
                                              height: 4.63,
                                              left: 9.48,
                                              top: -16.26,
                                              position: "absolute",
                                              background: "black",
                                              border: "0.14px black solid",
                                            }}
                                          ></div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                style={{
                                  height: on3 ? 200 : 110,
                                  paddingTop: 18.74,
                                  paddingBottom: 18.74,
                                  paddingLeft: 18.74,
                                  paddingRight: 37.49,
                                  background: on3 ? "#FFCC2A" : "white",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "flex-start",
                                  gap: 7.5,
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    width: 600.99,
                                    position: "relative",
                                  }}
                                >
                                  {on3 ? (
                                    <div
                                      style={{
                                        width: 600,
                                        height: 89.03,
                                        left: 32.8,
                                        top: 78.72,
                                        position: "absolute",
                                        textAlign: "justify",
                                        color: "black",
                                        fontFamily: "General Sans",
                                        fontSize: 14,
                                        fontWeight: "500",
                                        wordWrap: "break-word",
                                      }}
                                    >
                                      Yes, Buga Travels offers a rental program
                                      in partnership with certain vehicle rental
                                      companies. If you meet our driver
                                      requirements and don't own a vehicle, you
                                      may have the option to rent a vehicle
                                      through our approved partners to fulfill
                                      ride requests.
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  <div
                                    style={{
                                      left: 0,
                                      top: 0,
                                      position: "absolute",
                                      color: "#121212",
                                      fontSize: 18.74,
                                      fontWeight: "600",
                                      fontFamily: "General Sans",
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    03
                                  </div>
                                  <div
                                    style={{
                                      width: 600,
                                      height: 45,
                                      left: 32.8,
                                      top: 0,
                                      position: "absolute",
                                    }}
                                  >
                                    <div
                                      style={{
                                        left: 0,
                                        top: 0,
                                        position: "absolute",
                                        color: "#151515",
                                        fontSize: 16.87,
                                        fontWeight: "600",
                                        fontFamily: "General Sans",
                                        wordWrap: "break-word",
                                        paddingRight: 40,
                                      }}
                                    >
                                      {" "}
                                      Can I drive for Buga Travels if I don't
                                      own a vehicle?
                                    </div>
                                    <div
                                      onClick={() => {
                                        setON3(!on3);
                                      }}
                                      style={{
                                        left: 555.85,
                                        top: 7.5,
                                        position: "absolute",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        display: "inline-flex",
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: 28.34,
                                          height: 28.34,
                                          borderRadius: 9999,
                                          border: "0.14px black solid",
                                        }}
                                      />
                                      {on3 ? (
                                        <div
                                          style={{
                                            width: 9.63,
                                            height: 9.63,
                                            left: 9.48,
                                            top: -3,
                                            fontWeight: 500,
                                            fontSize: 20,
                                            fontFamily: "General Sans",
                                            position: "absolute",
                                          }}
                                        >
                                          x
                                        </div>
                                      ) : (
                                        <div
                                          style={{
                                            width: 22.23,
                                            height: 22.23,
                                            position: "relative",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: 9.26,
                                              height: 4.63,
                                              left: 9.48,
                                              top: -16.26,
                                              position: "absolute",
                                              background: "black",
                                              border: "0.14px black solid",
                                            }}
                                          ></div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                style={{
                                  height: on4 ? 200 : 110,
                                  paddingTop: 18.74,
                                  paddingBottom: 18.74,
                                  paddingLeft: 18.74,
                                  paddingRight: 37.49,
                                  background: on4 ? "#FFCC2A" : "white",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "flex-start",
                                  gap: 7.5,
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    width: 600.99,
                                    position: "relative",
                                  }}
                                >
                                  {on4 ? (
                                    <div
                                      style={{
                                        width: 600,
                                        height: 89.03,
                                        left: 32.8,
                                        top: 78.72,
                                        position: "absolute",
                                        textAlign: "justify",
                                        color: "black",
                                        fontSize: 14,
                                        fontWeight: "500",
                                        fontFamily: "General Sans",
                                        wordWrap: "break-word",
                                      }}
                                    >
                                      Yes, a Buga Travels driver, you are
                                      expected to adhere to our driver
                                      guidelines and local transportation
                                      regulations. These guidelines ensure a
                                      safe and reliable experience for both
                                      drivers and psengers. It's important to
                                      review and comply with these rules to
                                      maintain your partnership with Buga
                                      Travels
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  <div
                                    style={{
                                      left: 0,
                                      top: 0,
                                      position: "absolute",
                                      color: "#121212",
                                      fontSize: 18.74,
                                      fontWeight: "600",
                                      fontFamily: "General Sans",
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    04
                                  </div>
                                  <div
                                    style={{
                                      width: 600,
                                      height: 45,
                                      left: 32.8,
                                      top: 0,
                                      position: "absolute",
                                    }}
                                  >
                                    <div
                                      style={{
                                        left: 0,
                                        top: 0,
                                        position: "absolute",
                                        color: "#151515",
                                        fontSize: 16.87,
                                        fontWeight: "600",
                                        fontFamily: "General Sans",
                                        wordWrap: "break-word",
                                        paddingRight: 40,
                                      }}
                                    >
                                      Are there any specific rules or
                                      regulations I should be aware of a Buga
                                      Travels driver?
                                    </div>
                                    <div
                                      onClick={() => {
                                        setON4(!on4);
                                      }}
                                      style={{
                                        left: 555.85,
                                        top: 7.5,
                                        position: "absolute",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        display: "inline-flex",
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: 28.34,
                                          height: 28.34,
                                          borderRadius: 9999,
                                          border: "0.14px black solid",
                                        }}
                                      />
                                      {on4 ? (
                                        <div
                                          style={{
                                            width: 9.63,
                                            height: 9.63,
                                            left: 9.48,
                                            top: -3,
                                            fontWeight: 500,
                                            fontSize: 20,
                                            position: "absolute",
                                          }}
                                        >
                                          x
                                        </div>
                                      ) : (
                                        <div
                                          style={{
                                            width: 22.23,
                                            height: 22.23,
                                            position: "relative",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: 9.26,
                                              height: 4.63,
                                              left: 9.48,
                                              top: -16.26,
                                              position: "absolute",
                                              background: "black",
                                              border: "0.14px black solid",
                                            }}
                                          ></div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                style={{
                                  height: on5 ? 200 : 110,
                                  paddingTop: 18.74,
                                  paddingBottom: 18.74,
                                  paddingLeft: 18.74,
                                  paddingRight: 37.49,
                                  background: on5 ? "#FFCC2A" : "white",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "flex-start",
                                  gap: 7.5,
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    width: 600.99,
                                    position: "relative",
                                  }}
                                >
                                  {on5 ? (
                                    <div
                                      style={{
                                        width: 600,
                                        height: 89.03,
                                        left: 32.8,
                                        top: 78.72,
                                        position: "absolute",
                                        textAlign: "justify",
                                        color: "black",
                                        fontFamily: "General Sans",
                                        fontSize: 14,
                                        fontWeight: "500",
                                        wordWrap: "break-word",
                                      }}
                                    >
                                      Yes, Buga Travels provides flexibility for
                                      drivers to set their availability bed on
                                      their schedule. You can customize your
                                      availability within the driver app,
                                      indicating the days and hours you are
                                      willing to accept ride requests.
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  <div
                                    style={{
                                      left: 0,
                                      top: 0,
                                      position: "absolute",
                                      color: "#121212",
                                      fontFamily: "General Sans",
                                      fontSize: 18.74,
                                      fontWeight: "600",
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    06
                                  </div>
                                  <div
                                    style={{
                                      width: 600,
                                      height: 45,
                                      left: 32.8,
                                      top: 0,
                                      position: "absolute",
                                    }}
                                  >
                                    <div
                                      style={{
                                        left: 0,
                                        top: 0,
                                        position: "absolute",
                                        color: "#151515",
                                        fontFamily: "General Sans",
                                        fontSize: 16.87,
                                        fontWeight: "600",
                                        wordWrap: "break-word",
                                        paddingRight: 40,
                                      }}
                                    >
                                      Can I customize my availability a driver?
                                    </div>
                                    <div
                                      onClick={() => {
                                        setON5(!on5);
                                      }}
                                      style={{
                                        left: 555.85,
                                        top: 7.5,
                                        position: "absolute",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        display: "inline-flex",
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: 28.34,
                                          height: 28.34,
                                          borderRadius: 9999,
                                          border: "0.14px black solid",
                                        }}
                                      />
                                      {on5 ? (
                                        <div
                                          style={{
                                            width: 9.63,
                                            height: 9.63,
                                            left: 9.48,
                                            top: -3,
                                            fontWeight: 500,
                                            fontSize: 20,
                                            fontFamily: "General Sans",
                                            position: "absolute",
                                          }}
                                        >
                                          x
                                        </div>
                                      ) : (
                                        <div
                                          style={{
                                            width: 22.23,
                                            height: 22.23,
                                            position: "relative",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: 9.26,
                                              height: 4.63,
                                              left: 9.48,
                                              top: -16.26,
                                              position: "absolute",
                                              background: "black",
                                              border: "0.14px black solid",
                                            }}
                                          ></div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                style={{
                                  height: on6 ? 200 : 110,
                                  paddingTop: 18.74,
                                  paddingBottom: 18.74,
                                  paddingLeft: 18.74,
                                  paddingRight: 37.49,
                                  background: on6 ? "#FFCC2A" : "white",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "flex-start",
                                  gap: 7.5,
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    width: 600.99,
                                    position: "relative",
                                  }}
                                >
                                  {on6 ? (
                                    <div
                                      style={{
                                        width: 600,
                                        height: 89.03,
                                        left: 32.8,
                                        top: 78.72,
                                        position: "absolute",
                                        textAlign: "justify",
                                        color: "black",
                                        fontSize: 14,
                                        fontFamily: "General Sans",
                                        fontWeight: "500",
                                        wordWrap: "break-word",
                                      }}
                                    >
                                      If a psenger cancels a ride, you will be
                                      notified through the app, and the ride
                                      will be marked canceled. In such ces, you
                                      may receive a cancellation fee depending
                                      on the specific circumstances and our
                                      cancellation policy.
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  <div
                                    style={{
                                      left: 0,
                                      top: 0,
                                      position: "absolute",
                                      color: "#121212",
                                      fontSize: 18.74,
                                      fontFamily: "General Sans",
                                      fontWeight: "600",
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    06
                                  </div>
                                  <div
                                    style={{
                                      width: 600,
                                      height: 45,
                                      left: 32.8,
                                      top: 0,
                                      position: "absolute",
                                    }}
                                  >
                                    <div
                                      style={{
                                        left: 0,
                                        top: 0,
                                        position: "absolute",
                                        color: "#151515",
                                        fontSize: 16.87,
                                        fontFamily: "General Sans",
                                        fontWeight: "600",
                                        wordWrap: "break-word",
                                        paddingRight: 40,
                                      }}
                                    >
                                      What happens if a psenger cancels a ride?
                                    </div>
                                    <div
                                      onClick={() => {
                                        setON6(!on6);
                                      }}
                                      style={{
                                        left: 555.85,
                                        top: 7.5,
                                        position: "absolute",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        display: "inline-flex",
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: 28.34,
                                          height: 28.34,
                                          borderRadius: 9999,
                                          border: "0.14px black solid",
                                        }}
                                      />
                                      {on6 ? (
                                        <div
                                          style={{
                                            width: 9.63,
                                            height: 9.63,
                                            left: 9.48,
                                            top: -3,
                                            fontWeight: 500,
                                            fontSize: 20,
                                            position: "absolute",
                                          }}
                                        >
                                          x
                                        </div>
                                      ) : (
                                        <div
                                          style={{
                                            width: 22.23,
                                            height: 22.23,
                                            position: "relative",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: 9.26,
                                              height: 4.63,
                                              left: 9.48,
                                              top: -16.26,
                                              position: "absolute",
                                              background: "black",
                                              border: "0.14px black solid",
                                            }}
                                          ></div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                style={{
                                  height: on7 ? 200 : 110,
                                  paddingTop: 18.74,
                                  paddingBottom: 18.74,
                                  paddingLeft: 18.74,
                                  paddingRight: 37.49,
                                  background: on7 ? "#FFCC2A" : "white",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "flex-start",
                                  gap: 7.5,
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    width: 600.99,
                                    position: "relative",
                                  }}
                                >
                                  {on7 ? (
                                    <div
                                      style={{
                                        width: 600,
                                        height: 89.03,
                                        left: 32.8,
                                        top: 78.72,
                                        position: "absolute",
                                        textAlign: "justify",
                                        color: "black",
                                        fontSize: 14,
                                        fontFamily: "General Sans",
                                        fontWeight: "500",
                                        wordWrap: "break-word",
                                      }}
                                    >
                                      Buga Travels takes disputes between
                                      drivers and psengers seriously. If a
                                      dispute arises, we encourage both parties
                                      to provide detailed information through
                                      the app or by contacting customer support.
                                      Our team will thoroughly investigate the
                                      matter and work towards a fair resolution.
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  <div
                                    style={{
                                      left: 0,
                                      top: 0,
                                      position: "absolute",
                                      color: "#121212",
                                      fontSize: 18.74,
                                      fontFamily: "General Sans",
                                      fontWeight: "600",
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    07
                                  </div>
                                  <div
                                    style={{
                                      width: 600,
                                      height: 45,
                                      left: 32.8,
                                      top: 0,
                                      position: "absolute",
                                    }}
                                  >
                                    <div
                                      style={{
                                        left: 0,
                                        top: 0,
                                        position: "absolute",
                                        color: "#151515",
                                        fontSize: 16.87,
                                        fontFamily: "General Sans",
                                        fontWeight: "600",
                                        wordWrap: "break-word",
                                        paddingRight: 40,
                                      }}
                                    >
                                      How does Buga Travels handle disputes
                                      between drivers and psengers?
                                    </div>
                                    <div
                                      onClick={() => {
                                        setON7(!on7);
                                      }}
                                      style={{
                                        left: 555.85,
                                        top: 7.5,
                                        position: "absolute",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        display: "inline-flex",
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: 28.34,
                                          height: 28.34,
                                          borderRadius: 9999,
                                          border: "0.14px black solid",
                                        }}
                                      />
                                      {on7 ? (
                                        <div
                                          style={{
                                            width: 9.63,
                                            height: 9.63,
                                            left: 9.48,
                                            top: -3,
                                            fontFamily: "General Sans",
                                            fontWeight: 500,
                                            fontSize: 20,
                                            position: "absolute",
                                          }}
                                        >
                                          x
                                        </div>
                                      ) : (
                                        <div
                                          style={{
                                            width: 22.23,
                                            height: 22.23,
                                            position: "relative",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: 9.26,
                                              height: 4.63,
                                              left: 9.48,
                                              top: -16.26,
                                              position: "absolute",
                                              background: "black",
                                              border: "0.14px black solid",
                                            }}
                                          ></div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                style={{
                                  height: on8 ? 200 : 110,
                                  paddingTop: 18.74,
                                  paddingBottom: 18.74,
                                  paddingLeft: 18.74,
                                  paddingRight: 37.49,
                                  background: on8 ? "#FFCC2A" : "white",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "flex-start",
                                  gap: 7.5,
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    width: 600.99,
                                    position: "relative",
                                  }}
                                >
                                  {on8 ? (
                                    <div
                                      style={{
                                        width: 600,
                                        height: 89.03,
                                        left: 32.8,
                                        top: 78.72,
                                        position: "absolute",
                                        textAlign: "justify",
                                        color: "black",
                                        fontSize: 14,
                                        fontFamily: "General Sans",
                                        fontWeight: "500",
                                        wordWrap: "break-word",
                                      }}
                                    >
                                      Currently, Buga Travels primarily focuses
                                      on providing transportation services for
                                      university students and shuttle services
                                      to and from the airport. Additional
                                      services beyond the scope of psenger
                                      transportation may not be supported at
                                      this time
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  <div
                                    style={{
                                      left: 0,
                                      top: 0,
                                      position: "absolute",
                                      color: "#121212",
                                      fontSize: 18.74,
                                      fontFamily: "General Sans",
                                      fontWeight: "600",
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    08
                                  </div>
                                  <div
                                    style={{
                                      width: 600,
                                      height: 45,
                                      left: 32.8,
                                      top: 0,
                                      position: "absolute",
                                    }}
                                  >
                                    <div
                                      style={{
                                        left: 0,
                                        top: 0,
                                        position: "absolute",
                                        color: "#151515",
                                        fontSize: 16.87,
                                        fontFamily: "General Sans",
                                        fontWeight: "600",
                                        wordWrap: "break-word",
                                        paddingRight: 40,
                                      }}
                                    >
                                      Can I use Buga Travels to offer additional
                                      services, such courier deliveries?
                                    </div>
                                    <div
                                      onClick={() => {
                                        setON8(!on8);
                                      }}
                                      style={{
                                        left: 555.85,
                                        top: 7.5,
                                        position: "absolute",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        display: "inline-flex",
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: 28.34,
                                          height: 28.34,
                                          borderRadius: 9999,
                                          border: "0.14px black solid",
                                        }}
                                      />
                                      {on8 ? (
                                        <div
                                          style={{
                                            width: 9.63,
                                            height: 9.63,
                                            left: 9.48,
                                            top: -3,
                                            fontWeight: 500,
                                            fontSize: 20,
                                            fontFamily: "General Sans",
                                            position: "absolute",
                                          }}
                                        >
                                          x
                                        </div>
                                      ) : (
                                        <div
                                          style={{
                                            width: 22.23,
                                            height: 22.23,
                                            position: "relative",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: 9.26,
                                              height: 4.63,
                                              left: 9.48,
                                              top: -16.26,
                                              position: "absolute",
                                              background: "black",
                                              border: "0.14px black solid",
                                            }}
                                          ></div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                style={{
                                  height: on9 ? 200 : 110,
                                  paddingTop: 18.74,
                                  paddingBottom: 18.74,
                                  paddingLeft: 18.74,
                                  paddingRight: 37.49,
                                  background: on9 ? "#FFCC2A" : "white",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "flex-start",
                                  gap: 7.5,
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    width: 600.99,
                                    position: "relative",
                                  }}
                                >
                                  {on9 ? (
                                    <div
                                      style={{
                                        width: 600,
                                        height: 89.03,
                                        left: 32.8,
                                        top: 78.72,
                                        position: "absolute",
                                        textAlign: "justify",
                                        color: "black",
                                        fontSize: 14,
                                        fontWeight: "500",
                                        fontFamily: "General Sans",
                                        wordWrap: "break-word",
                                      }}
                                    >
                                      Buga Travels employs a dynamic pricing
                                      model that takes into account factors such
                                      distance, time, and demand. This helps
                                      ensure fair compensation for drivers and
                                      reonable pricing for psengers, considering
                                      market conditions and operational costs.
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  <div
                                    style={{
                                      left: 0,
                                      top: 0,
                                      position: "absolute",
                                      color: "#121212",
                                      fontSize: 18.74,
                                      fontWeight: "600",
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    09
                                  </div>
                                  <div
                                    style={{
                                      width: 600,
                                      height: 45,
                                      left: 32.8,
                                      top: 0,
                                      position: "absolute",
                                    }}
                                  >
                                    <div
                                      style={{
                                        left: 0,
                                        top: 0,
                                        position: "absolute",
                                        color: "#151515",
                                        fontSize: 16.87,
                                        fontWeight: "600",
                                        wordWrap: "break-word",
                                        paddingRight: 40,
                                      }}
                                    >
                                      How does Buga Travels ensure fair pricing
                                      for both drivers and psengers?
                                    </div>
                                    <div
                                      onClick={() => {
                                        setON9(!on9);
                                      }}
                                      style={{
                                        left: 555.85,
                                        top: 7.5,
                                        position: "absolute",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        display: "inline-flex",
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: 28.34,
                                          height: 28.34,
                                          borderRadius: 9999,
                                          border: "0.14px black solid",
                                        }}
                                      />
                                      {on9 ? (
                                        <div
                                          style={{
                                            width: 9.63,
                                            height: 9.63,
                                            left: 9.48,
                                            top: -3,
                                            fontWeight: 500,
                                            fontSize: 20,
                                            tFamily: "General Sans",
                                            fontFamily: "General Sans",
                                            position: "absolute",
                                          }}
                                        >
                                          x
                                        </div>
                                      ) : (
                                        <div
                                          style={{
                                            width: 22.23,
                                            height: 22.23,
                                            position: "relative",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: 9.26,
                                              height: 4.63,
                                              left: 9.48,
                                              top: -16.26,
                                              position: "absolute",
                                              background: "black",
                                              border: "0.14px black solid",
                                            }}
                                          ></div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div
                                style={{
                                  height: on10 ? 200 : 110,
                                  paddingTop: 18.74,
                                  paddingBottom: 18.74,
                                  paddingLeft: 18.74,
                                  paddingRight: 37.49,
                                  background: on10 ? "#FFCC2A" : "white",
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "flex-start",
                                  gap: 7.5,
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    width: 600.99,
                                    position: "relative",
                                  }}
                                >
                                  {on10 ? (
                                    <div
                                      style={{
                                        width: 600,
                                        height: 89.03,
                                        left: 32.8,
                                        top: 78.72,
                                        position: "absolute",
                                        textAlign: "justify",
                                        color: "black",
                                        fontFamily: "General Sans",
                                        fontSize: 14,
                                        fontWeight: "500",
                                        wordWrap: "break-word",
                                      }}
                                    >
                                      Buga Travels operates in multiple cities
                                      across Nigeria and Africa. If you are
                                      approved a driver, you may have the
                                      opportunity to drive in different cities
                                      where Buga Travels operates, expanding
                                      your potential to serve a wider range of
                                      riders.
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  <div
                                    style={{
                                      left: 0,
                                      top: 0,
                                      position: "absolute",
                                      color: "#121212",
                                      fontSize: 18.74,
                                      fontFamily: "General Sans",
                                      fontWeight: "600",
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    10
                                  </div>
                                  <div
                                    style={{
                                      width: 600,
                                      height: 45,
                                      left: 32.8,
                                      top: 0,
                                      position: "absolute",
                                    }}
                                  >
                                    <div
                                      style={{
                                        left: 0,
                                        top: 0,
                                        position: "absolute",
                                        color: "#151515",
                                        fontSize: 16.87,
                                        fontFamily: "General Sans",
                                        fontWeight: "600",
                                        wordWrap: "break-word",
                                        paddingRight: 40,
                                      }}
                                    >
                                      {" "}
                                      Can I drive for Buga Travels in multiple
                                      cities?
                                    </div>
                                    <div
                                      onClick={() => {
                                        setON10(!on10);
                                      }}
                                      style={{
                                        left: 555.85,
                                        top: 7.5,
                                        position: "absolute",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        alignItems: "flex-start",
                                        display: "inline-flex",
                                      }}
                                    >
                                      <div
                                        style={{
                                          width: 28.34,
                                          height: 28.34,
                                          borderRadius: 9999,
                                          border: "0.14px black solid",
                                        }}
                                      />
                                      {on10 ? (
                                        <div
                                          style={{
                                            width: 9.63,
                                            height: 9.63,
                                            left: 9.48,
                                            top: -3,
                                            fontWeight: 500,
                                            fontSize: 20,
                                            fontFamily: "General Sans",
                                            position: "absolute",
                                          }}
                                        >
                                          x
                                        </div>
                                      ) : (
                                        <div
                                          style={{
                                            width: 22.23,
                                            height: 22.23,
                                            position: "relative",
                                          }}
                                        >
                                          <div
                                            style={{
                                              width: 9.26,
                                              height: 4.63,
                                              left: 9.48,
                                              top: -16.26,
                                              fontFamily: "General Sans",
                                              position: "absolute",
                                              background: "black",
                                              border: "0.14px black solid",
                                            }}
                                          ></div>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                  </section>
                </div>
              </center>

              <div className="reviews">
                <div className="Homp-center-text5">
                  <h2>
                    <center>Reviews</center>
                  </h2>
                </div>
                <AutoPlaySlider />
              </div>
              <div className="Form">
                {" "}
                <center>
                  <div className="Form-text">
                    <h2>Stay in the loop!</h2>
                    <p>
                      Receive the latest updates, special promotions, and
                      exclusive offers just for you
                    </p>
                    <div className="sp-form">
                      <MdEmail className="md-sp " />
                      <input
                        className="in-sp"
                        type="text"
                        placeholder="Email Address"
                      />
                      <button className="btn-sub">Subscribe</button>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default Homep;
