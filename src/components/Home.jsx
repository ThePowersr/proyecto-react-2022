import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
    text-align: center;
    padding-top:17rem;
`
const Button = styled(Link)`
    background: white;
    text-decoration:none;
    color:darkblue;
    padding:1rem;
    border-radius:8px;
`
const P = styled.p`
    margin-bottom:2rem;
    opacity: 0.5;
`

const Home = () => {
    return (
        <div>
        <Div>
            <h1 style={{marginBottom:"2rem"}}>Bienvenido a EDmarket</h1>     
            <P>Cónoce las 100 criptos más usadas</P>
            <Button to="criptomonedas">Ver Criptomonedas</Button>
        </Div>
        </div>
    );
}

export default Home;
