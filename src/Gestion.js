import React, { Component } from "react";
import axios from "axios";
import { Grid, Row, Col } from "react-bootstrap";
import TableauUtilisateurs from "./TableauUtilisateurs";
import TableauMuscles from "./TableauMuscles";
import TableauExercices from "./TableauExercices";

export default class Gestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      utilisateurs: "",
      muscles: "",
      exercices: ""
    };

    axios
      .get("http://localhost:3000/json/data.json")
      .then(response => {
        console.log(response.data);
        this.setState({
          utilisateurs: response.data.utilisateurs,
          muscles: response.data.muscles,
          exercices: response.data.exercices
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
            <TableauUtilisateurs utilisateurs={utilisateurs} />
          </Col>
          <Col md={4}>
            <TableauMuscles muscles={muscles} />
          </Col>
          <Col md={4}>
            <TableauExercices exercices={exercices} />
          </Col>
        </Row>
      </Grid>
    );
  }
}
