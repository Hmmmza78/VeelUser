const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: true,
    },
    uid: {
        type: String,
        required: true
    },
    type: {
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
    collection: "transactions",
});

const model = mongoose.model("transactionSchema", transactionSchema);

module.exports = model;