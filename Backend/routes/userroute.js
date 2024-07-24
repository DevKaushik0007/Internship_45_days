const express = require("express");
const getusercontroller = require("../controllers/users/getusercontroller");
const router = express.Router();
router.get("/getusers", getusercontroller);
module.exports = router;
