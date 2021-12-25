import React from 'react';
import styled from 'styled-components';
import "./nav.css";
import Logo from "../../assets/icons/logow.webp";
import Button from "react-bootstrap/Button";
import Footer from "../../components/footer/footer.component";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 25;
  li {
    padding: 18px 10px;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
    a {
      text-decoration-line: none;
      color: white;
    }
    .logo {
      width: 25%;
    }
  }

`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <div>
        <img className="logo" src={Logo} alt="My-Logo" />
      </div>
      <li><a href="#home" className="cool-link">Home</a></li>
      <li><a href="#about" className="cool-link">About</a></li>
      <li><a href="#skills" className="cool-link">Skills</a></li>
      <li><a href="#experience" className="cool-link">Experience</a></li>
      <li><a href="#certificate" className="cool-link">Certificates</a></li>
      <li><a href="#projects" className="cool-link">Project</a></li>
      <li><a href="#contact" className="cool-link">Contact</a></li>
      <div>
        <a href="https://drive.google.com/file/d/1_AVIMpNXvtHfNsphBOPZA9vUvH6K3U5H/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <Button className="m-2 my-btn" variant="outline-success">
            My Resume
                      </Button>
        </a>
      </div>
      <li><Footer/></li>
    </Ul>
  )
}

export default RightNav
