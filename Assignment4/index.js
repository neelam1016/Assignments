const express=require('express');
const {SaveProduct,getProductById,getAllProduct,deleteProduct,updateProduct,updateform}=require('./controllers/productsController') //including all methods
const router=express.Router(); // creating router

//routes
router.get("/",getAllProduct,(req,res)=>{
     res.render("home")
})
router.get("/addproducts",(req,res)=>{
    res.render("addproducts")
})
router.post("/addproduct",SaveProduct);
router.get("/getproductbyid/:id",getProductById);
router.get("/deleteproduct/:id",deleteProduct);
router.get("/updateform/:id",updateform);
router.post("/editproduct/:id",updateProduct)


module.exports=router;