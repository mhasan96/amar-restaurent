import React, { useEffect, useState } from "react";
import Food from "../Food/Food";

const Dinner = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("food.json")
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  return (
    <div>
      <div className="grid mx-40  ">
        <div className="grid grid-cols-3 gap-12">
          {menu.slice(12, 18).map((food) => (
            <Food key={food.id} food={food}></Food>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dinner;
