import React, { Component } from "react";
import axios from "axios";
import Toto from "./Toto";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      userid: "",
      prenom: "",
      albums: []
    };
  }

  clickButton = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then(response => {
        this.setState({
          albums: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onChangePrenom = (e, data) => {
    console.log(e.target.value);
    this.setState({ prenom: e.target.value, nom: e.target.value });
  };

  render() {
    const { albums, title } = this.state;

    return (
      <div>
        Hello
        <br />
        <button onClick={this.clickButton}>Hello</button>
        <input type="text" onChange={this.onChangePrenom} />
        {this.state.prenom}
        {this.state.nom}
        <table>
          <tbody>
            <tr>
              <td>id</td>
              <td>title</td>
              <td>userId</td>
            </tr>
            {albums.length > 0 && albums != null ? (
              albums.map(album => {
                return <Toto album={album} />;
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
        <Toto prenom={this.state.prenom} nom="ruiz" />
      </div>
    );
  }
}
