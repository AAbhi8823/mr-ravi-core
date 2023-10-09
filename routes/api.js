const express=require("express")
const app=express() 

const user_route=require("./user.routes")
const category_route=require("./category.routes")
// const product_route=require("./product.routes")
 const subcategory_route=require("./subcategory.routes")


app.use("/user",user_route)
app.use("/category",category_route)
// app.use("/product",product_route)
 app.use("/subcategory",subcategory_route)


module.exports=app