import React from "react";
import GMail from "../../assets/img/contact/mail.svg"
import LinkedIn from "../../assets/img/contact/linkedin.svg"
import FaceBook from "../../assets/img/contact/facebook.svg"
import GitHub from "../../assets/img/contact/github.svg"
import Twitter from "../../assets/img/contact/twitter.svg"
import Insta from "../../assets/img/contact/instagram.svg"
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div >
              <a href="mailto:santheesh62@gmail.com" target="_blank" rel="noopener noreferrer">
                <img className="m-2 contact-img" src={GMail} alt="gamil" width="30px" height="30px"/>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/santheesh-a-860a7614b/" target="_blank" rel="noopener noreferrer">
              <img className="contact-img" src={LinkedIn} alt="gamil" width="30px" height="30px"/>
              </a>
            </div>
            <div className="m-2">
              <a href="https://github.com/santheesh16" target="_blank" rel="noopener noreferrer">
              <img className="contact-img" src={GitHub} alt="gamil" width="30px" height="30px"/>
              </a>
            </div>
            <div className="m-2">
              <a href="https://twitter.com/santheesh_a" target="_blank" rel="noopener noreferrer">
              <img className="contact-img" src={Twitter} alt="gamil" width="30px" height="30px"/>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.instagram.com/swagy_boyoffi_/" target="_blank" rel="noopener noreferrer">
              <img className="contact-img" src={Insta} alt="gamil" width="30px" height="30px"/>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/profile.php?id=100011974931316&sk=about" target="_blank" rel="noopener noreferrer">
              <img className="contact-img" src={FaceBook} alt="gamil" width="30px" height="30px"/>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
