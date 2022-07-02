import React, { Component } from "react";
import styled from "styled-components";

export default class PaginaCarrinho extends Component {

  finalizarCompra = () => {
    alert("Obrigado por contratar nossos serviços!")
  }

  render() {
    const carrinho = this.props.carrinho.map((job) => {
      return (
        <Servico key={job.id}>
          <p>{job.title}</p>
          <p>{job.price}</p>
          <Botoes
            onClick={() => {
              this.props.removerItensCarrinho(job.id);
            }}
          >
            Remover
          </Botoes>
        </Servico>
      );
    });

    const somaTotal = this.props.carrinho.reduce(
      (valorAnterior, valorAtual) => valorAnterior + valorAtual.price,
      0
    );

    return (
      <Pagina>
        <Titulo>Serviços Selecionados</Titulo>

        <TodosServicos>
          {carrinho}
        </TodosServicos>

        <ContainerTotal>
          <div>
            {`Valor Total: R$ ${somaTotal},00`}
          </div>

          <div>
            <Botoes onClick={this.finalizarCompra}>Finalizar Compra</Botoes>
            <Botoes onClick={this.props.irPaginaContratar}>
              Voltar para a Lista
            </Botoes>
          </div>
        </ContainerTotal>


      </Pagina>
    );
  }
}

const Pagina = styled.div `
  text-align: center;
  height: 60vh;
`
const Titulo = styled.h2 `
  margin: 16px;
`
const TodosServicos = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Servico = styled.div `
  border: 1px solid black;
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin: 8px;
`;

const ContainerTotal = styled.div `
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 15px auto;
`;

const Botoes = styled.button `
  padding: 5px;
  border-radius: 8px;
  border: none;
  background-color: orange;
  color: white;
  margin-right: 3px;
  :hover {
    background-color: #f4a361a8;
    cursor: pointer;
  }
`;