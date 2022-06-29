import React, { Component } from "react";
import Header from "../components/Header/Header";
export default class PaginaPrestador extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main>
          <h1>Cadastre o seu serviço</h1>
          <input placeholder="Titulo *" />
          <input placeholder="Descrição *" />
          <input type="number" />
          <select>
            <option>Cartão de Crédito</option>
            <option>Cartão de Débito</option>
            <option>Pix</option>
            <option>PayPal</option>
            <option>Boleto</option>
          </select>
          <input type="date" />
          <button onClick={this.props.irPaginaHome}>Voltar</button>
        </main>
      </div>
    );
  }
}
