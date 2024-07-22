const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const userdata = require("./utility/users.json");
const rootroute = require("./routes/rootroute");
const PORT = process.env.PORT || 6000;
const app = express();

//get request
// app.get("/", (req, res) => { //here / is route and ()is controller.
//     res.send("Hello World");
// });

app.get("/abc", (req, res) => {
    res.send("Hello World!");
});

app.get("/users", (req, res) => {
    res.send(userdata);
});
// server create

app.use("/", rootroute);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.green);
});