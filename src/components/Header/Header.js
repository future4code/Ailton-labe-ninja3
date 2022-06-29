import React from 'react'
import { HeaderContainer } from "./styled"


const Header = () => {
    return (
        <HeaderContainer>
            <h2>LabeNinjas</h2>
            <div>
                <button >Home</button>
                <button >Carrinho</button>
            </div>
        </HeaderContainer>
    )
}

export default Header