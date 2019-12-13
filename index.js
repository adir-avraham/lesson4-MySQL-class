const exprees = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors')
const app = exprees();

const getCustomers = require('./northwind/getCustomers');
const getCustomer = require('./northwind/getCustomer');
const getCities = require('./northwind/getCities');

app.use(cors());
app.use(bodyParser.json());

app.use('/getCustomers', getCustomers);
app.use('/getCustomer', getCustomer);
app.use('/getCities', getCities);



app.listen(process.env.PORT, (err) => {

    if (err) console.log("There is an error with the server")
    console.log(`App is listening to port: ${process.env.PORT}`)
}) 