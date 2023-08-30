import React from "react";
import { barChartData } from "../components/chart";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const Chart = () => {
  return (
    <div>
      <BarChart
        width={550}
        height={300}
        data={barChartData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray={"3"} />
        <XAxis
          dataKey={"Age"}
          color="#0000"
          stroke="#000"
          style={{ color: "0000" }}
        />
        <YAxis stroke="#000" />
        {/* <Tooltip /> */}
        <Bar dataKey={"age"} fill="#B8B8B8" />
        {/* <Legend /> */}
      </BarChart>
    </div>
  );
};

export default Chart;
