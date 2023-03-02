const express = require("express");
const { signup } = require("../controllers/signupController");
const { activate } = require("../controllers/activateController");
const { signin } = require("../controllers/loginController");
const { menusdata } = require("../controllers/menusController");
const { getuserById } = require("../controllers/profileController");
const { addtocart } = require("../controllers/addtocartController");
const { cartdata } = require("../controllers/cartdataController");
//const { checkoutdata } = require("../controllers/cheakoutController");
const { orders } = require("../controllers/orderController");
const { deletecart } = require("../controllers/deletecartController");
const router = express.Router();

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signdata", signup);

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/activateaccount/:id", activate);

router.post("/logindata", signin);

router.get("/menus", menusdata);
router.get("/cart/:id", cartdata);
router.post("/addtocart/:id", addtocart);
router.get("/profile/:id", getuserById);
router.post("/deletecart/:id",deletecart);
router.post("/cheakout/:id", (req, res) => {
  let uid=req.params.id;
  let tp=req.body.tp;
  res.render("checkout",{total:tp,id:uid});
});
router.get("/orderplaced",orders);
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/users/login");
});
module.exports = router;
