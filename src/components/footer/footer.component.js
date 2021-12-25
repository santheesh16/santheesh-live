import React from "react";
import "./footer.style.css";

const Footer = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">
        <a href="https://github.com/santheesh16">Developed by ©Santheesh A |&nbsp; {new Date().getFullYear()} </a>
        </div>
    </div>
  );
};

export default Footer;
