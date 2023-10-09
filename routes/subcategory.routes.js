const router =require("express").Router()

const subcategory_controllers=require("../controllers/subcategory.controllers")


//routes for subcategory
router.post("/add-subcategory",subcategory_controllers.create_subcategory)





module.exports=router

