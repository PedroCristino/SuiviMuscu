import React, { Component } from "react";
import GraphiqueSuiviPoids from "./GraphiqueSuiviPoids";
import GraphiqueSeancesParSemaine from "./GraphiqueSeancesParSemaine";
import TableauPerformances from "./TableauPerformances";
import { Grid, Row, Col } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={5} mdOffset={1}>
            <h2>Evolution du poids</h2>
            <GraphiqueSuiviPoids />
          </Col>
          <Col md={5}>
            <h2>Performances</h2>
            <TableauPerformances />
          </Col>
        </Row>
        <Row>
          <Col md={10} mdOffset={1}>
            <h2>Nombre de séances les 15 dernières semaines</h2>
            <GraphiqueSeancesParSemaine />
          </Col>
        </Row>
      </Grid>
    );
  }
}
