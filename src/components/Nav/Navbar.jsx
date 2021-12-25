import React, {Component} from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import RightNav from './RightNav';
import Logo from "../../assets/icons/logow.webp";

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  
  padding: 15px 20px;
  display: flex;
  font-size: 20px;
  justify-content: space-between;

  .logo {
    width: 15%;
  }
`
const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
  @media (max-width: 768px) {
    .active {
      visibility: hidden;
    }
    .hidden {
      visibility: hidden;
    }
  }
`;
const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: 4.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  background: #101018f8;
  z-index: 1000;
  border-bottom: 3px solid #3361B2;
  a {
    margin-right: 1rem;
    font-weight: normal;
    color: black;
    text-decoration: none;
  }
  .brand {
    font-style: italic;
    margin-left: 1rem;
    font-weight: bold;
    color: white;
    font-size: 1.25rem;
  }
  a {
    text-decoration-line: none;
    color: white;
  }
`;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      scrollPos: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll() {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos
    });
  }
  render() {

  
  return (
    <div>
    <Transition>
    <StyledNavbar className={this.state.show ? "active" : "hidden"}>
    <Nav>
      <div>
      <img className="logo" src={Logo} alt="My-Logo" />
      </div>
      <RightNav/>
      
    </Nav>
    </StyledNavbar>
  </Transition>
    <Burger />
    </div>
  )
  }
}

export default Navbar
