import React, { Component } from "react";
import styled from "styled-components";

export default class PaginaContratar extends Component {
  state = {
    filtroMinimo: "",
    filtroMaximo: "",
    filtroNome: "",
    filtroOrdem: "",
  };

  componentDidMount() {
    this.props.getAllJobs();
  }

  pegaValorFiltroMin = (event) => {
    this.setState({ filtroMinimo: event.target.value });
  };

  pegaValorFiltroMax = (event) => {
    this.setState({ filtroMaximo: event.target.value });
  };

  pegaValorFiltroNome = (event) => {
    this.setState({ filtroNome: event.target.value });
  };

  pegaValorFiltroOrdem = (event) => {
    this.setState({ filtroOrdem: event.target.value });
  };

  render() {
    const mostraJobs = this.props.job
      .filter((jobs) => {
        return jobs.title
          .toLowerCase()
          .includes(this.state.filtroNome.toLowerCase());
      })
      .filter((jobs) => {
        return (
          this.state.filtroMinimo === "" ||
          jobs.price >= this.state.filtroMinimo
        );
      })
      .filter((jobs) => {
        return (
          this.state.filtroMaximo === "" ||
          jobs.price <= this.state.filtroMaximo
        );
      })
      .sort((jobs1, jobs2) => {
        switch (this.state.filtroOrdem) {
          case "menor":
            return jobs1.price - jobs2.price;
          case "maior":
            return jobs2.price - jobs1.price;
          case "titulo":
            return jobs2.title - jobs1.title;
          case "prazo":
            return jobs1.dueDate - jobs2.dueDate;
          default:
            return jobs1.price - jobs2.price;
        }
      })
      .map((trabalho) => {
        return (
          <DivCard key={trabalho.id}>
            <h3>{trabalho.title}</h3>
            <p>{`Preço: R$ ${trabalho.price},00`}</p>
            <p>{`Prazo: ${this.props.converterData(trabalho.dueDate)}`}</p>

            <Botoes onClick={() => this.props.irPaginaDetalhes(trabalho.id)}>
              Ver detalhes
            </Botoes>
            <Botoes
              onClick={() => this.props.adicionaItensCarrinho(trabalho.id)}
            >
              Adicionar ao carrinho
            </Botoes>
          </DivCard>
        );
      });

    return (
      <div>
        <Pesquisa>
          <Input
            onChange={this.pegaValorFiltroMin}
            value={this.state.filtroMinimo}
            placeholder="Valor Mínimo"
          />
          <Input
            onChange={this.pegaValorFiltroMax}
            value={this.state.filtroMaximo}
            placeholder="Valor Máximo"
          />
          <Input
            onChange={this.pegaValorFiltroNome}
            value={this.state.filtroNome}
            placeholder="Busca por título ou descrição"
          />
          <Select
            onChange={this.pegaValorFiltroOrdem}
            value={this.state.filtroOrdem}
          >
            <option value="menor">Menor Valor</option>
            <option value="maior">Maior Valor</option>
            <option value="titulo">Título</option>
            <option value="prazo">Prazo</option>
          </Select>
        </Pesquisa>
        <TodosCards>{mostraJobs}</TodosCards>
        <button className="botaoHeader" onClick={this.props.irPaginaHome}>
          Voltar
        </button>
      </div>
    );
  }
}

const TodosCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  max-width: 1200px;
  margin: auto;
`;

const DivCard = styled.div`
  border: 1px solid #264653;
  border-radius: 12px;
  font-size: 1.2em;
  text-align: center;
  padding: 4px;
  height: 200px;
  width: 230px;
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const Pesquisa = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
  margin: 16px;
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 8px;
  margin: 16px;
`;
const Botoes = styled.button`
  padding: 5px;
  border-radius: 8px;
  width: 50%;
  background-color: orange;
  color: white;
  border: none;
  cursor: pointer;
  :hover {
    background-color: #f4a361a8;
  }
`;
