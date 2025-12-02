import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDeatail from './pages/ProductDeatail'
import SignUp from './component/SignUp'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import About from './pages/About'
import Login from './component/shop/Login.jsx'

const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/shop/:id' element={<ProductDeatail/>} />
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/About" element={<About/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App

