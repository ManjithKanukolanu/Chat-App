const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const url = process.env.MongodbUrl
app.use(express.json())
const mongoose = require('mongoose')
mongoose.connect(url)
        .then(()=>{
            console.log('Mongodb Connected')
        })
        .catch((err)=>{
            console.log(err)
        })
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
app.get('/',(req,res)=>{
    res.send('Welcome To Chat App')
})