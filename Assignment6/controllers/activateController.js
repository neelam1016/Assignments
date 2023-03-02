const userModel = require("../model/users");
function activate(req, res) {
  let id = req.params.id;
  userModel.findOne({ _id: id }, (err, data) => {
    if (err) {
      res.send("Some Thing Went Wrong");
    } else {
      userModel
        .updateOne({ _id: id }, { $set: { status: 1 } })
        .then(() => {
          res.render("activate", { name: data.name });
        })
        .catch(() => {
          res.send("Some Thing Went Wrong");
        });
    }
  });
}
module.exports = { activate };
