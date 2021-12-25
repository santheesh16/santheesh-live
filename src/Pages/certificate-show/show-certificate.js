import "./cert.css";
import React from "react";
//import Slider from "react-slick"
import Carousel from "react-bootstrap/Carousel";
import MERNStack from "../../assets/img/certificat/MERN Stack.webp";
import HTML from "../../assets/img/certificat/HTML.webp";
import GuviCertification from "../../assets/img/certificat/GuviCertification.webp";
import JavaScriptHTML from "../../assets/img/certificat/HTMLJavaScript.webp";
import Java from "../../assets/img/certificat/Java.webp";
import JavaBasics from "../../assets/img/certificat/Java(Basics).webp";
import PythonBasics from "../../assets/img/certificat/Python(Basics).webp";
import TCS from "../../assets/img/certificat/TCSCareerEdge.webp";
import SQL from "../../assets/img/certificat/TechGigSQL.webp";
import Webdev from "../../assets/img/certificat/Webdevelopment.webp";
import DataStructure from "../../assets/img/certificat/DataStructure.webp";

const Showcert = () => {

  return (
      <div id="certificate">
          <div className="certificate">
          <h4 className="pt-3 text-center font-details-b pb-3">CERTIFICATES</h4>
          <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="img-thumbnail " src={MERNStack} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-thumbnail " src={HTML} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-thumbnail " src={Webdev} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-thumbnail " src={GuviCertification} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-thumbnail " src={JavaScriptHTML} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-thumbnail " src={Java} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-thumbnail " src={JavaBasics} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-thumbnail " src={PythonBasics} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-thumbnail " src={TCS} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-thumbnail " src={SQL} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="img-thumbnail " src={DataStructure} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
      </div>
    
  );
}

export default Showcert;
