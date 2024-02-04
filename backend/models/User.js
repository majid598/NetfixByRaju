const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        subscribed: {
            type: String,
            default: false,
        },
        plan: {
            plan: { type: String },
            price: { type: String },
            subscribedAt: {
                type: Date,
                default: Date.now,
            },
        },
    },
    { timeStamps: true }
);

module.exports = mongoose.model("User", userSchema);
