const cartModel = require("../model/cart");
const userModel = require("../model/users");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
async function orders(req,res){
    let uname=req.session.name;
    let userdata = await userModel.findOne({ name: uname });
   
    let userId = userdata._id;
    let email=userdata.email;
    let cart = await cartModel.findOne({ userId });
    try {
      if (userId) {
      
        
          var displaycart={items:[],total:0}
          var total = 0;
          for (var item in cart.products) {
            displaycart.items.push(cart.products[item]);
            total += cart.products[item].quantity * cart.products[item].price;
        
  
         
        }
      }
    } catch (error) {
      res.render("cart", (errMsg = "Something went wrong"));
    }

    let transporter=nodemailer.createTransport({
        service:"gmail",
        port:587,
        secure:false,
        auth:{
            user:"galineelam10@gmail.com",
            pass:"swfhmwfdmqnzvkqx"
        }
    });
    transporter.use('compile',hbs(
        {
            viewEngine:"nodemailer-express-handlebars",
            viewPath:"views/emailTemplates/"
        }
    ))
    let mailOptions={
        from:'galineelam10@gmail.com',
        to:email,
        subject:"Pizza Order",
        template:'order',
        context:{username:uname,data: cart.toJSON().products,tp:total

        }
    }
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err){ console.log(err)}
        else{
             console.log("Mail send : "+info)
        }
    })
    res.render("orderplaced", {id:userId,count: cart.toJSON().products.length});
}
module.exports={orders};