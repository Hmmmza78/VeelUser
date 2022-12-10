const express = require('express')
const router = express.Router();
// const jwt = require("jsonwebtoken");

const {
    upload
} = require("../functions/upload")

const User = require("../models/user");

router.post("/register", upload.single("image"), async (req, res, next) => {
    try {
        let {
            phone,
            email,
            gender,
            firstName,
            lastName,
        } = req.body;

        User.find({
            $or: [{
                phone,
            }]

        }, async (err, result) => {
            if (err) {
                res.statusCode(500);
            } else {
                if (result.length > 0) {
                    res.json({
                        status: "fail",
                        message: "Phone number already exists!"
                    });
                } else {
                    try {
                        const response = await User.create({
                            phone,
                            email,
                            gender,
                            firstName,
                            lastName,
                            image: newFileName
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
                }
            }
        });
    } catch (e) {
        res.statusCode(400).json({
            message: "provide correct parameters"
        })
    }
});

// router.post("/login", async (req, res) => {
//     let {
//         phone,
//     } = req.body;
//     User.findOne({
//         phone
//     }, async (err, result) => {
//         if (err) throw err;
//         if (result != null) {
//             res.json({
//                 status: "success"
//             });
//         } else {
//             res.json({
//                 status: "fail"
//             })
//         }
//     })
// });

router.post("/checkPhone", async (req, res) => {
    try {
        let {
            phone
        } = req.body;
        let phoneOld = await User.find({
            phone
        });
        if (phoneOld.length > 0) {
            res.json({
                status: true
            });
        } else {
            res.json({
                status: false
            });
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
            uid
        } = req.body;
        try {
            response = await User.findByIdAndDelete(uid);
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

router.get("/allUsers", async (req, res) => {
    try {
        users = await User.find();
        users.forEach(user => {
            user.password = "";
        });
        res.json({
            users
        });
    } catch (e) {
        res.json({
            status: "internal server error!"
        });
    }
});

router.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true
    }).json({
        status: "success"
    });
});

// this block must be at the end
router.get("/:id", async (req, res) => {
    try {
        let {
            id
        } = req.params;
        try {
            user = await User.findById(id);
            user.password = "";
            res.json({
                user
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