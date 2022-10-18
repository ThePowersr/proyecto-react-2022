import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import formatter from '../helpers/price';

const Div = styled.div`
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    padding: 1rem;
    transition: all .25s;
    :hover {
        background: rgba(255, 255, 255, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.4);
        box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.35);
    }
`

const CriptosMonedas = ({ name, priceUsd, symbol, changePercent24Hr, id}) => {

    return (
        <Div>
            <Link style={{color:"white", textDecoration:"none"}} to={`/criptomonedas/${id}`}><h2>{name}</h2></Link>
            
            <div style={{color: "#D2D2D5"}}>
                <p><span style={{color:'coral', fontWeight:'bold'}}>Precio: </span>{formatter.format(priceUsd)}</p>
                <p><span style={{color:'coral', fontWeight:'bold'}}>Código: </span>{symbol}</p>
                <p>
                    <span style={{color:'coral', fontWeight:'bold'}}>
                        Variación:  
                    </span>
                    <span style={ {color: parseFloat(changePercent24Hr) > 0 ? "greenyellow" : "red" } }>
                        { parseFloat(changePercent24Hr).toFixed(3) }%
                    </span>
                </p>
            </div>
            
        </Div>
    );
}

export default CriptosMonedas;
