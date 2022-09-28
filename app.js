const express = require("express");
const app = express();
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userdata = require("./routes/userdata");
app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);
// if (process.env.NODE_ENV === "production") {
  app.use(express.static("qrcode/build"));
// }
app.use("/api/v1", userdata);

module.exports = app;
