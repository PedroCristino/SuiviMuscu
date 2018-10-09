import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

const TableauUtilisateurs = ({ utilisateurs }) => {
  return (
    <div>
      <h4>Utilisateurs</h4>
      <table className="table-bordered table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Prenom</th>
            <th>Nom</th>
            <th>Login</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {utilisateurs.length > 0 && utilisateurs != null
            ? utilisateurs.map(utilisateur => {
                return (
                  <tr key={utilisateur.id}>
                    <td>{utilisateur.id}</td>
                    <td>{utilisateur.prenom}</td>
                    <td>{utilisateur.nom}</td>
                    <td>{utilisateur.login}</td>
                    <td>{utilisateur.password}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default TableauUtilisateurs;
