import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

const TableauExercices = ({ exercices }) => {
  return (
    <div>
      <h4>Exercices</h4>
      <table className="table-bordered table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Libellé</th>
            <th>Muscle principal</th>
          </tr>
        </thead>
        <tbody>
          {exercices.length > 0 && exercices != null ? (
            exercices.map(exercices => {
              return (
                <tr>
                  <td>{exercices.id}</td>
                  <td>{exercices.libelle}</td>
                  <td>{exercices.muscle}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td />
              <td />
              <td />
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default TableauExercices;
