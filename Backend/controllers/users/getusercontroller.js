const userCollection = require("../../modules/userSchema");
const mongoose = require("mongoose");

const usercontroller = async (req, res) => {
        const users = await userCollection.find();
        res.send(users);
     };
module.exports = usercontroller;    