const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
    subId: {
        type: String,
        required: true,
        unique: true
    },
    uid: {
        type: String,
        required: true
    },
    remaining: {
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
    collection: "subscriptions",
});

const model = mongoose.model("subscriptionSchema", subscriptionSchema);

module.exports = model;