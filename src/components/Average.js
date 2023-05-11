import React from "react";
import useAxios from "../utils/FetchData";
import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../scss/average.scss";

const Average = () => {
  const userId = useParams();

  let id = userId.userId;
  let fetchResult = useAxios(
    `http://localhost:3000/user/${id}/average-sessions`
  );

  let data;

  if (!fetchResult === false) {
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

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <small className>{`${payload[0].value} min`}</small>
          </div>
        );
      }

      return null;
    };

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

          <Tooltip content={<CustomTooltip />} />
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
