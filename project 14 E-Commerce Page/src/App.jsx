import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import SingleProducts from './components/SingleProductPage'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />}
        />
        <Route path='/products/:id' element={<SingleProducts />} />
      </Routes>
      
    </div>
  )
}

export default App
