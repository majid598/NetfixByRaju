import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Movie from "../Movies/Movie";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
const Account = () => {
    const [likedMovies, setLikedMovies] = useState([]);
    const [watchLaters, setWatchLaters] = useState([]);
    const [user, setUser] = useState({});
    const [slides, setSlides] = useState(5);
    addEventListener("resize", () => {
        // console.log(innerWidth);
        if (innerWidth >= 1080) setSlides(5);
        else if (innerWidth >= 720) setSlides(4);
        else setSlides(3);
        console.log(slides);
    });
    const [loading, setLoading] = useState(true);
    const getLikedVideos = async () => {
        // add to fav
        setLoading(true);
        const res = await fetch(
            "http://localhost:5000/api/user/movies/likedmovies",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    token: localStorage.getItem("token"),
                },
            }
        );

        const data = await res.json();
        if (data.success) {
            // setLoading(false);
            setLikedMovies(data.movies);
            setUser(data.user);
        }
    };
    const getWatchLatered = async () => {
        // add to fav
        setLoading(true);
        const res = await fetch(
            "http://localhost:5000/api/user/movies/watchlatermovies",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    token: localStorage.getItem("token"),
                },
            }
        );

        const data = await res.json();
        console.log(data);
        if (data.success) {
            setLoading(false);
            setWatchLaters(data.movies);
            setUser(data.user);
        }
    };
    // const
    useEffect(() => {
        getLikedVideos();
        getWatchLatered();
    }, []);
    const { plan } = user;
    return (
        <div className="bg-black py-4 px-20 min-h-[100vh] ">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="mb-8">
                        <Link to={"/"}>
                            <img
                                src="/assets/images/logo.png"
                                className="mx-auto"
                                width={200}
                                alt="Netflix Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center text-white justify-between mx-auto">
                        <img
                            src="/assets/images/avatar.jpg"
                            width={60}
                            alt=""
                        />
                        <div>
                            Subscription
                            {plan && (
                                <h3 className="font-bold text-xl text-white">
                                    {plan.plan.toUpperCase()} / {plan.price}
                                </h3>
                            )}
                            subscribed on {plan.subscribedAt.slice(0,10)}
                        </div>
                    </div>

                    <div className="mt-8">
                        <h1 className="text-2xl text-white mb-4">
                            Your Liked Videos
                        </h1>
                        <Swiper
                            key={slides}
                            spaceBetween={30}
                            slidesPerView={5}
                            centeredSlides={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >
                            {likedMovies?.map((movie, i) => {
                                // if(category?.toLowerCase() === movie.category){
                                // console.log(movie?.category.toLowerCase() , movie.category)

                                return (
                                    <SwiperSlide key={movie.id}>
                                        <Movie
                                            key={i}
                                            id={movie.id}
                                            title={movie.title}
                                            overview={movie.overview}
                                            release_date={movie.release_date}
                                            backdrop_path={movie.backdrop_path}
                                            img={movie.img}
                                        />
                                    </SwiperSlide>
                                );
                                // }
                            })}
                        </Swiper>
                    </div>
                    <div className="mt-8 text-white ">
                        <h1 className="text-2xl mb-8">Your Watch Later</h1>
                        {watchLaters.length <= 0 ? (
                            "No Movies in Watch Later "
                        ) : (
                            <Swiper
                                key={slides}
                                spaceBetween={30}
                                slidesPerView={5}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper"
                            >
                                {watchLaters?.map((movie, i) => {
                                    // if(category?.toLowerCase() === movie.category){
                                    // console.log(movie?.category.toLowerCase() , movie.category)

                                    return (
                                        <SwiperSlide key={movie.id}>
                                            <Movie
                                                key={i}
                                                id={movie.id}
                                                title={movie.title}
                                                overview={movie.overview}
                                                release_date={
                                                    movie.release_date
                                                }
                                                backdrop_path={
                                                    movie.backdrop_path
                                                }
                                                img={movie.img}
                                            />
                                        </SwiperSlide>
                                    );
                                    // }
                                })}
                            </Swiper>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Account;
