import React from "react";
import logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-gray-800 flex footer justify-around pl-32 pt-16 pb-48">
      <img src={logo} alt="" />

      <div className="ml-96 text-left text-white">
        <h2>About Online Food</h2>
        <h2>Read our blog</h2>
        <h2>Sign up to deliver</h2>
        <h2>Add your restaurant</h2>
      </div>
      <div className=" text-left text-white">
        <h2>Get Help</h2>
        <h2>Ask any question</h2>
        <h2>Order Now</h2>
        <h2>Contact</h2>
      </div>
      <div className="mr-48 text-left text-white">
        <h2>Facebook</h2>
        <h2>Instagram</h2>
        <h2>Twitter</h2>
        <h2>Youtube</h2>
      </div>
    </div>
  );
};

export default Footer;
