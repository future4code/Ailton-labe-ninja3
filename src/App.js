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


class App extends React.Component {
  state = {
    telaAtual: "paginaInicial",
  };

  escolheTela = () => {
    switch(this.state.telaAtual){
      case 'paginaInicial':
        return <PaginaHome irPaginaHome={this.irPaginaHome} irPaginaContratar={this.irPaginaContratar} irPaginaPrestador={this.irPaginaPrestador}/> 
      case 'paginaContratar':
        return <PaginaContratar irPaginaHome={this.irPaginaHome}  />
      case 'paginaPrestador':
        return <PaginaPrestador irPaginaHome={this.irPaginaHome} />
      case 'paginaCarrinho':
        return <PaginaCarrinho />
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
