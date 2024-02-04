const User = require("../models/User");
const likedMovie = require("../models/likedMovie");
const watchLater = require("../models/watchLater");

exports.movieLike = async (req, res) => {
    // const { movieId, userId } = req.body;
    const { backdrop_path, release_date, overview, title, id } = req.body;
    const userId = req.user;
    console.log("here");
    try {
        const movieExist = await likedMovie.find({userId:req.user,id:id});
        if(movieExist.length>0){
            return res.json({ success: true, movie, msg: "already added to watch later" });
        }
        const movie = await likedMovie.create({
            backdrop_path,
            release_date,
            overview,
            title,
            id,
            userId,
        });
        console.log(movie);
        res.json({ success: true, movie, msg: "you liked this movie" });
    } catch (err) {
        res.status(err.statusCode).json({
            success: false,
            msg: err.message,
        });
    }
};
exports.likedMovies = async (req, res) => {
    // const { movieId, userId } = req.body;
    try {
        const user = await User.findById(req.user);
        const movies = await likedMovie.find({ userId: req.user });
        res.json({ success: true, movies, user, msg: "you liked movies" });
    } catch (err) {
        res.status(err.statusCode).json({
            success: false,
            msg: err.message,
        });
    }
};

exports.addToWatchLater = async (req, res) => {
    // const { movieId, userId } = req.body;
    const { backdrop_path, release_date, overview, title, id } = req.body;
    const userId = req.user;
    try {
        const movieExist = await watchLater.find({userId:req.user,id:id});
        if(movieExist.length>0){
            return res.json({ success: true, movie, msg: "already added to watch later" });
        }
        const movie = await watchLater.create({
            backdrop_path,
            release_date,
            overview,
            title,
            id,
            userId,
        });
        res.json({ success: true, movie, msg: "added to watch later" });
    } catch (err) {
        res.status(err.statusCode).json({
            success: false,
            msg: err.message,
        });
    }
};
exports.watchLaterMovies = async (req, res) => {
    // const { movieId, userId } = req.body;
    try {
        const user = await User.findById(req.user);
        const movies = await watchLater.find({ userId: req.user });
        res.json({ success: true, movies, user, msg: "your watch later" });
    } catch (err) {
        res.status(err.statusCode).json({
            success: false,
            msg: err.message,
        });
    }
};
