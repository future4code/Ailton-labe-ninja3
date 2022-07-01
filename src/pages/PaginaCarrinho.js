import React, { Component } from 'react'

export default class PaginaCarrinho extends Component {
  render() {
    const carrinho = this.props.carrinho.map((job) => {
      return <div key={job.id}>
        <p>{job.title}</p>
        <p>{job.price}</p>
      </div>
    })
    return (
      <div>
        <button>
            Finalizar Compra
        </button>
        {carrinho}
        <button onClick={this.props.irPaginaContratar}>
            Voltar para a Lista
        </button>
      </div>
    )
  }
}
