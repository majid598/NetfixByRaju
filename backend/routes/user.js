const express = require("express");
const { loginUser, registerUser } = require("../controllers/user");
const {
    movieLike,
    likedMovies,
    addToWatchLater,
    watchLaterMovies,
} = require("../controllers/movies");
const { checkAuthentication } = require("../helpers/auth");
const router = express.Router();

router.route("/login").post(loginUser);
router.route("/signup").post(registerUser);
router.route("/movies/like").post(checkAuthentication, movieLike);
router.route("/movies/watchlater").post(checkAuthentication, addToWatchLater);
router.route("/movies/likedmovies").get(checkAuthentication, likedMovies);
router.route("/movies/watchlatermovies").get(checkAuthentication, watchLaterMovies);
module.exports = router;
