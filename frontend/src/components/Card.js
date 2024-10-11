import React, { useEffect, useRef, useState } from 'react';
import { useDispatchcart, useCart } from './ContextReducer';

const Cards = (props) => {
    let dispatch = useDispatchcart();
    let data = useCart();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");
    const priceRef = useRef();

    // Calculate final price based on qty and size
    let finalPrice = qty * parseInt(options[size] || 0);

    const handleCart = async () => {
        let food = data.find((item) => item.id === props.foodItems._id && item.size === size);
        for (const item of data) {
            if (item.id === props.foodItems._id) {
                food = item;
                break;
            }
        }

        // If the item exists in the cart
        if (food) {
            // If the same size, update quantity and price
            if (food.size == size) {
                await dispatch({
                    type: "UPDATE",
                    id: props.foodItems._id,
                    price: finalPrice,
                    qty: qty
                });
                return;
            } 
            // If different size, add a new item to the cart
            else {
                await dispatch({
                    type: "ADD",
                    id: props.foodItems._id,
                    name: props.foodItems.name,
                    price: finalPrice,
                    qty: qty,
                    size: size
                });
                return;
            }
        } 
        // If the item doesn't exist in the cart, add it
        await dispatch({
            type: "ADD",
            id: props.foodItems._id,
            name: props.foodItems.name,
            price: finalPrice,
            qty: qty,
            size: size
        });
    };

    // Set the initial size when the component mounts
    useEffect(() => {
        setSize(priceRef.current.value);
    }, []);

    return (
        <div>
            <div className="card mt-3 m-2 bg-light" style={{ width: "18rem", maxHeight: "400px" }}>
                <img
                    className="card-img-top"
                    src={props.foodItems.img}
                    alt="Card image cap"
                    height={"200px"}
                    style={{ objectFit: "cover" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItems.name}</h5>

                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-warning' onChange={(e) => setQty(parseInt(e.target.value))}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                        </select>

                        <select className='m-2 h-100 bg-success' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {priceOptions.map((data) => (
                                <option key={data} value={data}>
                                    {data}
                                </option>
                            ))}
                        </select>

                        <div className='d-inline h-100 fs-5 m-2'>
                            ₹{finalPrice}/-
                        </div>
                    </div>
                    <hr />

                    <button className="btn bg-danger text-light w-100" onClick={handleCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
