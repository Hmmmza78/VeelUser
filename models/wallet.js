const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
    balance: {
        type: Number,
        required: true,
        default: 0
    },
    uid: {
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
    collection: "wallets",
});

const model = mongoose.model("walletSchema", walletSchema);

module.exports = model;