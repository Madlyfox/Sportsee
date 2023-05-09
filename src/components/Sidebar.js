import React from "react";
import "../scss/sidebar.scss";
import zen from "../img/zen.png";
import swim from "../img/swim.png";
import bike from "../img/bike.png";
import weight from "../img/weight.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icons">
        <div className="icon">
          <img src={zen} alt="" />
        </div>
        <div className="icon">
          <img src={swim} alt="" />
        </div>
        <div className="icon">
          <img src={bike} alt="" />
        </div>
        <div className="icon">
          <img src={weight} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
