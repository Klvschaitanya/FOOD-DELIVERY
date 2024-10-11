
const mongoose = require('mongoose');
require('dotenv').config();
const mongoUri = process.env.mongo_uri;
const mongoDB=async()=>{

  try{
    await mongoose.connect(mongoUri)
    console.log("mongoDB connected")

  }
 catch(error){
    console.log(error)
 }

try{
   const fetched_foodDetails = await mongoose.connection.collection("food_Details")
   const  fetched_foodCategory = await mongoose.connection.collection("food_category");
  const food_Details = await fetched_foodDetails.find({}).toArray();
  const food_category = await fetched_foodCategory.find({}).toArray();
              global.foodItems = food_Details;
              global.foodCategory = food_category;
}
catch(error){
console.log(error,"at fetchedData")
}


    }


module.exports = mongoDB;

