const mongoose =require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://aditya:aditya@cluster0.ugtkfve.mongodb.net/?retryWrites=true&w=majority")
 
}

module.exports=connect