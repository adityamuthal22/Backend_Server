const express=require("express");
const UserModel=require("../Model/User.Model");
const User=express.Router();

User.post('/',async(req,res)=>{
    try{

        let data=await UserModel.create(req.body);
        res.send(data);
    }catch(err){
        res.status(500).send(err)
    }
})

User.get('/',async(req,res)=>{
    try{

        let data=await UserModel.find()
        res.send(data);
    }catch(err){
        res.status(500).send(err)
    }
})

module.exports=User
