import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { routes } from './utils/routes'
import Home from './Routes/Home'
import Products from './Routes/Products'
import Recomendations from './Routes/Recomendations'
import Footer from './Components/Footer'
import Carrito from './Routes/Carrito'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={routes.home} element={<Products/>}/>
        <Route path={routes.carrito} element={<Carrito/>}/>
        <Route path={routes.recomendations} element={<Recomendations/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
