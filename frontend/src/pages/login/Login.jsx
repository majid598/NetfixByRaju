import { Link, useNavigate } from "react-router-dom";
import logo from "../../../public/assets/images/logo.png";
import "./login.css";
import { useGlobalContext } from "../../states/context/globalContext";
import FooterSignIn from "../../components/footer/FooterSignIn";
import { useEffect } from "react";
// import MusicCorrect from "../../assets/correct.wav"

const Login = () => {
    const correct = new Audio("/assets/correct.wav");
    const wrong = new Audio("/assets/wrong.wav");
    const {
        email,
        password,
        onChanger,
        setEmail,
        setPassword,
        isAuthenticated,
        setIsAuthenticated,
        setAlertMessage,
        setAlertType,
        removeAlert,
    } = useGlobalContext();
    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setAlertMessage("Please fill all fields");
            setAlertType("error");
            wrong.play();
            setTimeout(() => {
                removeAlert();
            }, 2000);
            // return;
        } else {
            // login user
            const response = await fetch(
                "http://localhost:5000/api/user/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );
            const data = await response.json();
            console.log(data);
            if (data.success) {
                setIsAuthenticated(true);
                setEmail("");
                setPassword("");
                setAlertType("success");
                correct.play();

                localStorage.setItem("token", data.token);
                navigate("/");
            } else {
                wrong.play();
                setAlertType("error");
            }
            setAlertMessage(data.msg);
            setTimeout(() => {
                removeAlert();
            }, 2000);
        }
    };

    useEffect(() => {
        setEmail("");
        setPassword("");
        let token = localStorage.getItem("token");
        console.log(token);
        if (token && token !== null) {
            setIsAuthenticated(true);
            navigate("/");
        }
    }, [isAuthenticated]);
    return (
        <div className="my-container">
            <header className="header ">
                <div className="logo mx-auto md:mx-0">
                    <Link to={"/"}>
                        <img src={logo} className="mx-auto" alt="Netflix" />
                    </Link>
                </div>
            </header>
            <form
                onSubmit={loginUser}
                className="w-4/5 md:w-3/5 mb-4 lg:w-2/5 xl:w-[30%] mx-auto mt-8 login-form sm:p-16 p-4"
            >
                <h2 className="text-3xl font-bold text-white mb-6">Sign in</h2>
                <div className="mb-4">
                    <input
                        type="email"
                        value={email}
                        name="email"
                        onChange={onChanger}
                        placeholder=" email"
                        autoComplete="off"
                        className="bg-[#333333] text-white px-4 py-3  rounded-sm outline-none border-0 w-full"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="password"
                        onChange={onChanger}
                        className="bg-[#333333] text-white px-4 py-3 rounded-sm outline-none border-0 w-full"
                    />
                </div>
                <div className="mb-2 mt-12">
                    <input
                        type="submit"
                        value={"Sign in"}
                        className="bg-[#e50914] cursor-pointer text-white px-4 font-bold py-3 rounded-sm outline-none border-0 w-full"
                    />
                </div>
                <div className="flex justify-between mt-6">
                    <div>
                        <input type="checkbox" name="" id="" />{" "}
                        <span className="text-gray-300 text-sm">
                            Rembmer me
                        </span>
                    </div>
                    <Link className="text-gray-300 text-sm">Need help?</Link>
                </div>{" "}
                <div className="mt-16">
                    <p className="text-gray-400">
                        New to Netflix?{" "}
                        <Link to="/signup" className="text-white">
                            Sign up now.
                        </Link>
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                        {" "}
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot.
                        <Link className="blue-color">Learn more.</Link>
                    </p>
                </div>
            </form>
            <FooterSignIn classes="bg-black/100 mt-0" />
        </div>
    );
};

export default Login;
