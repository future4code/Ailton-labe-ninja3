import React from 'react'
import './App.css'
import PaginaContratar from './pages/PaginaContratar'
import PaginaHome from './pages/PaginaHome'
import PaginaPrestador from './pages/PaginaPrestador'
import CartCard from './components/CartCard/CartCard'
import axios from "axios";
import Header from "./components/Header/Header"

class App extends React.Component {
  state = {
    telaAtual: 'paginaInicial'
  }

  escolheTela = () => {
    switch(this.state.telaAtual){
      case 'paginaInicial':
        return <PaginaHome irPaginaHome={this.irPaginaHome} irPaginaContratar={this.irPaginaContratar} irPaginaPrestador={this.irPaginaPrestador}/> 
      case 'paginaContratar':
        return <PaginaContratar irPaginaHome={this.irPaginaHome}  />
      case 'paginaPrestador':
        return <PaginaPrestador irPaginaHome={this.irPaginaHome} />
      default:
        return <PaginaHome/> 
    }
  }

  irPaginaContratar = () => {
    this.setState({telaAtual: 'paginaContratar'})
  }

  irPaginaPrestador = () => {
    this.setState({telaAtual: 'paginaPrestador'})
  }

  irPaginaHome = () => {
    this.setState({telaAtual: 'paginaInicial'})
  }


  render() {
    return (
      <div>
         <Header irPaginaHome={this.irPaginaHome}/>
         {this.escolheTela()}
      </div>
    )
  }
}

export default App;