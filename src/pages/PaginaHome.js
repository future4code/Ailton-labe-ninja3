import React, { Component } from "react";
import styled from "styled-components";
import background from "../components/background.jpg";

export default class PaginaHome extends Component {
  render() {
    return (
      <Conteudo>
        <H1>LABENINJAS</H1>
        <TextoApresentacao>
          Nossa missão: tornar a conexão entre contratantes e prestadores de
          serviço mais ágil e eficiente. Nossa visão: tornarmo-nos a maior
          plataforma de conexões profissionais do país! Caso você tenha um
          trabalho que precisa ser realizado, aqui poderá encontrar os melhores
          profissionais, verdadeiros ninjas de seus ramos! Caso você esteja
          buscando atuar como prestador de serviços, aqui encontrará as
          oportunidades perfeitas para demonstrar suas habilidades (e ter ótimos
          retornos)! Venha, mostre seu potencial, amplie seu networking e faça
          parte dessa rede brasileira de ninjas!
        </TextoApresentacao>
        <Botoes>
          <button className="botao" onClick={this.props.irPaginaPrestador}>
            QUERO SER UM NINJA
          </button>
          <button className="botao" onClick={this.props.irPaginaContratar}>
            CONTRATAR UM NINJA
          </button>
        </Botoes>
      </Conteudo>
    );
  }
}
const Conteudo = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  align-content: center;
`;
const TextoApresentacao = styled.div`
  width: 600px;
  color: white;
  text-align: center;
  margin-top: 15%;
  margin-left: 4%;
`;

const H1 = styled.h3`
  color: white;
  margin-left: 18%;
`;
const Botoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 1%;
  margin-left: 12%;
`;
