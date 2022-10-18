import {useEffect, useState} from 'react';
import axios from 'axios';
import CriptosMonedas from './CriptosMonedas';
import styled from 'styled-components';

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.5rem;
`

function Cuadricula() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState();

  useEffect(() => {
    axios.get(`${API_URL}assets`)
     //.then((resp) => resp.json()) con axios ya no es necesacio el .then(resp)
     .then((data) => {
        setCriptos(data.data.data)
     })
     .catch(() => {
      console.error('La petición fallo')
     })
  }, []);

  if(!criptos) return <span style={{width:'100vw'}}>Cargando...</span>

  return (
    <div style={{padding:"2rem"}}>
      <h1 style={{paddingLeft:'20px', paddingBottom:"2rem"}}>Lista de criptomonedas</h1>

      <Div>
        { 
          criptos.map(({name, priceUsd, id, symbol, changePercent24Hr}) => (
          <CriptosMonedas 
            key={id} 
            name={name} 
            priceUsd={priceUsd} 
            symbol={symbol} 
            changePercent24Hr={changePercent24Hr}
            id={id}
          >
            Nombre: {name} Precio: {priceUsd}
          </CriptosMonedas>
        )) }
      </Div>
    </div>
  )
}

export default Cuadricula
