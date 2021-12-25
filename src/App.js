import React, {useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Nav/Navbar';
import Footer from "./components/footer/footer.component";
import Profile from "./Pages/Profile";
import About from "./Pages/about/about.component";
import Experience from "./Pages/experience/experience.component";
import Skills from "./Pages/skills/skills.component";
import Certificate from "./Pages/certificate-show/show-certificate";
// import LoadPage from "./components/loading/LoadingPage";
import ContactMedia from "./Pages/contact-form/contact-form.component";
import Project from "./Pages/projects-timeline/projects-timeline.component";
// import LoadPage from "./Pages/LoadingPage"
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
const loader = document.querySelector(".preloader");

const showLoader = () => loader.classList.remove("preloader");
const addClass = () => loader.classList.add("loader-hide");


function App() {
  useEffect(() => {
    showLoader();
    addClass();
  }, []);
  return (
    <div id="home">
      <div className="home" >
        <Navbar />
        <Particles
        className="particles particles-box"
        params={particlesOptions}
      />
         <Fade duration={500}>
          <hr />
          <Profile />
        </Fade>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <About />
          </Fade>
        </Container>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Skills />
          </Fade>
        </Container>

        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
        
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Certificate />
          </Fade>
        </Container>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Project />
          </Fade>
        </Container>

        
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <ContactMedia />
          </Fade>
        </Container>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Footer />
          </Fade>
        </Container>
      </div>
    </div>
  );
}

export default App;

//https://github.com/akjha96/ReactifolioBs4_Akj