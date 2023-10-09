const router =require("express").Router()

const category_controllers=require("../controllers/category.controllers")




//routes for category
router.post("/add-category",category_controllers.create_category)





module.exports=router