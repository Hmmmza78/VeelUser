const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: String,
        required: false,
    },
    gender: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "default.jpg",
        required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: null
    }
}, {
    collection: "users",
});

const model = mongoose.model("userSchema", userSchema);

module.exports = model;