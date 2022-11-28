const express=require('express'); // include express
const router=express.Router(); // create object
const {registration,login}=require('../controllers/users'); // include functions

// routes 
router.get("/login",(req,res)=>{
    res.render("login")
})
router.get("/registration",(req,res)=>{
    res.render("registration")
})
router.get("/welcome",(req,res)=>{
    res.render("welcome")
})

router.post("/postdata",registration); // call function pass data
router.post("/postlogindata",login);// call function pass data
module.exports=router;