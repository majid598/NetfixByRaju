import { useEffect, useState } from "react";
import { useGlobalContext } from "../../states/context/globalContext";
import Movie from "./Movie";
import "./movie.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Movies = ({ category, id }) => {
    const [slides, setSlides] = useState(5);
    const apiEndpoint = "https://api.themoviedb.org/3";
    const apikey = "9b267beea6ca979b7a3931c5f6b95158";
    addEventListener("resize", () => {
        // console.log(innerWidth);
        if (innerWidth >= 1080) setSlides(5);
        else if (innerWidth >= 720) setSlides(4);
        else setSlides(3);
    });
    const [movies, setMovies] = useState([]);
    const fetchMoviesCategory = async () => {
        const res = await fetch(
            `${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${id}`
        );
        const data = await res.json();
        setMovies(data.results);
        console.log(data);
    };
    useEffect(() => {
        // console.log(movies);
        fetchMoviesCategory();
    }, [slides]);
    return (
        <div className="movie-categories">
            <h3 className="movie-category">{category}</h3>
            {/* <div className="movies-grid"> */}
            <Swiper
                key={slides}
                spaceBetween={30}
                slidesPerView={slides}
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
                {movies?.map((movie, i) => {
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
            {/* </div> */}
        </div>
    );
};

export default Movies;
