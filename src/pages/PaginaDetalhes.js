import React, { Component } from 'react'
import styled from 'styled-components'

export default class PaginaDetalhes extends Component {

  render() {
    return (
      <Pagina>
        <ContainerInfo>
          <h2>{this.props.detalhes.title}</h2>
          <Paragrafos>{`Preço: R$ ${this.props.detalhes.price},00`}</Paragrafos>
          <Paragrafos>{`Prazo: ${this.props.detalhes.dueDate}`}</Paragrafos>
          <Paragrafos>{this.props.detalhes.description}</Paragrafos>
          <Paragrafos>{this.props.detalhes.paymentMethods}</Paragrafos>
        </ContainerInfo>
        <button onClick={this.props.irPaginaContratar} className='botaoHeader'>Voltar</button>
      </Pagina>
    )
  }
}

const Pagina = styled.div `
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 12px;
`;

const ContainerInfo = styled.div `
  width: 200px;
  margin: 16px auto;  
`;

const Paragrafos = styled.p `
  margin: 12px;
`;

