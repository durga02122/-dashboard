import React from 'react'
import './App.css'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Dashboard from './Pages/Dashboard'
import About from './Pages/About'
import Analytics from './Pages/Analytics'
import Comment from './Pages/Comment'
import Products from './Pages/Products'
import ProductList from './Pages/ProductList'


const App = () => {
  return (
   
   <BrowserRouter>
   <Sidebar>
   <Routes>
    <Route path='/'element={<Dashboard/>} />
    <Route path='/dashboard'element={<Dashboard/>} />
    <Route path='/about'element={<About/>} />
    <Route path='/analytics'element={<Analytics/>} />
    <Route path='/Comment'element={<Comment/>} />
    <Route path='/products'element={<Products/>} />
    <Route path='/productlist'element={<ProductList/>} />

   </Routes>
   </Sidebar>
  
   </BrowserRouter>
  )
}

export default App
