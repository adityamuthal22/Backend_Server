const express=require("express");
const Connect=require("../Connect/Connect")
const mongoose=require("mongoose");
const UserRouter=require("../Controller/User.Route")
const cors=require("cors")
const PORT=process.env.PORT  || 8080
mongoose.set('strictQuery', true);

const app=express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use("/user",UserRouter)
app.use("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT,async()=>{
    await Connect();
    console.log(`Your server start on ${PORT}`)
})