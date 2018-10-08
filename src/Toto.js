import React, { Component } from "react";

export default class Toto extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.album != null) {
      return (
        <tr>
          <td>{this.props.album.userId}</td>
          <td>{this.props.album.id}</td>
          <td>{this.props.album.title}</td>
        </tr>
      );
    } else {
      return "";
    }
  }
}
