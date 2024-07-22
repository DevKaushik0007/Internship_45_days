const express = require("expire");
const rootcontroller = require("../controllers/rootcontroller");
const router = express.Router();
router.get("/", rootcontroller);
module.exports = router;
