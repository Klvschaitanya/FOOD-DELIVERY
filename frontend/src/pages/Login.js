import React, { useState } from 'react'
import { Await, Link, Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const [details, setDetails] = useState({

    email: "",
    password: "",

  })

  const changeHandler = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  const submithandler = async (e) => {

    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(details.email)) {

      alert("Please enter a valid email address.");
    }
    else {

      const response = await fetch("http://localhost:5000/api/login",
        {
          method: 'POST',
          headers: { 'content-Type': "application/json" },
          body: JSON.stringify({

            email: details.email,
            password: details.password,

          })
        } 
      );

      const json = await response.json();

      if (response.ok) {
        localStorage.setItem("userEmail",details.email);
       localStorage.setItem("authToken",json.authToken);
      //  console.log(localStorage.getItem("authToken"))
        navigate('/');
      }
      else {
        alert("Email or password is incorrect")
      }

    }

  }



  return (


    <>
      <div className='container'>
        <form onSubmit={submithandler}>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" name='email' value={details.email} onChange={changeHandler} />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={details.password} onChange={changeHandler} />
          </div>


          <button type="submit" className="m-3 btn btn-primary">Submit</button>
          <Link to='/signup' className='m-3 btn'><span style={{ color:"SlateBlue" }}>Register Now</span></Link>
        </form>
      </div>

    </>
  )

}


export default Login
