import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
    let path = window.location.pathname;
    path = path.replace("/", "");
    path = path == "" ? "Accueil" : path;

    this.state = {
      activeItem: path,
      items: [
        { path: "/", name: "Accueil" },
        { path: "/Seances", name: "Seances" },
        { path: "/Suivi", name: "Suivi" },
        { path: "/Gestion", name: "Gestion" }
      ]
    };
  }

  render() {
    return (
      <Navbar staticTop collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <img src="images/logo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav activeKey={this.state.activeItem}>
            {this.state.items.map(item => {
              return (
                <NavItem key={item.name} href={item.path} eventKey={item.name}>
                  {item.name}
                </NavItem>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
