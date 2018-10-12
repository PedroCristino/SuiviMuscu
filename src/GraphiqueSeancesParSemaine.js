import React, { Component } from "react";
import {
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart
} from "recharts";

const GraphiqueSeancesParSemaine = () => {
  const data = [];

  for (var i = 0; i < 15; i++) {
    data[i] = {
      name: "Semaine " + (i + 20),
      nbSeances: getRandomInt(4)
    };
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 7]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="nbSeances" name="Nombre de séances" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraphiqueSeancesParSemaine;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
