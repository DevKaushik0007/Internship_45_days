const express = require("express");
const getproductController = require("../controllers/products/getproductController");
const router = express.Router();
router.get("/getproducts", getproductController);
module.exports = router;
