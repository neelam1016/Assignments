const userModel = require("../model/users");
const cartModel = require("../model/cart");

function getuserById(req, res) {
  let uid = req.params.id;
   userModel.findOne({ _id: uid }, (err, data) => {
    if (err) {
      res.send("Something went wrong");
    } else {
       let cart =  cartModel.findOne({userId: uid });
      res.render("profile", { id: uid, data: data.toJSON(), id: uid});
    }
  });
}

module.exports = { getuserById };
