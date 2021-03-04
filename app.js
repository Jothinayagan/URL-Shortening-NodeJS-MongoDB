const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const routes = require('./routes');
const router = require('express').Router();

mongoose.connect('mongodb://127.0.0.1:27017/urlshort', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => console.log('Database connected successfully...'));

mongoose.connection.on('error', (err) => console.log('Connection error!!!'));

mongoose.connection.on('disconnected', () => console.log('Database disconnected..!'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.listen(PORT, () => console.log(`Node server listening @ http://localhost:${PORT}`));

module.exports = router;