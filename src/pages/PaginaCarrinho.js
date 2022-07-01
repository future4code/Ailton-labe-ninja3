import React, { Component } from 'react'

export default class PaginaCarrinho extends Component {
  render() {
    return (
      <div>
        <button>
            Finalizar Compra
        </button>
        <button onClick={this.props.irPaginaContratar}>
            Voltar para a Lista
        </button>
      </div>
    )
  }
}
