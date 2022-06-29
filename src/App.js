import React from 'react'
import './App.css'
import PaginaContratar from './pages/PaginaContratar'
import PaginaHome from './pages/PaginaHome'
import PaginaPrestador from './pages/PaginaPrestador'
import CartCard from './components/CartCard/CartCard'

class App extends React.Component {
  state = {
    telaAtual: 'paginaInicial';
    cart: []
  }

  escolheTela = () => {
    switch(this.state.telaAtual){
      case 'paginaInicial':
        return <PaginaHome irPaginaContratar={this.irPaginaContratar} irPaginaPrestador={this.irPaginaPrestador}/> 
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

  addToCart = (job) => {
    const newCart = [...this.state.cart, job]
    this.setState({cart: newCart})
    alert(`O serviço ${job.title} foi adicionado ao carrinho`)
  }

  removeFromCart = (id) => {
    const canDelete = window.confirm("Tem certeza que deseja remover este produto?")
    if (canDelete){
      const newCart = this.state.cart.filter((cartItem) => {
        return cartItem.id !== id
      })
      this.setState({cart: newCart})
    }
  }

  clearCart = () => {
    this.setState({cart: []})
    alert("Obrigada por comprar com a gente!")
  }


  render() {
    return (
      <div>
         {this.escolheTela()}
      </div>
    )
  }
}

export default App;