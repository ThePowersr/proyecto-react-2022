import React from 'react';
import styled, { css } from 'styled-components';
import formatter from '../../helpers/price';

const Div = styled.div`
    grid-column-start: 2;
    margin-left:15rem;
`
const Equals = css`
    padding: 1rem;
    border-collapse: collapse;
    text-align:left;
`
const Th = styled.th`
    ${Equals}
`
const Td = styled.td`
    ${Equals}
`
const Tr = styled.tr`
    border-bottom: 1px solid rgba(128, 128, 128, 0.34);
`
const Tbody = styled.tbody`
    ${Tr}:nth-child(odd) {
        background: rgba(255, 255, 255, 0.04);
        border-radius: 8px;
    }
`


const CriptoHistorial = ({ history }) => {
    return (
        <Div>
            <table>
                <thead>
                    <Tr>
                        <Th>Fecha</Th>
                        <Th>Precio</Th>
                    </Tr>
                </thead>
                <Tbody>
                    {
                        history.reverse().map(({date, priceUsd, time}) => (
                            <Tr key={time}>
                                <Td style={{color:"#4FFF60"}}>{new Date(date).toDateString()}</Td>
                                <Td>{formatter.format(priceUsd)}</Td>
                            </Tr>
                        ))
                    }
                </Tbody>
            </table>
        </Div>
    );
}

export default CriptoHistorial;
