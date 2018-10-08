import React, { Component } from "react";
import {Navbar, Nav, NavItem, NavDropdown,MenuItem} from "react-bootstrap"

export default class Header extends Component {


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
    <Nav>
      <NavItem href="/">
        Accueil
      </NavItem>
      <NavItem href="/Seance">
        Séances
      </NavItem>
      <NavItem href="/Suivi">
        Suivi
      </NavItem>
      <NavItem href="/Gestion">
        Gestion
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem href="About">
        About
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}
