const express = require('express'); // import express
const cors = require('cors');
const app = express();

app.use(cors());
``
//middleware functions to run between backend and frontend
app.use(express.json()); // can accept JSON data from request
const db=require('./Config/Config');
const userRoute=require('./Routes/userRoute');
const propertyRoute=require('./Routes/propertyRoute');
const packageRoute=require('./Routes/packageRoute')
const bookingRoute = require('./Routes/bookingRoute');
app.use('/api/users', userRoute)
app.use('/api/properties' , propertyRoute)
app.use('/api/packages', packageRoute)
app.use('/api/bookings', bookingRoute);
// start the server
// server is listening to the requests /users /products
/**   we need to decide the port 
http://localhost:PORT/
:3000
:5000
:3456
*/
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log("Server is running on port ",PORT)
})

