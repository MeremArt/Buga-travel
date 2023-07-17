import React, { useState } from "react";
import FAQLanding from "../../Components/FAQLanding";
import Footer from "../../Components/Footer/Footer";
import Section3 from "./images/section3.png";
import FAQ from "./images/faq.svg";
import Navbar from "../../Components/Navbar/Navbar";
import "./Ambasador.css";
function Ambasador() {
  const [loading, setLoading] = useState(false);
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
  return (
    <main>
      <Navbar />
      <div className="bg-ambassdor">
        <section className="ambass-form">
          <form className="form" onSubmit="">
            <div className="abs-fix-up">
              <h2>Become a Buga Travels Ambassador</h2>
            </div>

            <section className="Signup-input-form">
              <div className="form-row">
                <label className="input-text" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  className="Signup-input"
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
              <div className="form-row">
                <label className="input-text" htmlFor="phoneNumber">
                  Phone Number (We’ll send a verification code)
                </label>
                <input
                  type="text"
                  className="Signup-input"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  autoComplete="phoneNumber"
                  style={{ color: "#B0B1B2", fontSize: "14px" }}
                />
              </div>
              <div className="form-row">
                <label className="input-text" htmlFor="phoneNumber">
                  Most active social media handles
                </label>
                <input
                  type="text"
                  className="Signup-input"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="E.g. @dannyjay"
                  autoComplete="phoneNumber"
                  style={{ color: "#B0B1B2", fontSize: "14px" }}
                />
              </div>
              <div className="form-row">
                <label className="input-text" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="Signup-input"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  autoComplete="new-password"
                  style={{ color: "#B0B1B2", fontSize: "14px" }}
                />
              </div>
            </section>
            <button className="CreateAccount-btn" type="submit">
              Become an Ambassador
            </button>
          </form>
        </section>
      </div>
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
                    <div style={{ width: 600.99, position: "relative" }}>
                      {on1 ? (
                        <div
                          style={{
                            fontFamily: "Satoshi",
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
      {/* end of faq */}
      <Footer />
    </main>
  );
}

export default Ambasador;
