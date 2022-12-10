const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: true,
        unique: true
    },
    uid: {
        type: String,
        required: true
    },
    rider: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true
    },
    status: {
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
    collection: "schedules",
});

const model = mongoose.model("scheduleSchema", scheduleSchema);

module.exports = model;