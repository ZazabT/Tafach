const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        default : ""
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    bio:{
        type:String,
        default:""
    },
     // to reset password
    resetToken: {
        type: String,
        default: ""
      },
      resetTokenExpiration: {
        type: Date,
        default: null
      },
    //   role:{
    //     type:String,
    //     enum:["user", "admin"],
    //     default:"user",
    //     required:true,
    //   }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema)