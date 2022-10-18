import { useParams } from "react-router-dom";
import styled from "styled-components";
import usePetition from "../hooks/usePetition";
import CriptoHistorial from "./info/CriptoHistorial";
import CriptoInfo from "./info/CriptoInfo";

const Div = styled.div`
    display:grid;
    grid-template-columns: 480px 1fr;
    gap:2rem;
    position:relative;
    padding:3rem;
    
`

const CriptoPage = () => {

    const API_URL = import.meta.env.VITE_API_URL
    const params = useParams()
    
    const cripto = usePetition(`assets/${params.id}`)
    const history = usePetition(`assets/${params.id}/history?interval=d1`)

    return (
        <Div>
            { cripto && <CriptoInfo cripto={cripto}/> }
            { history && <CriptoHistorial history={history}/> }
        </Div>
    );
}

export default CriptoPage;
