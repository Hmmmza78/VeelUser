const express = require('express')
const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const Subscription = require("../models/subscription");

router.post("/new", async (req, res, next) => {
    try {
        let {
            subId,
            uid,
            remaining
        } = req.body;

        try {
            const response = await Subscription.create({
                subId,
                uid,
                remaining
            });
            res.json({
                status: "success",
                data: {
                    ...response
                }
            })
        } catch (error) {
            res.json(error.message);
        }
    } catch (e) {
        res.statusCode(400).json({
            message: "provide correct parameters"
        })
    }
});

router.post("/delete", async (req, res) => {
    try {
        let {
            id
        } = req.body;
        try {
            response = await Subscription.findByIdAndDelete(id);
            res.json({
                status: "success"
            });
        } catch (e) {
            res.json({
                status: "internal server error!"
            });
            console.log(e);
        }
    } catch (e) {
        res.statusCode(400).json({
            message: "provide correct parameters"
        })
    }
});

router.get("/allSubscriptions", async (req, res) => {
    try {
        subscriptions = await Subscription.find();
        res.json({
            subscriptions
        });
    } catch (e) {
        res.json({
            status: "internal server error!"
        });
    }
});

// this block must be at the end
router.get("/:id", async (req, res) => {
    try {
        let {
            id
        } = req.params;
        try {
            subscription = await Subscription.findById(id);
            res.json({
                subscription
            });
        } catch (e) {
            res.json({
                status: "internal server error!"
            });
        }
    } catch (e) {
        res.statusCode(400).json({
            message: "provide correct parameters"
        })
    }
})


module.exports = router;