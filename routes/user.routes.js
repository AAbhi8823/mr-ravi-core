const router=require("express").Router()

const user_contreoller=require("../controllers/user.controllers")

router.post("/user-register",user_contreoller.registerUser)

module.exports=router