import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Step11 from "./pages/steps/Step1-1.jsx";
import Step2 from "./pages/steps/Step2.jsx";
import Step21 from "./pages/steps/Step2-1.jsx";
import Step3 from "./pages/steps/Step3.jsx";
import { AppProvider } from "./states/context/globalContext.jsx";
import Step1 from "./pages/steps/Step1.jsx";
import Alert from "./components/Alert";
import MovieDetails from "./pages/Movies/MovieDetails";
import Account from "./pages/AboutMe/account";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const App = () => (
    <AppProvider>
        <Router>
            <Routes>
                <Route exact path={"/"} element={<Home />} />
                <Route exact path={"/login"} element={<Login />} />
                <Route exact path={"/signup"} element={<Step1 />} />
                <Route exact path={"/signup/step-1"} element={<Step11 />} />
                <Route exact path={"/signup/step-2"} element={<Step2 />} />
                <Route exact path={"/signup/step-2-1"} element={<Step21 />} />
                <Route
                    exact
                    path={"/movies/movie/:id"}
                    element={<MovieDetails />}
                />
                <Route exact path={"/account"} element={<Account />} />
                <Route
                    exact
                    path={"/signup/step-3"}
                    element={
                        <Elements
                            stripe={loadStripe(
                                "pk_test_51Mj6h1SEr7VMOboEVZUJQo5IzeYg929DQY3Ch2e34HcHQnLaQUv34zGpIJlrGHEuipYeJwT1jBOYInyJ8jwFW7Yr001sY6CokF"
                            )}
                            
                        >
                            <Step3 />
                        </Elements>
                    }
                />
            </Routes>
        </Router>
        <Alert />
    </AppProvider>
);

export default App;
