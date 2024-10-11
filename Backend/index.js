const express = require("express");
 const app = express();
 const Port = process.env.PORT || 5000;
const mongoDB = require("./db")
const createUser = require('./routes/CreateUser')
const Displaydata =require('./routes/DisplayData')
const OrderData = require('./routes/OrderData')
mongoDB();
 
const cors = require('cors');

// Enable CORS for your specific origin
app.use(cors({
    origin: 'http://localhost:3000',  // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    credentials: true // Optional: if you need to send cookies or credentials
}));



app.use(express.json())

app.use('/api',createUser)
app.use('/api',Displaydata)
app.use('/api',OrderData)





 app.listen(Port,()=>{
   console.log(`server started at port ${Port}`)
})
