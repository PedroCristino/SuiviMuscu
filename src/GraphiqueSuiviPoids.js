import React, { Component } from "react";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const GraphiqueSuiviPoids = () => {
  const data = [
    { name: "01/10/2017", poids: 87 },
    { name: "01/11/2017", poids: 88 },
    { name: "01/12/2017", poids: 89 },
    { name: "01/01/2018", poids: 91 },
    { name: "01/02/2018", poids: 90 },
    { name: "01/03/2018", poids: 89 },
    { name: "01/04/2018", poids: 86 },
    { name: "01/05/2018", poids: 84 },
    { name: "01/06/2018", poids: 82 },
    { name: "01/07/2018", poids: 78.5 },
    { name: "01/08/2018", poids: 79 },
    { name: "01/09/2018", poids: 81 },
    { name: "01/10/2018", poids: 83 }
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="name" />
        <YAxis domain={[70, "auto"]} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          strokeWidth={2}
          type="linear"
          dataKey="poids"
          name="Poids"
          stroke="#8884d8"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraphiqueSuiviPoids;
