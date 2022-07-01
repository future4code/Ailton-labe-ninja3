import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components"

export default class PaginaPrestador extends Component {
  state = {
    cargo: "",
    descricao: "",
    preco: 0,
    pagamento: [],
    data: "",
  };

  postJobs = () => {
    const body = {
      title: this.state.cargo,
      description: this.state.descricao,
      price: Number(this.state.preco),
      paymentMethods: this.state.pagamento,
      dueDate: this.state.data,
    };

    axios
      .post(`https://labeninjas.herokuapp.com/jobs`, body, {
        headers: {
          Authorization: "e537021a-ccc6-4427-a00f-e0a8e2d88c59",
        },
      })
      .then((response) => {
        alert("Cadastrado com Sucesso");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  pegaValorCargo = (event) => {
    this.setState({ cargo: event.target.value });
  };

  pegaValorDescricao = (event) => {
    this.setState({ descricao: event.target.value });
  };

  pegaValorPreco = (event) => {
    this.setState({ preco: event.target.value });
  };

  pegaValorPagamento = (event) => {
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    this.setState({ pagamento: value });
  };

  pegaValorData = (event) => {
    this.setState({ data: event.target.value });
  };

  render() {
    return (
      <div>
        <CadastroServicos>
          <h1>Cadastre o seu serviço</h1>

          <input
            value={this.state.cargo}
            onChange={this.pegaValorCargo}
            placeholder="Cargo"
          />

          <input
            value={this.state.descricao}
            onChange={this.pegaValorDescricao}
            placeholder="Descrição"
          />

          <input
            value={this.state.preco}
            onChange={this.pegaValorPreco}
            placeholder="Valor"
            type="number"
          />

          <select
            multiple
            value={this.state.pagamento}
            onChange={this.pegaValorPagamento}
          >
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Cartão de Débito">Cartão de Débito</option>
            <option value="Pix">Pix</option>
            <option value="PayPal">PayPal</option>
            <option value="Boleto">Boleto</option>
          </select>

          <input
            value={this.state.data}
            onChange={this.pegaValorData}
            type="date"
          />

          <button className="botaoHeader" onClick={this.postJobs}>Enviar</button>

          <button className="botaoHeader" onClick={this.props.irPaginaHome}>Voltar</button>
        </CadastroServicos>
      </div>
    );
  }

}

const CadastroServicos = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 600px;
gap: 8px;
align-items: center;
`
