import React, { Component } from "react";
import Cards from './Cards'

export default class PaginaContratar extends Component {
  render() {
    return (
      <div>
        <div>
          PaginaContratar
          <button onClick={this.props.irPaginaHome}>Voltar</button>
        </div>
        <div>
          <input placeholder="Valor Mínimo" type='number' />
          <input placeholder="Valor Máximo" type='number' />
          <input placeholder="Busca por título ou descrição" type='text' />
          <select>
            <option>Sem Ordenação</option>
            <option>Menor Valor</option>
            <option>Maior Valor</option>
            <option>Título</option>
            <option>Prazo</option>
            </select>
        </div>
        <Cards/>
           
      </div>
    );
  }
}
