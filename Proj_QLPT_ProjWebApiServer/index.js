const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
const routes = require('./routers/routers');
app.use('/api', routes)
require('dotenv').config();
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);

const database = mongoose.connection;
app.use('/images', express.static('images'));
database.on('error', (error)=>{
    console.log(error)
})
database.once('connected', ()=>{
    console.log('Database Connected');
})
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
