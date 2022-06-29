import React, { Component } from "react";
import Header from "../components/Header/Header";
import axios from "axios";

export default class PaginaContratar extends Component {
  render() {
    return (
      <div>
        <Header />
        PaginaContratar
        <button onClick={this.props.irPaginaHome}>Voltar</button>
      </div>
    );
  }
}
