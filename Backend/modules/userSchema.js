const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    id:{
        type:Number,
        unique:true,
        required:[true,"user id is required"]
    },
    username:{
        type:String,
        required:[true,"username is required"]
    },
    useremail:{
        type:String,
        required:[true,"useremail is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    firstName:{
        type:String,
        required:[true,"firstName is required"]
    },
    lastName:{
        type:String,
        required:[true,"lastName is required"]
    },
    role:{
        type:String,
        required:[true,"role is required"]
    },
    gender:{
        type:String,
        required:[true,"gender is required"]
    },
    age:{
        type:Number,
        required:[true,"gender is required"]
    },
    city:{
        type:String,
        requizred:[true,"city is required"]
    },
    salary:{
        type:Number,
        required:[true,"salary is required"]
    },
    skills:{
        type:[String],
        required:[true,"skills is required"]
    }

});

const userCollection = mongoose.model("users",userSchema);
module.exports = userCollection;