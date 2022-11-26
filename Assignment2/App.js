const express=require('express'); //for add module
const fs=require('fs'); // for add module
const PORT=9999;
const app=express(); 
//Template engine
app.set('view engine','pug');
app.set('views','./views');
// parsing Data
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// Static files
app.use("/static",express.static("public"));

app.get("/",(req,res)=>{
    res.render("home");
})
app.get("/aboutus",(req,res)=>{
    res.render("aboutus");
})
app.get("/gallery",(req,res)=>{
    let data="static/images"
    res.render("gallery",{data:data});
})
app.get("/services",(req,res)=>{
    res.render("services");
})
app.get("/contactus",(req,res)=>{
    res.render('contactus')
})

app.get("/contactusd",(req,res)=>{
    res.render("contactusd");
})
var count=0;
app.post("/postdata",(req,res)=>{
    
    count+=1;
    // fetch data
    let fname=req.body.fname;
    let lname=req.body.lname;
    let email=req.body.email;
    let phno=req.body.phno;
    let msg=req.body.msg;
    let data=(`<tr>
    <td>${count}</td>
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${email}</td>
    <td>${phno}</td>
    <td>${msg}</td></tr>
    `);
    var wq=data.toString();
    // append and write file
    if(fs.existsSync(`./users`)){
        fs.appendFileSync(`./users/detail.txt`,`${wq}`)
    }
    else{
       
        fs.writeFileSync(`./users/detail.txt`,`${wq}`);
        
    }
    res.redirect("/contactfile")
 })
 app.get("/contactfile",(req,res)=>{
    if(fs.existsSync(`./users/detail.txt`)){
    res.render('contactusd')
    }
    else{
        res.render("404")
    }

 })
 // handle 404 error
 app.get("*",(req,res)=>{
    res.render("404")
 })
app.listen(PORT,(err)=>
{
    if(err)throw err;
    else console.log(`Server work on ${PORT}`)
})