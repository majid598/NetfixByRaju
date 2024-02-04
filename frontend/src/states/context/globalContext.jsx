/* eslint-disable react-refresh/only-export-components */
import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const imgPath = "https://image.tmdb.org/t/p/original";
const apiEndpoint = "https://api.themoviedb.org/3";
const apikey = "9b267beea6ca979b7a3931c5f6b95158";

const allCategoriesUrl = `${apiEndpoint}/genre/movie/list?api_key=${apikey}`,
    moviesListUrl = `${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${""}`,
    trendingUrl = `${apiEndpoint}/trending/all/day?api_key=${apikey}&language=en-US`;

const plans = [
    {
        plan: "mobile",
        price: 250,
    },
    {
        plan: "basic",
        price: 450,
    },
    {
        plan: "standard",
        price: 800,
    },
    {
        plan: "premium",
        price: 1100,
    },
];
const AppProvider = ({ children }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [plan, setPlan] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [alertType, setAlertType] = useState("");
    const [changePlan, setChangePlan] = useState(false);
    const [allCategories, setAllCategories] = useState([]);
    const [alertMessage, setAlertMessage] = useState("");
    const [stripeKey, setStripeKey] = useState("");
    const onChanger = (e) => {
        console.log(e);
        if (e.target.name === "email") setEmail(e.target.value);
        if (e.target.name === "firstName") setFirstName(e.target.value);
        if (e.target.name === "lastName") setLastName(e.target.value);
        if (e.target.name === "password") setPassword(e.target.value);
        if (e.target.name === "username") setUsername(e.target.value);
    };
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const removeAlert = () => {
        setAlertMessage("");
        setAlertType("");
    };

    const playTrailer = async (title) => {
        const res = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title}&key=AIzaSyA8uJ3ztj9ZCpxyv8LMRgd1hqvlUaA-hgs`
        );
        // console.log(res)
        const data = await res.json();
        let id = data.items[0].id;
        let trailerUrl = `https://www.youtube.com/watch?v=${id.videoId}`;
        window.open(trailerUrl, "_blank");
        // trailerUrl
    };
    const fetchMovieCategory = async () => {
        try {
            const response = await fetch(allCategoriesUrl);
            const data = await response.json();
            setAllCategories(data.genres);
        } catch (error) {
            console.error(error.message);
        }
    };
    const getApiKey = async () => {
        const response = await fetch("/api/payment/apikey", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        setApiKey(data.apiKey);
        console.log(data);
    };
    useEffect(() => {
        if (stripeKey === "") {
            getApiKey();
        }
    }, []);
    // fetchMoviedb();
    // fetchData();
    // fetchData2();
    return (
        <AppContext.Provider
            value={{
                user,
                loading,
                username,
                email,
                plan,
                fetchMovieCategory,
                firstName,
                lastName,
                password,
                plans,
                alertType,
                isAuthenticated,
                alertMessage,
                changePlan,
                imgPath,
                movies,
                allCategories,
                setAllCategories,
                setMovies,
                setChangePlan,
                removeAlert,
                setUser,
                setLoading,
                setAlertType,
                setAlertMessage,
                setPassword,
                playTrailer,
                setUsername,
                setEmail,
                setIsAuthenticated,
                setPlan,
                setLastName,
                onChanger,
                setFirstName,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// Custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
