const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const exphbs = require("express-handlebars");
const sessions = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use("/static", express.static("public/images"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => {
  throw err;
});
db.once("open", () => {
  console.log("Database created");
});
app.use(cookieParser());
app.use(
  sessions({
    secret: process.env.seceret,
    saveUninitialized: true,
    cookie: { maxAge: Number(process.env.oneDay) },
    resave: false,
  })
);

const mainRoute = require("./routes/mainroute");
const userRoute = require("./routes/userroute");
app.use("/", mainRoute);
app.use("/users", userRoute);
app.listen(process.env.PORT, (err) => {
  if (err) throw err;
  else console.log(`Server work on ${process.env.PORT}`);
});
