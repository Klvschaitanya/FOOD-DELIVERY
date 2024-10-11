const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

router.post('/OrderData', async (req, res) => {
    const { email, order_data } = req.body;

    // Check if email and order_data exist
    if (!email || !order_data) {
        return res.status(400).json({ success: false, message: 'Email and order_data are required' });
    }

    try {
        // Find if there's already an order for the given email
        let existingOrder = await Order.findOne({ email: email });

        if (!existingOrder) {
            // No order found, create a new order document
            await Order.create({
                email: email,
                order_data: [order_data],// Store the order_data as an array
                
                  
            });
            return res.status(201).json({ success: true, message: 'Order created successfully' });
        } else {
            // Order already exists, update the existing order with new data
            existingOrder.order_data.push(order_data);  // Add the new order to the existing order_data array

            // Save the updated order
            await existingOrder.save();
            return res.status(200).json({ success: true, message: 'Order updated successfully' });
        }
    } catch (error) {
        console.error("Error at OrderData route:", error.message);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


router.post('/myOrderData', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ success: false, message: 'Email is required' });
        }

        // Find the user's order by email
        let myData = await Order.findOne({ "email": email });

        if (!myData) {
            return res.status(404).json({ success: false, message: 'No orders found for this email' });
        }

        res.json({ orderData: myData });
    } catch (error) {
        console.error("Error at OrderData route:", error); // Log the error
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


module.exports = router;
