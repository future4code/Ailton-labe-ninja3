import React, { Component } from "react";
import Header from "../components/Header/Header";
import axios from "axios";
import styled from "styled-components";
import { findByLabelText } from "@testing-library/react";

export default class PaginaContratar extends Component {

  state = {
    job: []
  }

  getAllJobs = () => {
    axios.get("https://labeninjas.herokuapp.com/jobs",
      {
        headers: {
          Authorization: "e537021a-ccc6-4427-a00f-e0a8e2d88c59"
        }
      }
    )
      .then((response) => {
        this.setState({
          job: response.data.jobs
        })
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  componentDidMount() {
    this.getAllJobs()
  }

  render() {
    const mostraJobs = this.state.job.map((trabalho) => {
    return <DivCard key={trabalho.id}>
     <p>{trabalho.title}</p>
     <p>{trabalho.price}</p>
     <p>{trabalho.dueDate}</p>

     <button>Ver detalhes</button>
     <button>Adicionar ao carrinho</button>
    </DivCard>
    })

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
        <button onClick={this.props.irPaginaHome}>Voltar</button>
      </div>
    );
  }
}

const TodosCards = styled.div`
display: flex;
gap: 12px;
`

const DivCard = styled.div`
border: 1px solid #264653;
font-size: 24px;
padding: 4px;
height: 200px;
width: 250px;
background-color: #F4A261;
`