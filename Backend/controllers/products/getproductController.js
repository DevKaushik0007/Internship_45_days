const productCollection = require("../../modules/productSchema");
const mongoose = require("mongoose");
const productcontroller = async (req, res) => {
    const product = await productCollection.find();
        res.send(product);
     };
module.exports = productcontroller;