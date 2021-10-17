import React from "react";
import logo from "../../../images/logo2.png";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="bg-img bg-local object-cover ">
      <div className="sticky top-0 z-50 flex nav justify-between ">
        <img className="bg-cover ml-32 " src={logo} alt="" />
        <div className="mr-32">
          <button className="mr-8">
            <a href="">Sign In</a>
          </button>
          <button className=" transition duration-500 ease-in-out transform hover:scale-110  bg-red-600  text-white hover:text-black font-bold py-3  px-8 rounded-full">
            <a href="">Sign Up</a>
          </button>
        </div>
      </div>
      <div className="searchBar">
        <h1 className="text-5xl mb-8">Best food waiting for your belly</h1>
        <input
          className="py-3 px-4 input-box rounded-full"
          type="text"
          placeholder="Search your food"
        ></input>
        <button className=" btn-food transition duration-500 ease-in-out transform hover:scale-110  bg-red-600  text-white hover:text-black font-bold py-3 px-8 rounded-full">
          Submit
        </button>
      </div>
    </div>
  );
};

export default NavBar;
