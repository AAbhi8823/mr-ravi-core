const express=require("express")
const app=express() 

const user_route=require("./user.routes")


app.use("/user",user_route)

module.exports=app