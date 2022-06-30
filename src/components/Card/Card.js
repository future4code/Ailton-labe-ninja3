import React, { Component } from "react";

export default class Card extends Component {

    state = {
        cargo: "",
        descricao: "",
        pagamento: "",
        data: ""
    }

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

                <input value={this.state.cargo}
                onChange={this.state.pegaValorCargo}
                placeholder="Cargo" />

                <input value={this.state.descricao}
                onChange={this.state.pegaValorDescricao}
                placeholder="Descrição *" />

                <input
                value={this.state.pagamento} 
                onChange={this.state.pegaValorPagamento} 
                type="number" />

                <select>
                    <option>Cartão de Crédito</option>
                    <option>Cartão de Débito</option>
                    <option>Pix</option>
                    <option>PayPal</option>
                    <option>Boleto</option>
                </select>
                <input 
                value={this.state.data} 
                onChange={this.state.pegaValorData} 
                type="date" />
                
                <button type="submit">Enviar</button>

            </div>
        )
    }
}
