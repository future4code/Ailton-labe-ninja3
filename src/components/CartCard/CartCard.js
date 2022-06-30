import React, { Component } from 'react'
import Cartao from "./styled";

export default class CartCard extends Component {
    state = {
        cart: []
      };
    
      addToCart = (job) => {
        const newCart = [...this.state.cart, job];
        this.setState({ cart: newCart });
        alert(`O serviço ${job.title} foi adicionado ao carrinho`);
      };
    
      removeFromCart = (id) => {
        const canDelete = window.confirm(
          "Tem certeza que deseja remover este produto?"
        );
        if (canDelete) {
          const newCart = this.state.cart.filter((cartItem) => {
            return cartItem.id !== id;
          });
          this.setState({ cart: newCart });
        }
      };
    
      clearCart = () => {
        this.setState({ cart: [] });
        alert("Obrigada por comprar com a gente!");
      };
    
  render() {
    return (
        <div>
        <h3></h3>
        <p>R$</p>
        <button>Remover</button>
        </div>
    )
  }
}
