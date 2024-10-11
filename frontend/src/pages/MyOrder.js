import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState({ order_data: [] }); // Initialize with an object containing an empty array

    const fetchMyOrder = async () => {
        const userEmail = localStorage.getItem('userEmail');
        await fetch("http://localhost:5000/api/myOrderData", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userEmail
            })
        })
        .then(async (res) => {
            let response = await res.json();
            setOrderData(response.orderData || { order_data: [] }); // Safely update state with response
        })
        .catch((error) => {
            console.error("Error fetching order data:", error);
        });
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='row'>
                    {orderData.order_data.length > 0 ? (
                        orderData.order_data.map((orderArray, index) => (
                            <div key={index}>
                                {orderArray.map((item, idx) => (
                                    <div key={item.id} className='col-12 col-md-6 col-lg-3'>
                                        <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                          
                                            <div className="card-body">
                                                <h5 className="card-title">{item.name}</h5>
                                                <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                    <span className='m-1'>{item.qty}</span>
                                                    <span className='m-1'>{item.size}</span>
                                                    <div className='d-inline ms-2 h-100 w-20 fs-5'>
                                                        ₹{item.price}/-
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <p>No orders found.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
