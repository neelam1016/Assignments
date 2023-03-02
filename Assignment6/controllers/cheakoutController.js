function checkoutdata(req, res) {
  let uid = req.param.id;
  if (uid) {
    let tp = req.body.tp;

    res.render("checkout", { id: uid, totalp: tp });
  } else {
    res.render("cart", { errMsg: "error" });
  }
}

module.exports = { checkoutdata };
