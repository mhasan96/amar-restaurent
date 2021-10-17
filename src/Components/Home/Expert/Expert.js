import React from "react";

const Expert = ({ chef }) => {
  const { img, title, details, icon } = chef;
  return (
    <div className="rounded box-border border-food mb-8 ">
      <div className="">
        <div className="bg-white hover:shadow-xl transition duration-500 ease-in-out transform hover:scale-110 rounded-lg mb-5">
          <img className="m-auto rounded-t-lg" src={img} alt="" />
          <div className="p-5">
            <a href="#">
              <h5 className="text-gray-900 font-bold text-left text-2xl tracking-tight ">
                <img className="inline-block mr-4" src={icon} alt="" />
                {title}
              </h5>
            </a>
            <p className="font-normal ml-16 text-left text-gray-700 ">
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
