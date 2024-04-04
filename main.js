const mongoose = require('mongoose')
const express = require('express');
require("dotenv").config();
const {router} = require('./routes')
const {aggregate, aggregateUsingUnwind} = require('./aggregate')

const PORT = process.env.PORT;
const DATABASE_LINK = process.env.DATABASE_LINK
const app = express()

   

mongoose.connect(DATABASE_LINK).then(()=>{
    console.log('connected to db')
}).catch((err)=>{
    console.log('an error occured to db', err.message) 
})

// code aggregate
aggregate()
aggregateUsingUnwind()

app.use(express.json());


app.listen(PORT, ()=> {
    console.log('app listening on ', PORT)
})



app.use("/api/v1", router);
