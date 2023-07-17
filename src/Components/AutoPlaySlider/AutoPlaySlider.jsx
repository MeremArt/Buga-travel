import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./AutoPlaySlider.css";

export default class AutoPlaySlider extends Component {
  render() {
    const settings = {
      infinite: true,
      
    
    autoplayspeed: 4000,
    infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <style>{`
          .slider-container {
          
            padding: 40px;
            border-radius: 8px;
          }
          .slider-item {
            background: #fdfdfd;
            color: #00000;
            text-align: center;
            height: 70vh;
            border-radius: 8px;
            display: flex;
             align-items: center;
            box-shadow: 0px 0.3798445761203766px 15.992229461669922px 0px rgba(0, 0, 0, 0.10);

Show 3 more colors

            // justify-content: center;
          }
          .slider-item h3 {
text-align: center;
font-size: 35.389px;
font-style: normal;
font-weight: 600;
line-height: 55.62px;
    margin-top: 210px;
    // max-width: 26rem;
    // margin-left: 3rem;
letter-spacing: -0.911px;
          }
        @media (max-width:890px){
          .slider-item h3 {
            text-align: center;
            font-size: 25.389px;
            font-style: normal;
            font-weight: 600;
            padding:15px;
            line-height: 35.62px;
                margin-top: 120px;
                // max-width: 26rem;
                // margin-left: 3rem;
            letter-spacing: -0.911px;
                      }
        }
          .slider-container h2{
               display: flex;
               font-size: 32.389px;
font-style: normal;
font-weight: 600;
    justify-content: center;
    padding-bottom: 2rem;
          }
          .Homp-center-text5 h2 {
            color: #020202;
            font-size:45px;
            font-style: normal;
            font-weight: 900;
            text-align: start;
            line-height: 85px;
            letter-spacing: -0.634px;
            margin-bottom: 1rem;
          }
        `}</style>
        <br /><br />
        <div className="slider-container container">
        <div className="Homp-center-text5">
          </div>
          

          <center>
          <div className="col-9">
          <Slider {...settings}>
            <div className="slider-item">
              <h3>
                " Buga Travels is of the people, by the people, for "
                <div>the people</div>
              </h3>
            </div>
            <div className="slider-item">
              <h3>
                "My driver was so nice,he got me chips and water. Thank you
                Buga!"
              </h3>
            </div>
            <div className="slider-item">
              <h3>
                "I really appreciate the ride, thank you for making me have a
                stress free ride back to school.
              </h3>
            </div>
            <div className="slider-item">
              <h3>"it was nice, and very comfortable, thank you very much."</h3>
            </div>
            {/* <div className="slider-item">
              <h3>5</h3>
            </div>
            <div className="slider-item">
              <h3>6</h3>
            </div> */}
          </Slider>
          </div>
          </center>
        </div>
      </div>
    );
  }
}
