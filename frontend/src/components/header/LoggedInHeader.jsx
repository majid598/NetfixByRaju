import { Link, createRoutesFromChildren, useNavigate } from "react-router-dom";
import logo from "../../../public/assets/images/logo.png";
import "./header.css";
import {
    FaBars,
    FaBell,
    FaInfoCircle,
    FaPlay,
    FaSearch,
    FaTimes,
    FaUser,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../states/context/globalContext";

const LoggedInHeader = () => {
    const correct = new Audio("/assets/correct.wav");
    const {
        isAuthenticated,
        setIsAuthenticated,
        setAlertMessage,
        setAlertType,
        removeAlert,
    } = useGlobalContext();
    const navigate = useNavigate();
    const [showDropDown, setShowDropDown] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const logOut = () => {
        correct.play();
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setAlertMessage("signing out");
        setAlertType("success");
        navigate("/login");
        setTimeout(() => {
            removeAlert();
        }, 2000);
    };
    useEffect(() => {
        // console.log(isAuthenticated)

        if (!isAuthenticated || !localStorage.getItem("token")) navigate("/");
    }, [isAuthenticated]);
    return (
        <div className="">
            <header className="header  header-logged-in">
                <div className="logo">
                    <Link to={"/"}>
                        <img src={logo} alt="Netflix" />
                    </Link>
                </div>
                <nav
                    className={`responsive__navbar transition-all  ${
                        showNav ? "left-0" : "-left-72"
                    }`}
                >
                    <ul>
                        <li>
                            <a href="#" className="active">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">Tv Shows</a>
                        </li>
                        <li>
                            <a href="#">Tv Movies</a>
                        </li>
                        <li>
                            <a href="#">New & Popular</a>
                        </li>
                        <li>
                            <a href="#">My list</a>
                        </li>
                        <li>
                            <a href="#">Browse by languages</a>
                        </li>
                    </ul>
                </nav>
                <div className="user-nav">
                    {!showNav && (
                        <FaBars
                            onClick={() => setShowNav(true)}
                            className="icon menuBtn cursor-pointer hidden"
                        />
                    )}
                    {showNav && (
                        <FaTimes
                            onClick={() => setShowNav(false)}
                            className="icon menuBtn cursor-pointer hidden"
                        />
                    )}
                    <FaSearch className="icon cursor-pointer" />
                    <div className="relative notification">
                        <FaBell className="icon  cursor-pointer" />
                    </div>
                    <div
                        className="relative"
                        onMouseEnter={() => setShowDropDown(true)}
                        onMouseLeave={() => setShowDropDown(false)}
                    >
                        <FaUser className="icon cursor-pointer" />
                        {showDropDown && (
                            <div className="dropdown absolute right-0 top-5 rounded-lg w-64 bg-black p-2 px-4">
                                <ul>
                                    <li className="my-4 text-center">
                                        <Link
                                            to="/account"
                                            className="inline-block mx-auto hover:text-gray-300 font-bold"
                                        >
                                            Account
                                        </Link>
                                    </li>
                                    <li className="my-4 text-center">
                                        <button
                                            onClick={logOut}
                                            className="inline-block mx-auto hover:text-gray-300 font-bold"
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default LoggedInHeader;
