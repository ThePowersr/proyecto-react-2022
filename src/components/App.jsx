import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Menu from "./Menu"

const Div = styled.div`
    max-width: 1400px;
    padding: 2rem 0;
    margin: auto;
`

const App = () => {
    return (
        <Div>
            <Menu/>
            <Outlet/>
        </Div>
    )
}

export default App