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
    Blood: "A+",
    Wbc: 13,
    Rbc: 10,
  },
  {
    Blood: "B+",
    Wbc: 15,
    Rbc: 12,
  },
  {
    Blood: "A-",
    Wbc: 10,
    Rbc: 5,
  },
  {
    Blood: "B-",
    Wbc: 17,
    Rbc: 12,
  },
  {
    Blood: "O+",
    Wbc: 11,
    Rbc: 6,
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
            dataKey="Wbc"
            stroke="red"
            activeDot={{ r: 12 }}
          />
          <Line dataKey="Rbc" stroke="green" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
