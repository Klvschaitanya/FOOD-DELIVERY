import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart, useDispatchcart } from '../components/ContextReducer';
export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchcart();
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center text-light fs-3'>The Cart is Empty!</div>
      </div>
    )
  }
  const handleRemove = (index)=>{
    console.log(index)
    dispatch({type:"REMOVE",index:index})
  }

  // const handleCheckOut = async () => {
  //   let userEmail = localStorage.getItem("userEmail");
  //   // console.log(data,localStorage.getItem("userEmail"),new Date())
  //   let response = await fetch("http://localhost:5000/api/orderData", {
  //     // credentials: 'include',
  //     // Origin:"http://localhost:3000/login",
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       order_data: data,
  //       email: userEmail,
  //       order_date: new Date().toDateString()
  //     })
  //   });
  //   console.log("JSON RESPONSE:::::", response.status)
  //   if (response.status === 200) {
  //     dispatch({ type: "DROP" })
  //   }
  // }

  const handleCheckout = async () => {
    let userEmail = localStorage.getItem("userEmail");
  
    // Check if userEmail exists
    if (!userEmail) {
      console.error("No user email found in localStorage");
      return;
    }
  
    try {
      let response = await fetch("http://localhost:5000/api/OrderData", {
        method: 'POST',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({
          order_data: data,  // Ensure 'data' is correctly defined
          email: userEmail,
      
        }),
      });
  
      if (response.ok) {
        // If the response status is 200 (or any other successful status)
        dispatch({ type: "DROP" });
        // console.log("Order submitted successfully");
      } else {
        // Handle non-200 response
        const errorData = await response.json();
        console.error("Failed to submit order:", errorData.error);
      }
    } catch (error) {
      // Handle network errors, fetch issues, etc.
      console.error("Error occurred during checkout:", error.message);
    }
  };
  

  let totalPrice = data.reduce((total, food) => total + parseInt(food.price), 0)
  return (
    <div>

      {/* {console.log(data)} */}
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td ><button type="button" className="btn p-0"><DeleteIcon onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='text-light fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckout} > Check Out </button>
        </div>
      </div>



    </div>
  )
}