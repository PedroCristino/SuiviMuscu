import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
const TableauPerformances = () => {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Exercice</th>
          <th>Max x 6</th>
          <th>Max x 1</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Développé couché</td>
          <td>70</td>
          <td>85</td>
        </tr>
        <tr>
          <td>Squat</td>
          <td>70</td>
          <td>85</td>
        </tr>
        <tr>
          <td>Rowing</td>
          <td>70</td>
          <td>85</td>
        </tr>
        <tr>
          <td>Développé militaire</td>
          <td>70</td>
          <td>85</td>
        </tr>
        <tr>
          <td>Développé couché haltères</td>
          <td>30</td>
          <td>35</td>
        </tr>
        <tr>
          <td>Tractions</td>
          <td />
          <td>10</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableauPerformances;
