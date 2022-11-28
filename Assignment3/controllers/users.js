const fs = require("fs"); // include fs module
// registration method
const registration = (req, res) => {
  // fetch data by destrucring
  let {name,email,password,age,city,gender} = req.body;
  // check file exist or not
  if (fs.existsSync(`./users/${email}.txt`)) {
    res.render("registration", { errMsg: "Email already registered" });
  } else {
    // writing in file
    fs.writeFile(
      `./users/${email}.txt`,
      `${name},${email},${password},${age},${city},${gender}`,
      (err) => {
        if (err) {
          res.render("registration", { errMsg: "something went wrong" });
        } else {
           //res.render("registration", { succMsg: "Registered succesfully" });
          res.render("welcome",{name:name,msg:"You are successfully registered"});
        }
      }
    );
  }
};
// login method
const login = (req, res) => {
    // fetch data by destrucring
    let {email, password} = req.body;
    // check file exist or not
    if (fs.existsSync(`./users/${email}.txt`)) 
    { 
      // Reading file convert into string and then converted into array by separater
      let data=fs.readFileSync(`./users/${email}.txt`).toString().split(",")
      if(data[2] == `${password}`){
        res.render("welcome",{name:data[0],msg:" "});
      }
      else{
        res.render("login",{ errMsg: "Password Incorrect" })
      } 
      
    }
    else{
      res.render("login",{ errMsg: "Email does not exist" })
    } 
  }

module.exports = {registration,login}; 