import React, { Component } from "react";
import Header from '../components/Header/Header'

export default class PaginaHome extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <button onClick={this.props.irPaginaPrestador}>
            QUERO SER UM NINJA
          </button>
          <button onClick={this.props.irPaginaContratar}>
            CONTRATAR UM NINJA
          </button>
        </main>
        
        <footer>

        </footer>
      </div>
    );
  }
}
