import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'


const SignUp = () => {
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: "",
        location: ""
    })

    const changeHandler = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }

    const submithandler = async (e) => {
        e.preventDefault();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (details.name.length < 5 || details.password.length < 5) {
            alert("Name or Password length should be minimum 5")
        }else if(!emailPattern.test(details.email)){

            alert("Please enter a valid email address.");
        }
        else {
           
            const response = await fetch("http://localhost:5000/api/signup",
                {
                    method: 'POST',
                    headers: { 'content-Type': "application/json" },
                    body: JSON.stringify({
                        name: details.name,
                        email: details.email,
                        password: details.password,
                        location: details.location
                    })
                }
            );

            if (response.ok) {
                alert("Account Created");
                navigate('/login')
            }


        }

    }

    return (
        <>
            <div className='container'>
                <form onSubmit={submithandler}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={details.name} onChange={changeHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" name='email' value={details.email} onChange={changeHandler} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' value={details.password} onChange={changeHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" name='location' value={details.location} onChange={changeHandler} />
                    </div>

                    <button type="submit" className="m-3 btn btn-primary">Submit</button>
                    <Link to='/login' className='m-3 btn'>Already a User? <span style={{ color: "lightsteelblue" }}>Login Now</span></Link>
                </form>
            </div>
        </>
    )
}

export default SignUp
