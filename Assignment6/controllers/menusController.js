const menuModel = require("../model/menus");
const userModel = require("../model/users");
const cartModel = require("../model/cart");
async function menusdata(req, res) {
  let uname = req.session.name;
  let userdata = await userModel.findOne({ name: uname });

  let menudata = await menuModel.find({});
  let userId = userdata._id;

  try {
    if (userId) {
      let cart = await cartModel.findOne({ userId });
      if (cart) {
        res.render("menu", {
          id: userId,
          count: cart.toJSON().products.length,
          data: menudata.map((menudata) => menudata.toJSON()),
        });
      } else {
        res.render("menu", {
          id: userId,
          count: 0,
          data: menudata.map((menudata) => menudata.toJSON()),
        });
      }
    }
  } catch (error) {
    res.render("menu", (errMsg = "Something went wrong"));
  }
}
module.exports = { menusdata };
