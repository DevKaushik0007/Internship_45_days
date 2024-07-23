const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const userdata = require("./utility/users.json");
const rootroute = require("./routes/rootroute");
const userroute = require("./routes/userroute");
const productroute = require("./routes/productroute");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 6000;
const app = express();
connectDB();


// Monopolistic Architecture:-



//get request
// app.get("/", (req, res) => { //here / is route and ()is controller.
//     res.send("Hello World");
// });

// app.get("/abc", (req, res) => {
//     res.send("Hello World!");
// });

// app.get("/users", (req, res) => {
//     res.send(userdata);
// });
// server create


// DIstributive Architecture:-



app.use("/", rootroute);   // middle ware part : rootroute
app.use("/users",userroute);
app.use("/product",productroute);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.green);
});