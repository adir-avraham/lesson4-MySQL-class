const exprees = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors')
const app = exprees();

const getCustomers = require('./northwind/getCustomers');
const getCustomer = require('./northwind/getCustomer');
const getCities = require('./northwind/getCities');
const getShips = require('./northwind/getShips');
const getOrders = require('./northwind/getOrders')



app.use(cors());
app.use(bodyParser.json());

app.use('/getCustomers', getCustomers);
app.use('/getCustomer', getCustomer);
app.use('/getCities', getCities);
app.use('/getShips', getShips);
app.use('/getOrders', getOrders);

app.listen(process.env.PORT, (err) => {
    
    if (err) console.log("There is an error with the server")
    console.log(`App is listening to port: ${process.env.PORT}`)
}) 