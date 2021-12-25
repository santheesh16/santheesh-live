import React from 'react';
import styled from 'styled-components';
import "./nav.css";
import Button from "react-bootstrap/Button";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
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
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><a href="#home" className="cool-link">Home</a></li>
      <li><a href="#about" className="cool-link">About</a></li>
      <li><a href="#skills" className="cool-link">Skills</a></li>
      <li><a href="#experience" className="cool-link">Experience</a></li>
      <li><a href="#certificate" className="cool-link">Certificates</a></li>
      <li><a href="#projects" className="cool-link">Project</a></li>
      <li><a href="#contact" className="cool-link">Contact</a></li>
      <div className="p-2">
        <a href="https://drive.google.com/file/d/18kbm-lIBgs5XVI-1cpJ4IyWa0a_k7REt/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <Button className="m-2 my-btn" variant="outline-success">
            Resume
                      </Button>
        </a>
      </div>
    </Ul>
  )
}

export default RightNav
