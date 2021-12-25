import React from "react";
import "./loading.style.css";
import Logo from "../../assets/icons/logow.webp";

const LoadPage = () => {
  return (
    <div className = "loading-page">
      <header className="App-header">
       <img className="load-logo" src={Logo} alt="load-logo" />
       </header>
      </div>
  );
};

export default LoadPage;