import React from "react";
import useAxios from "../utils/FetchData";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Maindata from "../components/Maindata";
import Average from "../components/Average";
import RadarStat from "../components/RadarStat";
import Radial from "../components/Radial";
import Daily from "../components/Daily";

import "../scss/app.scss";

export function Home() {
  const userId = useParams();

  let id = userId.userId;
  let fetchResult = useAxios(`http://localhost:3000/user/${id}`);

  let data;

  if (!fetchResult === false) {
    console.log(fetchResult);
    data = fetchResult;

    return (
      <div className="appContainer">
        <Navbar />
        <main>
          <Sidebar />
          <div className="content">
            <div className="header">
              <div className="inline">
                <h1>Bonjour</h1>
                <h1 className="red">{data.userInfos.firstName}</h1>
              </div>
              <div className="obj">
                Félicitation ! Vous avez explosé vos objectifs hier 👏
              </div>
            </div>
            <div className="data">
              <div className="graph">
                <div className="daily">
                  <h3>Activité quotidienne</h3>
                  <Daily />
                </div>
                <div className="graph_mini">
                  <div className="average">
                    <p>Durée moyenne des sessions</p>
                    <Average />
                  </div>
                  <div className="radar">
                    <RadarStat />
                  </div>
                  <div className="radial">
                    <p>Score</p>
                    <Radial />
                  </div>
                </div>
              </div>
              <Maindata />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
