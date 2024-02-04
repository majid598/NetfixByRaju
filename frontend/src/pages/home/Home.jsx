import { Fragment, useEffect, useState } from "react";
import Feature from "../../components/features/feature";
import "./home.css";
import Movies from "../Movies/Movies";
import LoggedInHeader from "../../components/header/LoggedInHeader";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/footer";
import { useGlobalContext } from "../../states/context/globalContext";
import { FaInfoCircle, FaPlay } from "react-icons/fa";
import Loader from "../../components/Loader";

const Home = () => {
    const {
        setIsAuthenticated,
        fetchMovieCategory,
        allCategories,
        imgPath,
        playTrailer,
    } = useGlobalContext();
    const apiEndpoint = "https://api.themoviedb.org/3";
    const apikey = "9b267beea6ca979b7a3931c5f6b95158";
    const [hotMovie, setHotMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const fetchMoviesCategory = async () => {
        setLoading(true);
        const res = await fetch(
            `${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${"action"}`
        );
        const data = await res.json();
        let rand = Math.ceil(Math.random() * data.results.length);
        setHotMovie(data.results[rand]);
        setLoading(false);
    };
    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token && token !== null) setIsAuthenticated(true);
        fetchMoviesCategory();
        fetchMovieCategory();
        // videoMovie.play()
    }, []);

    const { isAuthenticated } = useGlobalContext();
    return isAuthenticated ? (
        <Fragment>
            <LoggedInHeader />
            {loading ? (
                <Loader />
            ) : (
                hotMovie && (
                    <div className="main-poster">
                        <img
                            src={imgPath + hotMovie?.backdrop_path}
                            alt="Movie Name here"
                            className="movie-main-img"
                        />
                        <div className="movie-detail">
                            <p className="text-4xl"> N SERIES</p>
                            <h2>{hotMovie.title}</h2>
                            <p>{hotMovie.overview}</p>
                            <div className="get-start">
                                <button
                                    className="btn-play btn mt-4"
                                    onClick={() => playTrailer(hotMovie.title)}
                                >
                                    <FaPlay className="icon" />
                                    Play
                                </button>
                                <button className="btn btn-info mt-4">
                                    <FaInfoCircle className="icon" />
                                    More info
                                </button>
                            </div>
                        </div>
                    </div>
                )
            )}
            <main className="home">
                {allCategories?.map((category) => {
                    return (
                        <Movies
                            key={category.id}
                            id={category.id}
                            category={category.name}
                        />
                    );
                })}
            </main>
        </Fragment>
    ) : (
        <Fragment>
            <Header />
            <div className="home">
                <div className="feature h-max my-40 flex  flex-col md:flex-row-reverse">
                    <div className="img-feature video-tv">
                        <video
                            src="./assets/videos/vid.m4v"
                            data-uia="nmhp-card-animation-asset-video"
                            muted
                            autoPlay
                            playsInline
                            loop
                            id="video-movie"
                        ></video>
                        {/* <img
                            className="feature-img"
                            src="./assets/images/tv.png"
                            alt="Image Feature"
                        /> */}
                    </div>
                    <div className={`md:w-1/2 w-full mt-28`}>
                        <h2 className="feature-title lg:text-6xl md:text-4xl sm:text-2xl text-xl">
                            Enjoy on your Tv
                        </h2>
                        <p className="feature-desc text-lg lg:text-3xl md:text-2xl  sm:font-semibold">
                            Watch on Smart TVs, Playstation, Xbox, Chromecast,
                            Apple TV, Blu-ray players, and more
                        </p>
                    </div>
                </div>
                <div className="feature h-max my-40 flex  flex-col md:flex-row-reverse">
                    <div className={`md:w-1/2 w-full`}>
                        <h2 className="feature-title lg:text-6xl md:text-4xl sm:text-2xl text-xl">
                            Download your shows to watch offline
                        </h2>
                        <p className="feature-desc text-lg lg:text-3xl md:text-2xl  sm:font-semibold">
                            Save your favorites and always have something to
                            watch
                        </p>
                    </div>
                    <div className="img-feature">
                        <img
                            className="feature-img"
                            src="./assets/images/home-strangers.jpg"
                            alt="Image Feature"
                        />
                        <div className="feature-download">
                            <div className="level-1">
                                <img
                                    width={50}
                                    src="./assets/images/stranger-poster.png"
                                    alt=""
                                />
                                <div className="movie-name">
                                    <h3>Stranger Things</h3>
                                    <span>Downloading</span>
                                </div>
                            </div>
                            <img
                                src="./assets/gifs/download-icon.gif"
                                width={45}
                                alt="Download"
                            />
                        </div>
                    </div>
                </div>
                <Feature />
            </div>
            <Footer />
        </Fragment>
    );
};

export default Home;
