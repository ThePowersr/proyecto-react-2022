import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}assets`)
     //.then((resp) => resp.json()) con axios ya no es necesacio el .then(resp)
     .then((data) => {
        console.log(data)
        setCriptos(data.data.data)
     })
     .catch(() => {
      console.error('La petición fallo')
     })
  }, []);

  if(!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de criptomonedas</h1>

      <ol>
        { 
          criptos.map(({name, priceUsd, id}) => (
          <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
        )) }
      </ol>
    </>
  )
}

export default App
