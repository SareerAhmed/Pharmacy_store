const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: false,
    },
});

// Pass the model name "User" and the schema to mongoose.model
const User = mongoose.model("User", userSchema);

module.exports = User;
