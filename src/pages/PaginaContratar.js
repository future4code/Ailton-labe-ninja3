import React, { Component } from "react";
import Header from "../components/Header/Header";
export default class PaginaContratar extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          PaginaContratar
          <button onClick={this.props.irPaginaHome}>Voltar</button>
        </main>
        <footer></footer>
      </div>
    );
  }
}
