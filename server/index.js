const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const userRouterPage=require('./Router/userrouter')
require('dotenv').config()
app.use(cors())

mongoose.connect(process.env.MongoUrl).then(()=>{
    console.log("data base are connected");
}).catch((err)=>{
    console.log(err.message);
})

app.use(express.json())

app.use('/api',userRouterPage)



app.listen(3000,()=>{
    console.log("port is connected");
})
// http://localhost:3000/hello
