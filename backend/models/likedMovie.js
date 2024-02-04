const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
    {
        backdrop_path: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        overview: {
            type: String,
            required: true,
        },
        release_date: {
            type: Date,
        },
    },
    { timeStamps: true }
);

module.exports = mongoose.model("LikedMovie", movieSchema);
