import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Cards from './Card';
import Modal from '../Modal';
import Cart from '../pages/Carts';

const Navbar = () => {

  const [cartview,setCartview]=useState(false)
  const navigate = useNavigate();
const handleLogout=()=>{
  localStorage.removeItem("authToken");
  navigate('/login')
}

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div className="container-fluid">
    <Link className="navbar-brand fs-3 fst-italic " to="/" style={{ fontFamily:"Georgia",fontWeight:"bolder"}}>F<span style={{color:"darkviolet"}}>O</span>r <span style={{color:"khaki"}}>F</span><span style={{color:"ThreeDShadow"}}>O</span>o<span style={{color:"tomato"}}>d</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link> 
        </li>

        {(localStorage.getItem("authToken"))?<li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/myOrderData">My orders</Link> 
        </li>:""}

        

    
      </ul>
      {(!localStorage.getItem("authToken"))?<div className='d-flex'>
          <Link className="btn bg-light text-success mx-1" to="/login">Login</Link>
          <Link className="btn bg-light text-success mx-1" to="/signup">Signup</Link>
     </div> : <div className='d-flex'>

     <div>
     <div className="btn bg-light text-primary mx-1" onClick={()=>{setCartview(true)}}>My cart {""}
     </div>
     {cartview?<Modal onClose={()=>setCartview(false)}><Cart /></Modal>:null}
      </div>     
     <div>
     <button className="btn bg-light text-danger mx-1" onClick={handleLogout}  >Logout</button>
      </div>

     </div>
     

      }


    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar


