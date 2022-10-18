import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cuadricula from './components/Cuadricula'
import App from './components/App'
import Menu from './components/Menu'
import Home from './components/Home'
import CriptoPage from './components/CriptoPage'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<Home/>}/>
            </Route>
            <Route path='/criptomonedas' element={<App/>} >
                <Route index element={<Cuadricula/>}/>
                <Route path=':id' element={<CriptoPage/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
)
