import React from 'react'
import { HeaderContainer } from "./styled"
import styled from "styled-components"

class Header extends React.Component {
    render() {
    
    return (
        <HeaderContainer>
            <h1>LabeNinjas</h1>
            <div>
                <button className ="botaoHeader" onClick={this.props.irPaginaHome}>Home</button>
                <button className ="botaoHeader" onClick={this.props.irPaginaCarrinho}>Carrinho</button>
            </div>
        </HeaderContainer>
    )
}
}
export default Header

