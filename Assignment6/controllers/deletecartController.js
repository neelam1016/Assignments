const cartModel = require("../model/cart");
const userModel = require("../model/users");
async function deletecart(req,res){
 let uname = req.session.name;
  let userdata = await userModel.findOne({ name: uname });
  let uid = userdata._id;
    let did=req.params.id;
    await cartModel.find({userId:uid},(err,data)=>{
       if(err){ res.send("Something wrong")}
       else {
        data.products.deleteOne({_id:did})
           res.redirect(`/users/cart/${pid}`)
       }
    })
}
module.exports={deletecart};