import React, { Component } from "react";
import { Grid, Row, Col, Modal, Button } from "react-bootstrap";

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter une séance</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Sauvegarder et fermer</Button>
          </Modal.Footer>
        </Modal>
        <Grid>
          <Row className="show-grid">
            <Col md={10} xsOffset={1}>
              <h2 class="titlePage">
                Dernières séances
                <span
                  className="addButton glyphicon glyphicon-plus-sign"
                  title="Ajouter une séance"
                  onClick={this.handleShow}
                />
              </h2>
              <hr />
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Muscles travaillés</th>
                    <th>Commentaire</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>08/10/2018</td>
                    <td>Jambes, Épaules</td>
                    <td>-</td>
                    <td className="center">
                      <span
                        title="Détail des exercices"
                        className="exercicesList glyphicon glyphicon-th-list"
                      />
                      <span
                        title="Modifier la séance"
                        className="editIcon glyphicon glyphicon-edit"
                      />
                      <span
                        title="Supprimer la séance"
                        className="deleteCross glyphicon glyphicon-remove"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>11/10/2018</td>
                    <td>Pectoraux, Biceps</td>
                    <td>-</td>
                    <td className="center">
                      <span
                        title="Détail des exercices"
                        className="exercicesList glyphicon glyphicon-th-list"
                      />
                      <span
                        title="Modifier la séance"
                        className="editIcon glyphicon glyphicon-edit"
                      />
                      <span
                        title="Supprimer la séance"
                        className="deleteCross glyphicon glyphicon-remove"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>12/10/2018</td>
                    <td>Dos, Triceps</td>
                    <td>-</td>
                    <td className="center">
                      <span
                        title="Détail des exercices"
                        className="exercicesList glyphicon glyphicon-th-list"
                      />
                      <span
                        title="Modifier la séance"
                        className="editIcon glyphicon glyphicon-edit"
                      />
                      <span
                        title="Supprimer la séance"
                        className="deleteCross glyphicon glyphicon-remove"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
