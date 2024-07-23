const userdata = require("../utility/users.json");
const usercontroller = (req, res) => {
        res.send(userdata);
     };
module.exports = usercontroller;    