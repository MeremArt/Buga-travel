import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { BsFillSendFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import "./Invest.css";

const Invest = () => {
  const paystack = "https://paystack.com/pay/BugaE-trike";
  const youtubeLink2 = "https://youtu.be/o5FtlL97kYE";
  const handleRedirect = () => {
    window.location.href = "https://paystack.com/pay/BugaE-trike";
  };
  const handleWhatsapp = () => {
    window.location.href = "https://wa.link/0kryls";
  };
  return (
    <main>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <center>
        <div className="invest-box-etrike">
          <div className="invest-time">
            <h2>The All New Electric Tricycle</h2>
            <p>Be at the forefront of innovation</p>
            <p>
              With an investment of{" "}
              <span style={{ color: "#ffcc2a" }}>$2900</span> you can set
              yourself up to earn lucrative and passive for as long as you want.
            </p>
          </div>
          <div className="Etrike-over">
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

          <div>
            <button onClick={handleRedirect} className="buy-btn">
              Buy now
            </button>
          </div>
          <br />

          <div>
            <p>
              You will be contacted by one of our representative once payment is
              made
            </p>
          </div>
          <br />
          <br />
          <br />
          <div>
            <h2>Need more information? Contact us</h2>
            <br />
            <p>Email address: admin@bugatravels.com</p>
          </div>
          <div className="send-a-msg">
            <button onClick={handleWhatsapp}>
              <BsFillSendFill />
              Send Whatsapp Message
            </button>
          </div>
        </div>
      </center>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </main>
  );
};

export default Invest;
