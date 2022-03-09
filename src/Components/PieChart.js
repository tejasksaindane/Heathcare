import React from "react";
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from "recharts";

const pdata = [
  {
    name: "HealthReport",
    patient: 13,
    fees: 10,
  },
  {
    name: "Sugar level",
    patient: 15,
    fees: 12,
  },
  {
    name: "BMI",
    patient: 10,
    fees: 5,
  },
];
const sdata = [
  {
    name: "Mental Status Examination",
    patient: 13,
    fees: 10,
  },
  {
    name: "Previos consultations",
    patient: 15,
    fees: 12,
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
            dataKey="patient"
            nameKey="name"
            cx="50%"
            cy="20%"
            outerRadius={75}
            fill="#f8a5c2"
          />
          <Pie
            data={sdata}
            dataKey="patient"
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
        Patient Information Leaflet
      </h4>
    </div>
  );
};

export default PieCharts;
