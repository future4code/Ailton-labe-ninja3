import React, { Component } from 'react'

export default class PaginaCarrinho extends Component {

  render() {
    const carrinho = this.props.carrinho.map((job) => {
      return <div key={job.id}>
        <p>{job.title}</p>
        <p>{job.price}</p>
      <button onClick={() => {this.props.removerItensCarrinho(job.id)}}>Remover</button>
      </div>
    })
  

    const somaTotal = this.props.carrinho.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual.price, 0)
    
    return (
      <div>
        
        {carrinho}

        {`Valor total: R$ ${somaTotal},00`}
        <button>Finalizar Compra</button>
        <button onClick={this.props.irPaginaContratar}>
          Voltar para a Lista
        </button>
      </div>
    )
  }
}
