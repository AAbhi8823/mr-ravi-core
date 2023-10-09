//product controllers for mr-ravi-core

 const product_model=require("../models/product.models")
const {body,sanitizeBody, validationResult}=require("express-validator")
const apiResponse=require("../helpers/apiResponse")

//create product

exports.create_product=async(req,res)=>{
    const{name,price,description,isActive}=req.body
    try{
        const product=await product_model.create({
            name,
            price,
            description,
            isActive,
        })
        return apiResponse.successResponseWithData(
            res,
            "Product created successfully",
            product
        )
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}
