import React, { Component } from "react";
import Header from "../components/Header/Header";
import axios from "axios";
import {baseURL} from '../constants/urls';
import Card from '../components/Card/Card'

export default class PaginaPrestador extends Component {
  getAllJobs = () => {
    axios.get(`${baseURL}/jobs`, {
      headers: {
        Authorization:"e537021a-ccc6-4427-a00f-e0a8e2d88c59"
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

  componentDidMount() {
    this.getAllJobs()
  }
  render() {
    return (
      <div>
        <Header />
        <main>
     

          <h1>Cadastre o seu serviço</h1>
        <Card/>
          <button onClick={this.props.irPaginaHome}>Voltar</button>
        </main>
      </div>
    );
  }
}
