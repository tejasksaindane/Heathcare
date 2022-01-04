import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

const pdata = [
  {
    name: "Python",
    student: 13,
    fees: 10,
  },
  {
    name: "Js",
    student: 15,
    fees: 12,
  },
  {
    name: "React",
    student: 10,
    fees: 5,
  },
  {
    name: "C++",
    student: 17,
    fees: 12,
  },
  {
    name: "Java",
    student: 11,
    fees: 6,
  },
];
const Charts = () => {
  return (
    <div>
      <center>
        <h5 style={{ marginTop: "20px", marginBottom: "10px" }}>
          Blood Pressure
        </h5>
      </center>
      <ResponsiveContainer width="100%" aspect={2}>
        <LineChart
          data={pdata}
          width={500}
          height={300}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={"preserveStartEnd"}
            // tickFormatter={(value) => value + "Programming"}
          />
          <YAxis />
          <Tooltip contentStyle={{ backgroundColor: "white" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="student"
            stroke="red"
            activeDot={{ r: 12 }}
          />
          <Line dataKey="fees" stroke="green" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
