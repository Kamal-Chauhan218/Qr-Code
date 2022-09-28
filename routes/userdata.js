const express = require("express");
const router = express.Router();

const {
  getUserData,
  newUserData,
  getAllData,
  getAllDatafromRollNumber,
} = require("../controllers/userdatacontroller");

router.route("/userdata").get(getUserData);
router.route("/newUserData").post(newUserData);
router.route("/alldata/:id").get(getAllData);
module.exports = router;
