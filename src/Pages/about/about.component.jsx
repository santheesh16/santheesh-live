import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h3 className="pt-3 text-center font-details pb-3">ABOUT ME</h3>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center about-img mb-2 mr-2 ">
                <a href="https://github.com/santheesh16">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                </a>
                
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-4 my-details rounded">
                Hi there! I am <strong className="my-name">&nbsp;Santheesh A</strong>
                <br />A passionate programmer , born in India. I am a Full Stack Web Developer with React.js, Express.js, Node.js as my tech stack.
                and Now, I am learning about Java Full Stack Development.
                <br />
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2 my-btn" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1cw7rz2AcwWDSngUaYKcT4pmDl_YMiVxc/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2 my-btn" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/santheesh16" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2 my-btn" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/santheesh-a-860a7614b/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2 my-btn" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
