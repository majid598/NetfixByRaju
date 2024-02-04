const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

exports.connectToMongo = () => {
    mongoose
        .connect(MONGO_URI)
        .then(() => {
            console.log("connected to " + MONGO_URI);
        })
        .catch(() => {
            console.log("error connecting to " + MONGO_URI);
        });
};
