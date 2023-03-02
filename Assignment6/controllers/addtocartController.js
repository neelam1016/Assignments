const menuModel = require("../model/menus");
const cartModel = require("../model/cart");
const userModel = require("../model/users");

async function addtocart(req, res) {
  let id = req.params.id;
  let uname = req.session.name;
  //   console.log(id)
  // console.log(username);
  let data1 = await menuModel.findById({ _id: id });
  let userdata = await userModel.findOne({ name: uname });
  let menudata = await menuModel.find({});

  let userId = userdata._id;
  console.log(userId);
  try {
    let cart = await cartModel.findOne({ userId });

    if (cart) {
      let index = cart.products.findIndex((prod) => prod.name == data1.name);
      console.log(index);
      if (index > -1) {
        let itemproduct = cart.products[index];
        itemproduct.quantity += 1;
        cart.products[index] = itemproduct;
        res.render("menu", {
          id: userId,
          data: menudata.map((menudata) => menudata.toJSON()),
          count: cart.toJSON().products.length,
        });
      } else {
        cart.products.push({
          name: data1.name,
          quantity: 1,
          price: data1.price,
          des: data1.desc,
          img: data1.imgsrc,
        });
        //res.send({name:data.name,quantity:2,price:data.price,des:data.des,image:data.image});
      }
      cartsave = await cart.save();
      res.render("menu", {
        id: userId,
        data: menudata.map((menudata) => menudata.toJSON()),
        count: cart.toJSON().products.length,
      });
    } else {
      const cartdata = await cartModel
        .create({
          userId: userId,
          products: [
            {
              name: data1.name,
              quantity: 1,
              price: data1.price,
              des: data1.desc,
              img: data1.imgsrc,
            },
          ],
        })
        .catch((err) => {
          res.render("menu", { errMsg: "Something went Wrong" });
        });

      res.render("menu", {
        id: userId,
        data: menudata.map((menudata) => menudata.toJSON()),
        count: cartdata.toJSON().products.length,
      });
    }
  } catch (error) {
    res.send(error);
  }
}
module.exports = { addtocart };
