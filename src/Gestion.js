import React, { Component } from "react";
import axios from "axios";
import { Grid, Row, Col } from "react-bootstrap";

export default class Gestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      utilisateurs: "",
      muscles: "",
      exercices: ""
    };

    axios
      .get("http://localhost:3000/json/utilisateurs.json")
      .then(response => {
        this.setState({
          utilisateurs: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("http://localhost:3000/json/muscles.json")
      .then(response => {
        this.setState({
          muscles: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("http://localhost:3000/json/exercices.json")
      .then(response => {
        this.setState({
          exercices: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { utilisateurs, muscles, exercices } = this.state;
    console.log(utilisateurs);
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={10} xsOffset={1}>
            <h2 className="titlePage">Gestion des données</h2>
            <hr />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={4}>
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
                {utilisateurs.length > 0 && utilisateurs != null ? (
                  utilisateurs.map(utilisateurs => {
                    return (
                      <tr>
                        <td>{utilisateurs.id}</td>
                        <td>{utilisateurs.prenom}</td>
                        <td>{utilisateurs.nom}</td>
                        <td>{utilisateurs.login}</td>
                        <td>{utilisateurs.password}</td>
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
          </Col>
          <Col md={4}>
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
          </Col>
          <Col md={4}>
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
                        <td>{exercices.MuscleId}</td>
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
          </Col>
        </Row>
      </Grid>
    );
  }
}
