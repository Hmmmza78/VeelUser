require("dotenv").config();
require("./functions/dbConnect")();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cookieParser());

// importing routers
docsRouter = require("./routes/docs");

app.use("/docs", docsRouter);


app.listen(PORT, () => {
    console.log("connected!");
});