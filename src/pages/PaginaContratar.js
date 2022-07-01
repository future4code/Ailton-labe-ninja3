import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

export default class PaginaContratar extends Component {
  state = {
    filtroMinimo: "",
    filtroMaximo: "",
    filtroNome: ""
  }

  componentDidMount() {
    this.props.getAllJobs();
  }

  pegaValorFiltroMin = (event) => {
    this.setState({
      filtroMinimo: event.target.value
    })
  }

  pegaValorFiltroMax = (event) => {
    this.setState({
      filtroMaximo: event.target.value
    })
  }

  pegaValorFiltroNome = (event) => {
    this.setState({
      filtroNome: event.target.value
    })
  }

  render() {
    const mostraJobs = this.props.job.map((trabalho) => {
      return (
        <DivCard key={trabalho.id}>
          <p>{trabalho.title}</p>
          <p>{trabalho.price}</p>
          <p>{trabalho.dueDate}</p>

          <button onClick={this.props.irPaginaDetalhes}>Ver detalhes</button>
          <button onClick={() => this.props.adicionaItensCarrinho(trabalho.id)}>Adicionar ao carrinho</button>
        </DivCard>
      );
    });


    return (
      <div>
        <input placeholder="Valor Mínimo"></input>
        <input placeholder="Valor Máximo"></input>
        <input placeholder="Busca por título ou descrição"></input>
        <select>
          <option>Sem Ordenação</option>
          <option>Menor Valor</option>
          <option>Maior Valor</option>
          <option>Título</option>
          <option>Prazo</option>
        </select>
        <TodosCards>{mostraJobs}</TodosCards>
        <button className="botaoHeader" onClick={this.props.irPaginaHome}>Voltar</button>
      </div>
    );
  }
}

const TodosCards = styled.div`
  display: flex;
  flex-wrap: wrap ;
  justify-content: center;
  gap: 12px;
`;

const DivCard = styled.div`
  border: 1px solid #264653;
  font-size: 24px;
  padding: 4px;
  height: 200px;
  width: 250px;
  background-color: lightgrey;
`;
