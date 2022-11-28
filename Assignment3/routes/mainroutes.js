const express=require('express'); // include express
const router=express.Router(); // creating router

router.get("/",(req,res)=>{
    res.render("home")
})

module.exports=router; // ready to use