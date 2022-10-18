import React from 'react';
import formatter from '../../helpers/price';
import styled from 'styled-components';

const Div = styled.div`
    position: fixed;
    margin-left:5rem;
`
const MainInfo = styled.div`
    margin-bottom:2rem;
`
const Symbol = styled.span`
    color: rgba(255, 255, 255, 0.5);
`
const Details = styled.div`
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius:8px;
    padding:1.5rem;
    padding-left:2rem;
`
const Li = styled.li`
    margin-bottom:1rem;
`

const CriptoInfo = ({ cripto }) => {
    return (
        <Div>
            <MainInfo>
                <span> Ranking: {cripto.rank}</span>
                <h1>{cripto.name}</h1>
                <Symbol>{cripto.symbol}</Symbol>
            </MainInfo>
            <Details>
                <ul>
                    <Li>
                        <span>Precio:</span>
                        <span> {formatter.format(cripto.priceUsd)}</span>
                    </Li>
                    <Li>
                        <span>MaxSupply:</span>
                        <span> {formatter.format(cripto.maxSupply)}</span>
                    </Li>
                    <Li>
                        <span>Market Cap (USD):</span>
                        <span> {formatter.format(cripto.marketCapUsd)}</span>
                    </Li>
                    <Li>
                        <span>Volumen (USD - 24 Hrs.):</span>
                        <span> {formatter.format(cripto.volumeUsd24Hr)}</span>
                    </Li>
                    <Li>
                        <span>Variación (24 Hrs.):</span>
                        <span>{formatter.format(cripto.changePercent24Hr)}</span>
                    </Li>
                    <Li>
                        <span>Vwap 24 Hrs.:</span>
                        <span>{formatter.format(cripto.vwap24Hr)}</span>
                    </Li>
                </ul>
            </Details>
        </Div>
    );
}

export default CriptoInfo;
