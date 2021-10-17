import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import NavBar from "../../Home/NavBar/NavBar";

const Header = () => {
  return (
    <div>
      <div className="mt-8 mb-20">
        <NavLink
          className="  text-black focus:bg-red-600 focus:text-white py-2 px-6 rounded-full"
          as={HashLink}
          to="/breakfast"
        >
          Breakfast
        </NavLink>
        <NavLink
          className="text-black focus:bg-red-600 focus:text-white py-2 px-6 rounded-full ml-8"
          as={HashLink}
          to="/lunch"
        >
          Lunch
        </NavLink>
        <NavLink
          className="text-black focus:bg-red-600 focus:text-white py-2 px-6 rounded-full ml-8"
          as={HashLink}
          to="/dinner"
        >
          Dinner
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
