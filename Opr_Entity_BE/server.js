const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express();
app.use(cors());

app.get('/',(res,response)=>{
    return response.json("Hello World")
})

app.listen(5000,()=>{
    console.log("Listening");
})