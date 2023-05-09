import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../utils/FetchData";

import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const Radial = () => {
  const userId = useParams();

  let id = userId.userId;
  let fetchResult = useAxios(`http://localhost:3000/user/${id}`);

  let user;

  if (!fetchResult === false) {
    console.log(fetchResult);
    user = fetchResult;

    const data = [
      {
        uv: user.todayScore * 100,
        fill: "#ff0000",
      },
    ];

    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="100%"
          outerRadius="70%"
          barSize={10}
          data={data}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />

          <RadialBar
            background
            dataKey="uv"
            angleAxisId={0}
            data={data}
            label={{ fill: "#666", position: "center" }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
};
export default Radial;
