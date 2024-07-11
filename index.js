const express = require('express')
const app = express();


app.get("/hello" , (req,res)=>{
    res.status(200).json("Hello World")
})

app.listen(3005,()=>{
    console.log("server running at 3005")
})