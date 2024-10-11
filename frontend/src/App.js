import React from 'react'
import Home from './pages/Home'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import CartProvider from './components/ContextReducer'
import MYORders from "./pages/MyOrder"


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
  <div>
  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/login' element={<Login />} />
    <Route exact path='/signup' element={<SignUp />} />
    <Route exact path='/myOrderData' element={<MYORders />}/>
  </Routes>
  </div>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App

