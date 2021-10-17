import React from "react";
import chef1 from "../../../images/Image/adult-blur-blurred-background-687824.png";
import chef2 from "../../../images/Image/chef-cook-food-33614.png";
import chef3 from "../../../images/Image/architecture-building-city-2047397.png";
import icon1 from "../../../images/ICON/Group 204.png";
import icon2 from "../../../images/ICON/Group 1133.png";
import icon3 from "../../../images/ICON/Group 245.png";
import Expert from "../Expert/Expert";

const chefs = [
  {
    id: 1,
    img: chef1,
    icon: icon1,
    title: "Fast Delivery",
    details:
      "Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.",
  },
  {
    id: 2,
    img: chef2,
    icon: icon2,
    title: "Best Quality Chef",
    details:
      "Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.",
  },
  {
    id: 1,
    img: chef3,
    icon: icon3,
    title: "Home Delivery",
    details:
      "Keep your systems in sync with automated web hook bases notifications each tume link is paid and how we dream about our future.",
  },
];

const Experts = () => {
  return (
    <div className="grid mx-40  ">
      <div className="grid grid-cols- gap-8">
        <h2 className="text-4xl  text-left">Why you choose us</h2>
        <p className="text-gray-500 mb-16 text-left text-wrap">
          Barton waited twenty always repair in within we do. An delighted
          <p>
            offending curiosity my is dashwoods at. Boy prosperous increasing
            surrounded.
          </p>
        </p>
      </div>

      <div className=" ">
        <div className="grid grid-cols-3 gap-8">
          {chefs.map((chef) => (
            <Expert key={chef.id} chef={chef}></Expert>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experts;
