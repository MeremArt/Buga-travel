import React, { useEffect, useState, useRef } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
// import video from "./Video/Video1.mp4";
// import video2 from "./Video/Video2.mp4";
import ReactPlayer from "react-player";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import Banner from "./images/Redo.svg";
import { Link } from "react-router-dom";
import copyRight from "./images/copyRight.svg";
import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";
import logo2 from "./images/logo2.svg";
import img4 from "./images/frame.jpeg";
import Dot from "./images/Dot.jpeg";
import Section3 from "./images/section3.png";
import FAQ from "./images/faqe.svg";
import Revolution from "./images/Revolution.jpeg";
import Div from "./images/threediv.jpeg";
import Break1 from "./images/Break1.svg";
import Break3 from "./images/Break3.svg";
import Break2 from "./images/Break2.svg";
import B1 from "./images/b1.svg";
import { useNavigate } from "react-router-dom";
import Purchase from "./images/youpurchase.svg";
import Productpeak from "./images/product-peak.svg";
import B2 from "./images/b2.svg";
import B3 from "./images/b3.svg";
import D1 from "./images/d1.svg";
import D2 from "./images/d2.svg";
import D3 from "./images/d3.svg";
import D4 from "./images/d4.svg";
import D5 from "./images/d5.svg";
import C from "./images/c.svg";
import Faqinvest from "../../Components/FAQinvestment";
// import Footer from "../../Component/Footer/Footer";
import Banner2 from "./images/Banner2.svg";
import "./Etrike.css";
function Etrike() {
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
  const youtubeLink = "https://youtu.be/HUo7ZkfCNUY";
  const youtubeLink2 = "https://youtu.be/o5FtlL97kYE";
  const navigate = useNavigate();
  const handleBuyNow = () => {
    navigate("/Invest");
  };
  return (
    <main style={{ background: "#fffbed" }}>
      <br />
      <br />
      <br />
      <section className="Etrike-body">
        <section className="hero-invest">
          <div className="text-div">
            <h2 style={{ color: " #020202" }}>
              Invest in the{" "}
              <span style={{ color: "#FFCC2A" }}>
                {" "}
                Future of Transportation!
              </span>
            </h2>
            <p>Own Your Electric Tricycle and Reap Lucrative Rewards!</p>
          </div>
        </section>
      </section>
      <div className="video-container">
        <ReactPlayer
          url={youtubeLink}
          aying
          loop
          ted
          width="100%"
          height="100%"
          controls={true} // Show player controls
          config={{
            youtube: {
              playerVars: {
                showinfo: 0, // Hide video information
              },
            },
          }}
        />

        {/* <video autoPlay Loop muted>
          <source src={googleDriveLink} type="video/mp4" />
        </video> */}
      </div>
      <div className="btn-invest">
        <Link to="/buynow">
          <button onClick={handleBuyNow} className="invest-now-btn">
            Buy Now!
          </button>
        </Link>
      </div>
      <section className="head-fix">
        <p>Trusted by</p>
        <div className="trusted-container">
          <div className="box-img-1 ">
            <center>
              <img className="conven" src={Banner} alt="Trusted-by" />
            </center>
          </div>
        </div>
      </section>
      <section className="theproblem">
        <div className="Problem-text">
          <h2>The Problem</h2>
          <p>
            In Africa, the current transportation solutions within school
            campuses and communities are often unreliable, resulting in frequent
            delays, inconvenience, and added stress for the students trying to
            commute.
          </p>
          <p style={{ marginTop: "20px" }}>
            In many campuses and communities, students and individuals lack
            access to on and on demand transportation option for their daily
            commute.
          </p>
        </div>
        <div className="problem-img">
          <img className="prb-img" src={img4} />
        </div>
      </section>
      <section className="themission">
        <div className="Problem-text">
          <img className="prb-img" src={Dot} />
        </div>
        <div className="mission-img">
          <h2>
            Our <span style={{ color: "#FFCC2A" }}>mission</span>{" "}
          </h2>
          <p>
            Our mission is to provide accessible, on-demand transportation
            services that cater specifically to the needs of students and
            individuals in these underserved areas.
          </p>
          <p style={{ marginTop: "20px" }}>
            Recognizing the significance of this challenge, we are dedicated to
            bridging this transportation gap and empowering these communities
            with seamless and convenient mobility solutions.
          </p>
        </div>
      </section>
      <center className="join-the">
        <div className="mission-img">
          <h2>
            The <span style={{ color: "#FFCC2A" }}>solution</span>{" "}
          </h2>
        </div>
      </center>
      <section className="the-solution">
        <div className="video2-contain">
          <ReactPlayer
            url={youtubeLink2}
            aying
            loop
            ted
            width="100%"
            height="100%"
            controls={true} // Show player controls
            config={{
              youtube: {
                playerVars: {
                  showinfo: 0, // Hide video information
                },
              },
            }}
          />
        </div>
        <div className="solution-img">
          <h2>
            Our all new on demand electric tricycles designed to provide a
            comfortable and sustainable ride for students and faculty.  
          </h2>
          <ul className="list-solution">
            <li>Rechargeable high-capacity lithium-ion battery</li>
            <li>Seating for 4 passengers</li>
            <li>Ample storage space for books, groceries, etc</li>
            <li>Range: 40 miles</li>
            <li>Speed: Up to 20 miles/hr</li>
            <li>
              Built in safety features such as  LED lights and reflective
              surfaces
            </li>
          </ul>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <section>
          <div className="purchaseit">
            <h2>
              You Purchase, <span style={{ color: "#FFCC2A" }}>We manage</span>
              ,You earn
            </h2>
            <p>For as long as you decide!</p>
            <br />
            <br />
            <br />
            <img src={Purchase} className="purchase-img" />
          </div>
        </section>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <h2 style={{ fontSize: "50px", fontWeight: "600" }}>
          Product Sneakpeak
        </h2>
      </center>
      <div className="video-contain-full">
        <ReactPlayer
          url={youtubeLink2}
          aying
          loop
          ted
          width="100%"
          height="100%"
          controls={true} // Show player controls
          config={{
            youtube: {
              playerVars: {
                showinfo: 0, // Hide video information
              },
            },
          }}
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <center>
        <div>
          <img src={Productpeak} className="product-peak" alt="product-peak" />
        </div>
      </center>
      <div className="join-the">
        <div className="mission-img">
          <h2>The Path to Ownership</h2>
        </div>
      </div>
      <br />
      {/* ` */}
      <section className="theproblem">
        <div className="Problem-text">
          <div className="solution-img">
            <h2>Step 1: Initial Consultation</h2>
          </div>
          <p>
            Schedule a virtual call with our team. We'll guide you through the
            process, helping you understand the investment structure, projected
            returns, and the benefits of owning an Electric Tricycle. You’ll
            then be added to our exclusive investors channel for next steps.
          </p>
        </div>
        <div className="problem-img">
          <img className="prb-img" src={D5} />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="themission">
        <div className="Problem-text">
          <img className="prb-img" src={D2} />
        </div>
        <div className="mission-img">
          <div className="solution-img">
            <h2>Step 2: Acquisation</h2>
          </div>
          <p>
            Once you're ready to invest, our streamlined purchase process
            ensures a seamless experience. Your ownership is just a few clicks
            away.
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="theproblem">
        <div className="Problem-text">
          <div className="solution-img">
            <h2>Step 3: Track Your Success</h2>
          </div>
          <p>
            Gain exclusive access to a personalized dashboard, designed
            specifically for our investors. Monitor your investment's
            performance, track revenue and expenses, and stay updated on key
            metrics. With real-time data at your fingertips, you'll always be in
            control.
          </p>
          <p style={{ marginTop: "20px" }}></p>
        </div>
        <div className="problem-img">
          <img className="prb-img" src={D3} />
        </div>
      </section>
      <br />
      <br />
      <section className="themission">
        <div className="Problem-text">
          <img className="prb-img" src={D4} />
        </div>
        <div className="mission-img">
          <div className="solution-img">
            <h2>Step 4: Professional Management</h2>
          </div>
          <p>
            Sit back and relax as our expert team takes care of the day-to-day
            management of your Electric Tricycle. From maintenance and repairs
            to customer support and revenue generation, we handle it all. Enjoy
            the benefits of passive income without the hassle.
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="theproblem">
        <div className="Problem-text">
          <div className="solution-img">
            <h2>Step 5: Withdraw Your Earnings</h2>
          </div>
          <p>
            We believe in putting the power of your investment in your hands.
            Through your personalized dashboard, you can withdraw your earnings
            weekly. No waiting, no complicated processes—just a simple and
            efficient way to access the financial rewards of your investment.
          </p>
        </div>
        <div className="problem-img">
          <img className="prb-img" src={D5} />
        </div>
      </section>
      <br />
      <br />
      <div>{/* <Faqinvest /> */}</div>
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
                    <div style={{ width: 600.99, position: "relative" }}>
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
                          Buga Travels h a dedicated emergency support system in
                          place to sist drivers in ce of emergencies. If you
                          encounter an emergency situation while on a ride, you
                          can use the emergency button within the app to
                          immediately notify our support team. They will provide
                          guidance and necessary sistance to ensure your safety
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
                          What type of support does Buga Travels provide to
                          drivers in ce of emergencies?
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
                    <div style={{ width: 600.99, position: "relative" }}>
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
                          Currently, Buga Travels does not have a psenger rating
                          system. However, we encourage drivers to provide
                          feedback and report any issues they may encounter
                          during a ride. This feedback helps us monitor and
                          address any concerns related to psenger behaviour
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
                          Is there a rating system for psengers well?
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
                    <div style={{ width: 600.99, position: "relative" }}>
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
                          Yes, Buga Travels offers a rental program in
                          partnership with certain vehicle rental companies. If
                          you meet our driver requirements and don't own a
                          vehicle, you may have the option to rent a vehicle
                          through our approved partners to fulfill ride
                          requests.
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
                          Can I drive for Buga Travels if I don't own a vehicle?
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
                    <div style={{ width: 600.99, position: "relative" }}>
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
                          Yes, a Buga Travels driver, you are expected to adhere
                          to our driver guidelines and local transportation
                          regulations. These guidelines ensure a safe and
                          reliable experience for both drivers and psengers.
                          It's important to review and comply with these rules
                          to maintain your partnership with Buga Travels
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
                          Are there any specific rules or regulations I should
                          be aware of a Buga Travels driver?
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
                    <div style={{ width: 600.99, position: "relative" }}>
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
                          Yes, Buga Travels provides flexibility for drivers to
                          set their availability bed on their schedule. You can
                          customize your availability within the driver app,
                          indicating the days and hours you are willing to
                          accept ride requests.
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
                    <div style={{ width: 600.99, position: "relative" }}>
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
                          If a psenger cancels a ride, you will be notified
                          through the app, and the ride will be marked canceled.
                          In such ces, you may receive a cancellation fee
                          depending on the specific circumstances and our
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
                    <div style={{ width: 600.99, position: "relative" }}>
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
                          Buga Travels takes disputes between drivers and
                          psengers seriously. If a dispute arises, we encourage
                          both parties to provide detailed information through
                          the app or by contacting customer support. Our team
                          will thoroughly investigate the matter and work
                          towards a fair resolution.
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
                          How does Buga Travels handle disputes between drivers
                          and psengers?
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
                    <div style={{ width: 600.99, position: "relative" }}>
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
                          Currently, Buga Travels primarily focuses on providing
                          transportation services for university students and
                          shuttle services to and from the airport. Additional
                          services beyond the scope of psenger transportation
                          may not be supported at this time
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
                          Can I use Buga Travels to offer additional services,
                          such courier deliveries?
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
                    <div style={{ width: 600.99, position: "relative" }}>
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
                          Buga Travels employs a dynamic pricing model that
                          takes into account factors such distance, time, and
                          demand. This helps ensure fair compensation for
                          drivers and reonable pricing for psengers, considering
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
                          How does Buga Travels ensure fair pricing for both
                          drivers and psengers?
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
                    <div style={{ width: 600.99, position: "relative" }}>
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
                          Buga Travels operates in multiple cities across
                          Nigeria and Africa. If you are approved a driver, you
                          may have the opportunity to drive in different cities
                          where Buga Travels operates, expanding your potential
                          to serve a wider range of riders.
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
                          Can I drive for Buga Travels in multiple cities?
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
      <div className="foot-div">
        <Footer />
      </div>
      <Navbar />
    </main>
  );
}

export default Etrike;
