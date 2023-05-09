import React, { PureComponent } from "react";
import useAxios from "../utils/FetchData";
import { useParams } from "react-router-dom";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const RadarStat = () => {
  const userId = useParams();

  let id = userId.userId;
  let fetchResult = useAxios(`http://localhost:3000/user/${id}/performance`);

  let session;

  if (!fetchResult === false) {
    console.log(fetchResult);
    session = fetchResult;

    let value = session.data.map((obj) => {
      return obj.value;
    });

    let data = value.map((value, index) => {
      return Object.assign(
        {},
        {
          value,
          kind: session.kind[index + 1],
        }
      );
    });

    function formatPolarAxis(value, index) {
      if (value === "cardio") return "Card.";
      if (value === "energy") return "Ene.";
      if (value === "endurance") return "End.";
      if (value === "strength") return "For.";
      if (value === "speed") return "Vit.";
      if (value === "intensity") return "Int.";

      return index;
    }

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={formatPolarAxis}
            tickSize={10}
          />
          <Radar
            name="Mike"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
};
export default RadarStat;
