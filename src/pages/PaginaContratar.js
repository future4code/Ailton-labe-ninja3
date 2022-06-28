import React, { Component } from 'react'

export default class PaginaContratar extends Component {
  render() {
    return (
      <div>
        PaginaContratar
        <button onClick={this.props.irPaginaHome}>Voltar</button>
      </div>
    )
  }
}
