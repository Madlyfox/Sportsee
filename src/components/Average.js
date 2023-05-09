import React from "react";
import useAxios from "../utils/FetchData";
import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../scss/average.scss";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Average = () => {
  const userId = useParams();

  let id = userId.userId;
  let fetchResult = useAxios(
    `http://localhost:3000/user/${id}/average-sessions`
  );

  let data;

  if (!fetchResult === false) {
    console.log(fetchResult);

    data = fetchResult;

    function formatYAxis(value, index) {
      if (index === 0) return "L";
      if (index === 1) return "M";
      if (index === 2) return "M";
      if (index === 3) return "J";
      if (index === 4) return "V";
      if (index === 5) return "S";
      if (index === 6) return "D";
      return index;
    }

    return (
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          data={data.sessions}
          margin={{
            top: 5,

            bottom: 5,
          }}
        >
          <XAxis
            dataKey="sessionLength"
            stroke="#ffffff"
            axisLine={false}
            tickSize={10}
            tickLine={false}
            interval="preserveStartEnd"
            tickFormatter={formatYAxis}
          />

          <Tooltip />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#ffffff"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
};

export default Average;
