import { NavLink } from "react-router-dom"
import styled from "styled-components"

const Navi = styled.nav`
    margin-bottom:2rem;
    border-bottom: 1px solid rgb( 128, 128, 128, 0.38);
    padding:1rem;
    margin:1rem;
`

const Ul = styled.ul`
    display:flex;
`

const Li = styled.li`
    list-style: none;
    margin-right:2rem;
`

const Menu = () =>{
    return (
        <Navi>
            <Ul>
                <Li ><NavLink style={{color:"white", textDecoration:"none"}} to="/">Inicio</NavLink></Li>
                <Li ><NavLink style={{color:"white", textDecoration:"none"}} to="/criptomonedas">Lista de Criptos</NavLink></Li>
            </Ul>
        </Navi>
    )
}

export default Menu