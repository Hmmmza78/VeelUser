const express = require('express')
const router = express.Router();
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const Schedule = require("../models/schedule");

// router.post("/new", async (req, res, next) => {
//     try {
//         let {
//             amount,
//             uid,
//             rider,
//             location,
//             destination,
//             status,
//             type
//         } = req.body;

//         try {
//             const response = await Schedule.create({
//                 amount,
//                 uid,
//                 rider,
//                 location,
//                 destination,
//                 status,
//                 type
//             });
//             res.json({
//                 status: "success",
//                 data: {
//                     ...response
//                 }
//             })
//         } catch (error) {
//             res.json(error.message);
//         }
//     } catch (e) {
//         res.statusCode(400).json({
//             message: "provide correct parameters"
//         })
//     }
// });

// router.post("/delete", async (req, res) => {
//     try {
//         let {
//             id
//         } = req.body;
//         try {
//             response = await Schedule.findByIdAndDelete(id);
//             res.json({
//                 status: "success"
//             });
//         } catch (e) {
//             res.json({
//                 status: "internal server error!"
//             });
//             console.log(e);
//         }
//     } catch (e) {
//         res.statusCode(400).json({
//             message: "provide correct parameters"
//         })
//     }
// });

// router.get("/allSchedules", async (req, res) => {
//     try {
//         schedules = await Schedule.find();
//         res.json({
//             schedules
//         });
//     } catch (e) {
//         res.json({
//             status: "internal server error!"
//         });
//     }
// });

// // this block must be at the end
// router.get("/:id", async (req, res) => {
//     try {
//         let {
//             id
//         } = req.params;
//         try {
//             schedule = await Schedule.findById(id);
//             res.json({
//                 schedule
//             });
//         } catch (e) {
//             res.json({
//                 status: "internal server error!"
//             });
//         }
//     } catch (e) {
//         res.statusCode(400).json({
//             message: "provide correct parameters"
//         })
//     }
// })


module.exports = router;