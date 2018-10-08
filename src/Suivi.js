import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap"


export default class Suivi extends Component {
    render(){
        return (<Grid>
            <Row className="show-grid">
              <Col md={10} xsOffset={1}>
                <h2 class="titlePage">Suivi</h2>
              </Col>
            </Row>
            </Grid>)
    }
}
