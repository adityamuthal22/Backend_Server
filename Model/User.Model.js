const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    RollNumber:{type:Number,required:true}

},{timestamps:true})

const UserModel=mongoose.model("UserData",UserSchema);

module.exports=UserModel