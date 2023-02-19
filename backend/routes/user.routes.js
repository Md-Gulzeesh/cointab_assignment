const express = require("express");
const userRouter = express.Router();

userRouter.get("/",(req,res)=>{
    res.status(200).send("Get users")
})
userRouter.post("/add",(req,res)=>{
    res.status(201).send("Post users")
})
userRouter.delete("/delete",(req,res)=>{
    res.status(200).send("Delete users")
})

module.exports = {userRouter};