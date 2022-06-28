import React, { Component } from "react";

export default class PaginaHome extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.irPaginaPrestador}>QUERO SER UM NINJA</button>
        <button onClick={this.props.irPaginaContratar}>CONTRATAR UM NINJA</button>
      </div>
    );
  }
}
