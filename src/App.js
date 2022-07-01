import React from 'react'
import './App.css'
import PaginaContratar from './pages/PaginaContratar'
import PaginaHome from './pages/PaginaHome'
import PaginaPrestador from './pages/PaginaPrestador'
import CartCard from './components/CartCard/CartCard'
import axios from "axios";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import PaginaCarrinho from './pages/PaginaCarrinho'
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import PaginaDetalhes from './pages/PaginaDetalhes'


class App extends React.Component {
  state = {
    telaAtual: "paginaInicial",
    carrinho: [],
    job: []
  };

  adicionaItensCarrinho = (user) => {
    const addTrabalhos = [...this.state.job]
    const novoArray = addTrabalhos.filter((itens) => {
      const res = itens.id === user
      return res
    })
    const novoCarrinho = [...this.state.carrinho, ...novoArray]
    this.setState({carrinho: novoCarrinho})
    
  }

  getAllJobs = () => {
    axios
      .get("https://labeninjas.herokuapp.com/jobs", {
        headers: {
          Authorization: "e537021a-ccc6-4427-a00f-e0a8e2d88c59",
        },
      })
      .then((response) => {
        this.setState({
          job: response.data.jobs,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  escolheTela = () => {
    switch(this.state.telaAtual){
      case 'paginaInicial':
        return <PaginaHome irPaginaHome={this.irPaginaHome} irPaginaContratar={this.irPaginaContratar} irPaginaPrestador={this.irPaginaPrestador}/> 
      case 'paginaContratar':
        return <PaginaContratar irPaginaDetalhes={this.irPaginaDetalhes} irPaginaHome={this.irPaginaHome} 
        adicionaItensCarrinho={this.adicionaItensCarrinho}
        getAllJobs={this.getAllJobs} 
        job={this.state.job}/>
      case 'paginaPrestador':
        return <PaginaPrestador irPaginaHome={this.irPaginaHome} />
      case 'paginaCarrinho':
        return <PaginaCarrinho carrinho={this.state.carrinho} />
      case 'paginaDetalhes':
        return <PaginaDetalhes  />
      default:
        return (
          <PaginaHome
            irPaginaContratar={this.irPaginaContratar}
            irPaginaPrestador={this.irPaginaPrestador}
          />
        );
    }
  };

  irPaginaContratar = () => {
    this.setState({ telaAtual: "paginaContratar" });
  };

  irPaginaPrestador = () => {
    this.setState({ telaAtual: "paginaPrestador" });
  };

  irPaginaHome = () => {
    this.setState({ telaAtual: "paginaInicial" });
  };

  irPaginaCarrinho = () => {
    this.setState({ telaAtual: "paginaCarrinho" });
  };

  irPaginaDetalhes = () => {
    this.setState({ telaAtual: "paginaDetalhes" });
  };

  render() {
    return (
      <div>
         <Header irPaginaHome={this.irPaginaHome} irPaginaCarrinho={this.irPaginaCarrinho}/>
         {this.escolheTela()}
         <Footer/>
      </div>

    )
  }
}

export default App;
