import { useState } from "react";
import { FaEllipsisV, FaPlay, FaPlus, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../states/context/globalContext";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const Movie = ({ backdrop_path, release_date, overview, title, id }) => {
    const { imgPath, setAlertMessage, setAlertType, removeAlert, playTrailer } =
        useGlobalContext();
    const correct = new Audio("/assets/correct.wav");
    const addToLiked = async () => {
        // add to fav
        console.log("here");
        const res = await fetch("http://localhost:5000/api/user/movies/like", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                token: localStorage.getItem("token"),
            },
            body: JSON.stringify({
                backdrop_path,
                release_date,
                overview,
                title,
                id,
            }),
        });

        const data = await res.json();
        if (data.success) {
            correct.play();
            setAlertMessage(data.msg);
            setAlertType("success");
        }
        setTimeout(() => {
            removeAlert();
        }, 2000);
    };
    const addToWatchLater = async () => {
        // add to fav
        console.log("here");
        const res = await fetch(
            "http://localhost:5000/api/user/movies/watchlater",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    token: localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    backdrop_path,
                    release_date,
                    overview,
                    title,
                    id,
                }),
            }
        );

        const data = await res.json();
        if (data.success) {
            setAlertMessage(data.msg);
            setAlertType("success");
            correct.play();
        }
        setTimeout(() => {
            removeAlert();
        }, 2000);
    };
    const removeFromWatchLater = async () => {
        // add to fav
        console.log("here");
        const res = await fetch(
            "http://localhost:5000/api/user/movies/watchlater",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    token: localStorage.getItem("token"),
                },
                body: JSON.stringify({
                    id,
                }),
            }
        );
        const data = await res.json();
        if (data.success) {
            setAlertMessage(data.msg);
            setAlertType("success");
        }
        setTimeout(() => {
            removeAlert();
        }, 2000);
    };
    const [showButtons, setShowButtons] = useState(false);
    return (
        <div
            className={`movie-item mb-20 relative ${
                showButtons ? " z-49 absolute" : "z-10"
            } transition-all duration-300`}
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
        >
            {/* <iframe
                id="movie-frame"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/shW9i6k8cB0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe> */}
            <img
                onClick={() => playTrailer(title)}
                className={`  ${
                    showButtons ? "scale-125  z-49 " : "z-10"
                } transition-all duration-300 cursor-pointer`}
                src={imgPath + backdrop_path}
                alt=""
            />

            <div
                className={`${
                    showButtons ? "opacity-100" : "opacity-0"
                } relative z-50 `}
            >
                <div className="movie-info text-white">
                    <div className="text-sm">
                        {title} <span>{release_date}</span>
                    </div>
                    <p className="text-xs">{overview?.slice(0, 80)}</p>
                </div>
                <div className="flex movie-nav text-white justify-between p-2 mt-0">
                    <div className="flex gap-4 ">
                        <FaPlay
                            className="icon cursor-pointer hover:scale-125 transition-all"
                            onClick={() => playTrailer(title)}
                        />
                        <FaPlus
                            className="icon cursor-pointer hover:scale-125 transition-all"
                            onClick={addToWatchLater}
                        />
                        <FaThumbsUp
                            className="icon cursor-pointer hover:scale-125 transition-all"
                            onClick={addToLiked}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;
