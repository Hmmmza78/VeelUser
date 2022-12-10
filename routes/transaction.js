const express = require('express')
const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const Transaction = require("../models/transaction");

router.post("/new", async (req, res, next) => {
    try {
        let {
            amount,
            uid,
            type
        } = req.body;

        try {
            const response = await Transaction.create({
                amount,
                uid,
                type
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
            response = await Transaction.findByIdAndDelete(id);
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

// * This requires request body
router.get("/allTransactions", async (req, res) => {
    try {
        let {
            uid
        } = req.body;
        try {
            transactions = await Transaction.find({
                uid
            });
            res.json({
                transactions
            });
        } catch (e) {
            res.json({
                status: "internal server error!"
            });
        }
    } catch (e) {
        res.statusCode(400).json({
            message: "provide correct parameters"
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
            subscription = await Transaction.findById(id);
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