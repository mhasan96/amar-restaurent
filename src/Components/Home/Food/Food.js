import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Food.css";

const Food = ({ food }) => {
  const { name, title, price, img } = food;
  return (
    <div className="rounded box-border border-food ">
      <div className="">
        <div className="bg-white hover:shadow-xl transition duration-500 ease-in-out transform hover:scale-110 rounded-lg mb-5">
          <img className="foody m-auto rounded-t-lg" src={img} alt="" />
          <div className="p-5">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              {name}
            </h5>
            <p className="font-normal text-gray-700 mb-3">{title}</p>
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              ${price}
            </h5>
            <NavLink
              to="/description"
              className="transition duration-500 ease-in-out transform hover:scale-110  text-white bg-red-600 hover:text-black font-bold py-2 px-8 rounded-full text-center inline-flex items-center"
            >
              Order Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
