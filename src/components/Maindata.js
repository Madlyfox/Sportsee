import React from "react";
import useAxios from "../utils/FetchData";
import { useParams } from "react-router-dom";

import flame from "../img/energy.png";
import protein from "../img/chicken.png";
import apple from "../img/apple.png";
import cheeseburger from "../img/cheeseburger.png";

const Maindata = () => {
  const userId = useParams();

  let id = userId.userId;
  let fetchResult = useAxios(`http://localhost:3000/user/${id}`);

  let data;

  if (!fetchResult === false) {
    console.log(fetchResult);
    data = fetchResult;

    return (
      <div className="info">
        <div className="card ">
          <div className="logo-card red">
            <img src={flame} alt="" />
          </div>
          <div className="text">
            <h3>{data.keyData.calorieCount}kCal</h3>
            <p className="data-title">Calories</p>
          </div>
        </div>
        <div className="card ">
          <div className="logo-card blue">
            <img src={protein} alt="" />
          </div>
          <div className="text">
            <h3>{data.keyData.proteinCount}g</h3>
            <p className="data-title">Proteines</p>
          </div>
        </div>
        <div className="card ">
          <div className="logo-card yellow">
            <img src={apple} alt="" />
          </div>
          <div className="text">
            <h3>{data.keyData.carbohydrateCount}g</h3>
            <p className="data-title">Glucides</p>
          </div>
        </div>
        <div className="card ">
          <div className="logo-card pink">
            <img src={cheeseburger} alt="" />
          </div>
          <div className="text">
            <h3>{data.keyData.lipidCount}g</h3>
            <p className="data-title">Lipides</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Maindata;
