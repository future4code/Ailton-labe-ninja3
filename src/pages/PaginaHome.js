import React, { Component } from "react";
import Footer from "../components/Footer/Footer";

export default class PaginaHome extends Component {
  render() {
    return (
      <div>
        <main>
          <button onClick={this.props.irPaginaPrestador}>
            QUERO SER UM NINJA
          </button>
          <button onClick={this.props.irPaginaContratar}>
            CONTRATAR UM NINJA
          </button>
        </main>
        <Footer />
      </div>
    );
  }
}
