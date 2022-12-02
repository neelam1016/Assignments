const express=require('express'); // include express module
const mongoose=require('mongoose'); // include mongoose module
const PORT= 8888; 
const app=express(); // create express object 

// Add template engine
app.set("view engine","ejs")

// add static files
app.use("/static",express.static("public"));

// parsing data
app.use(express.json());
app.use(express.urlencoded ({extended:false}))

// create routes
const mainRoute=require('./index');
app.use("/",mainRoute);

// connecting to database
const connectionString="mongodb://127.0.0.1:27017/mongocrudejs";
mongoose
  .connect(connectionString)
  .then(res=> console.log("Database connected"))
  .catch(err=> console.log("Error : "+err))


app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`server work on ${PORT}`)
})