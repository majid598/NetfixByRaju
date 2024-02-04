import { Link, useNavigate } from "react-router-dom";
import logo from "../../../public/assets/images/logo.png";
import "./header.css";
import { FaAngleRight } from "react-icons/fa";
import { useGlobalContext } from "../../states/context/globalContext";
import { useEffect } from "react";
const Header = () => {
    const { email, onChanger } = useGlobalContext();
    const { isAuthenticated } = useGlobalContext();
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) navigate("/");
    }, []);
    return (
        <div className="my-container">
            <header className="header justify-around sm:justify-between ">
                <div className="logo">
                    <Link to={"/"}>
                        <img src={logo} alt="Netflix" />
                    </Link>
                </div>
                <div>
                    <Link
                        to="/login"
                        className="outline-none bg-[#e50914] text-white rounded-md border-0 px-3 py-1 font-semibold"
                    >
                        Sing In
                    </Link>
                </div>
            </header>
            <div className="hero-cta px-4">
                <h2 className="text-white font-bold text-3xl xl:text-6xl lg:text-5xl md:text-4xl">
                    Unlimited Movies, TV Shows and More
                </h2>
                <p className="text-white">Watch anywhere, cancel anytime</p>
                <p className="text-white">
                    Ready to watch? Enter your email to create or restart your
                    membership
                </p>
                <div className="get-start">
                    <input
                        type="text"
                        name="email"
                        value={email}
                        
                        onChange={onChanger}
                        className="!px-4 !py-2 rounded-sm"
                        placeholder="email address"
                        autoComplete="off"
                    />
                    <Link
                        to={"/signup"}
                        className="btn !px-4 !py-2 bg-[#e50914] text-white rounded-md"
                    >
                        Get Started <FaAngleRight className="inline" />{" "}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
