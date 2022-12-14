const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const productRoutes = require('./src/routes/products');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'content-type, Authorization');
    next();
 })

app.use('/', productRoutes);

app.listen(3000);
