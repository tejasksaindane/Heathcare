import React from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from "recharts";

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
const sdata = [
  {
    name: "cars",
    student: 13,
    fees: 10,
  },
  {
    name: "trains",
    student: 15,
    fees: 12,
  },
  {
    name: "Airplanes",
    student: 10,
    fees: 5,
  },
];
const PieCharts = () => {
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={1.5}>
        <PieChart
          width={330}
          height={300}
          margin={{ top: 60, right: 10, left: 10, bottom: 0 }}
          data={pdata}
        >
          <Pie
            data={pdata}
            dataKey="student"
            nameKey="name"
            cx="50%"
            cy="20%"
            outerRadius={75}
            fill="#f8a5c2"
          />
          <Pie
            data={sdata}
            dataKey="student"
            nameKey="name"
            cx="50%"
            cy="20%"
            outerRadius={45}
            fill="#fad390"
          />

          <Tooltip contentStyle={{ backgroundColor: "white" }} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <h4
        style={{
          marginTop: "20px",
          marginBottom: "10px",
          color: "gray",
          textAlign: "center",
        }}
      >
        User's Profile
      </h4>
    </div>
  );
};

export default PieCharts;
