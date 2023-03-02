const userModel = require("../model/users");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");

function signup(req, res) {
  let { name, email, password, address, mobile } = req.body;
  const hash = bcrypt.hashSync(password, Number(process.env.SALT_ROUNDS));
  let ins = new userModel({
    name: name,
    email: email,
    password: hash,
    address: address,
    mobile: mobile,
  });
  ins.save((err, data) => {
    if (err) res.render("signup", { errMsg: err.message });
    else {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false,
        auth: {
          user: "galineelam10@gmail.com",
          pass: "swfhmwfdmqnzvkqx",
        },
      });
      transporter.use(
        "compile",
        hbs({
          viewEngine: "nodemailer-express-handlebars",
          viewPath: "views/emailTemplates/",
        })
      );
      let mailOptions = {
        from: "galineelam10@gmail.com",
        to: email,
        subject: "Account activate",
        template: "mail",
        context: { email: email, id: data._id },
      };
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.log("error");
        } else {
          console.log("Mail send : " + info);
        }
      });
      res.redirect("/users/login");
    }
  });
}
module.exports = { signup };
