This is a Food Delivery web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to browse food items, place orders, and track them in real-time.

Features
Browse Food Menu: Users can view a variety of food items with options like full and half sizes.
User Authentication: Secure login and signup with token-based authentication.
Add to Cart: Users can add food items to the cart and update their quantities.
Place Orders: Users can place an order from their cart.
Order Tracking: View order history 

Technology Stack 
Frontend
React.js: For building user interfaces and handling routing.
CSS: For styling the application.
Backend
Node.js: JavaScript runtime for the server-side.
Express.js: Web framework for building REST APIs.
Database
MongoDB: Used to store user, order, and menu data.

SETUP STEPS
Clone the Repository:
Clone the project from GitHub to your local machine by running the following command in your terminal:

git clone (https://github.com/Klvschaitanya/FOOD-DELIVERY)

Navigate to the Project Directory:
Change to the project folder:

cd food-delivery

Backend Setup
Navigate to the Backend Directory:
Move to the backend folder where the server code is located:

cd backend

Install Backend Dependencies:
Install all the necessary packages for the backend:

npm install

Set Up Environment Variables:
Create a .env file in the backend directory and add the following:

MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret

Start the Backend Server:
Run the following command to start the backend server:

node index

Frontend Setup
Navigate to the Frontend Directory:
Now move to the frontend folder where the React code is located:

cd frontend

Install Frontend Dependencies:
Install all the necessary packages for the frontend:

npm install

Start the Frontend Application:
Run the following command to start the React development server:

npm start
