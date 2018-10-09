import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

const TableauMuscles = ({ muscles }) => {
  return (
    <div>
      <h4>Muscles</h4>
      <table className="table-bordered table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
          </tr>
        </thead>
        <tbody>
          {muscles.length > 0 && muscles != null ? (
            muscles.map(muscles => {
              return (
                <tr>
                  <td>{muscles.id}</td>
                  <td>{muscles.nom}</td>
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

export default TableauMuscles;
