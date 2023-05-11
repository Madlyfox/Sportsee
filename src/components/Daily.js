import React from "react";
import useAxios from "../utils/FetchData";
import { useParams } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Daily = () => {
  const userId = useParams();

  let id = userId.userId;
  let fetchResult = useAxios(`http://localhost:3000/user/${id}/activity`);

  let data;

  if (!fetchResult === false) {
    console.log(fetchResult);
    data = fetchResult;

    function formatYAxis(value, index) {
      if (index >= 0) return index + 1;

      return index;
    }

    const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
        return (
          <div className="custom-tooltip">
            <p className="label">{`${payload[0].value} kg`}</p>
            <p className="desc">{`${payload[1].value} kcal`}</p>
          </div>
        );
      }

      return null;
    };

    return (
      <ResponsiveContainer>
        <BarChart data={data.sessions} barGap={10}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis
            dataKey="day"
            tickSize={20}
            tickLine={false}
            interval="preserveStartEnd"
            tickFormatter={formatYAxis}
            stroke="#979797"
          />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
            tickSize={20}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="top" align="right" height={50} />
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
};

export default Daily;
