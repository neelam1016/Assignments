const express=require('express'); // include express module
const exphbs=require('express-handlebars'); // include express-handlebars module
const PORT= 8888; 
const app=express(); // create express object 
// Add template engine
app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars');
app.set('views','./views');
// add static files
app.use("/static",express.static("public"));
// parsing data
app.use(express.json());
app.use(express.urlencoded ({extended:false}))
// create routes
const mainRoute=require('./routes/mainroutes');
const userRoute=require('./routes/userroutes');
app.use("/",mainRoute);
app.use("/users",userRoute);
// handle 404 error
app.get("*",(req,res)=>{
    res.render("notfound")
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`server work on ${PORT}`)
})