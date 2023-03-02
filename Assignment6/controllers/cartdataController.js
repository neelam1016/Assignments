const cartModel = require("../model/cart");
const userModel = require("../model/users");
async function cartdata(req, res) {
  let uname = req.session.name;
  let userdata = await userModel.findOne({ name: uname });
  let userId = userdata._id;
  try {
    if (userId) {
      let cart = await cartModel.findOne({ userId });
      if (cart) {
        // var displaycart={items:[],total:0}
        var total = 0;
        for (var item in cart.products) {
          //  displaycart.items.push(cart.products[item]);
          total += cart.products[item].quantity * cart.products[item].price;
        }

        res.render("cart", {
          id: userId,
          count: cart.toJSON().products.length,
          cd: cart.toJSON().products,
          tp: total,
        });
      } else {
        res.render("cart", { id: userId });
      }
    }
  } catch (error) {
    res.render("cart", (errMsg = "Something went wrong"));
  }
}
module.exports = { cartdata };
