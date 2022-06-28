import React, { Component } from 'react'

export default class PaginaPrestador extends Component {
  render() {
    return (
      <div>
        PaginaPrestador
        <button onClick={this.props.irPaginaHome}>Voltar</button>
      </div>
    )
  }
}
