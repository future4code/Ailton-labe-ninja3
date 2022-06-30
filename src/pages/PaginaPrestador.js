import React, { Component } from "react";
import Header from "../components/Header/Header";
import axios from "axios";

export default class PaginaPrestador extends Component {
  state = {
    cargo: "",
    descricao: "",
    preco: "",
    pagamento: "",
    data: ""
  }

  postJobs = () => {
    const body = {
      title: this.state.cargo,
      description: this.state.descricao,
      price: this.state.preco,
      paymentMethods: this.state.pagamento,
      dueDate: this.state.data
    }

    axios.post(`https://labeninjas.herokuapp.com/jobs`, body, {
      headers: {
        Authorization: "e537021a-ccc6-4427-a00f-e0a8e2d88c59"
      }
    }
    )
      .then((response) => {
        console.log(response)
          ;
      })
      .catch((error) => {
        console.log(error);
      });
  };


  pegaValorCargo = (event) => {
    this.setState({
      cargo: event.target.value
    })
  }

  pegaValorDescricao = (event) => {
    this.setState({
      descricao: event.target.value
    })
  }

  pegaValorPreco = (event) => {
    this.setState({
      preco: event.target.value
    })
  }

  pegaValorPagamento = (event) => {
    this.setState({
      pagamento: event.target.value
    })
  }

  pegaValorData = (event) => {
    this.setState({
      data: event.target.value
    })
  }

render() {

  return (
    <div>
      <main>

        <h1>Cadastre o seu serviço</h1>
        <div>

          <input value={this.state.cargo}
            onChange={this.pegaValorCargo}
            placeholder="Cargo" />

          <input value={this.state.descricao}
            onChange={this.pegaValorDescricao}
            placeholder="Descrição" />

          <input value={this.state.preco}
            onChange={this.pegaValorPreco}
            placeholder="Valor" />

          <select value={this.state.pagamento}
            onChange={this.pegaValorPagamento}>
            <option value="Cartão de Crédito">Cartão de Crédito</option>
            <option value="Cartão de Débito">Cartão de Débito</option>
            <option value="Pix">Pix</option>
            <option value="PayPal">PayPal</option>
            <option value="Boleto">Boleto</option>
          </select>

          <input
            value={this.state.data}
            onChange={this.pegaValorData}
            type="date" />

          <button onClick={this.postJobs} type="submit">Enviar</button>


        </div>
        <button onClick={this.props.irPaginaHome}>Voltar</button>
      </main>
    </div>
  );
}
}
