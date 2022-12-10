const mongoose = require("mongoose");

function connect() {
    try {
        mongoose.connect(process.env.MONGODB_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true
        }, () => {
            console.log("db connected");
        });
    } catch (err) {
        console.log("db not connected");
    }
}
module.exports=connect;