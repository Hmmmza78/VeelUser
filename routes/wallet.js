const express = require('express')
const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

const Wallet = require("../models/wallet");

router.post("/new", async (req, res, next) => {
    try {
        let {
            uid,
        } = req.body;

        try {
            const response = await Wallet.create({
                uid,
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

router.post("/edit", async (req, res) => {
    try {
        let {
            id,
            balance
        } = req.body;
        try {
            response = await Wallet.findByIdAndUpdate(id, {
                balance
            });
            res.json({
                status: "success",
                data: {
                    ...response
                }
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

router.post("/delete", async (req, res) => {
    try {
        let {
            id
        } = req.body;
        try {
            response = await Wallet.findByIdAndDelete(id);
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

router.get("/allWallets", async (req, res) => {
    try {
        wallets = await Wallet.find();
        res.json({
            wallets
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
            wallet = await Wallet.findById(id);
            res.json({
                wallet
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