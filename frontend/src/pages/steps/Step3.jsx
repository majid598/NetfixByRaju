import { useGlobalContext } from "../../states/context/globalContext";
import RegisterLayout from "../register/RegisterLayout";
import "./steps.css";
import { FaCalendar, FaCreditCard, FaLock, FaUsersSlash } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
    useStripe,
    useElements,
    Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const Step3 = () => {
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const payBtn = useRef();
    const [apiKey, setApiKey] = useState("");
    const correct = new Audio("/assets/correct.wav");
    const {
        plan,
        firstName,
        user,
        isAuthenticated,
        lastName,
        email,
        password,
        onChanger,
        setIsAuthenticated,
        setAlertMessage,
        setAlertType,
        removeAlert,
        changePlan,
        setChangePlan,
        plans,
        setPlan,
    } = useGlobalContext();
    useEffect(() => {
        if (!plan || !email || !password) return navigate("/");
        if (user) {
            console.log(user);
        }
    }, [isAuthenticated]);
    const registerUser = async (e) => {
        e.preventDefault();
        try {
            // payment first then user registration
            payBtn.current.disabled = true;
            console.log(plan.price);
            setAlertMessage("payment initiated. please wait....");
            setAlertType("success");
            correct.play();
            let response = await fetch(
                "http://localhost:5000/api/payment/pay",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ amount: plan.price }),
                }
            );
            let data = await response.json();
            if (!stripe || !elements) return;
            // client_secret
            const result = await stripe.confirmCardPayment(data.client_secret, {
                payment_method: {
                    card: elements.getElement(CardNumberElement),
                    billing_details: {
                        name: `${firstName} ${lastName}`,
                        email,
                    },
                },
            });
            if (result.error) {
                payBtn.current.disabled = false;
                alert(result.error.message);
                return;
            } else {
                if (result.paymentIntent.status === "succeeded") {
                    removeAlert();
                    payBtn.current.disabled = false;
                    correct.play();
                    setAlertMessage("congrats payment successful! Redirecting...");
                    setAlertType("success");
                    console.log(plan, email, password, firstName, lastName);
                    // alert("Payment Successful");
                    // user registration
                    response = await fetch(
                        "http://localhost:5000/api/user/signup",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                plan,
                                email,
                                password,
                                firstName,
                                lastName,
                            }),
                        }
                    );
                    data = await response.json();
                    setTimeout(() => {
                        removeAlert();
                    }, 2000);
                    if (data.success) {
                        setIsAuthenticated(true);
                        setAlertMessage(data.msg);
                        setAlertType("success");
                        localStorage.setItem("token", data.token);
                            navigate("/");
                    } else {
                        setAlertMessage(data.msg);
                        setAlertType("error");
                    }
                }
            }
            setTimeout(() => {
                removeAlert();
            }, 2500);
            // payment
        } catch (error) {
            console.log(error.message);
        }
    };
    const planSelected = (e) => {
        setChangePlan(false);
        plans.map((p) => {
            if (p.plan === e.target.id) {
                setPlan({ plan: p.plan, price: p.price });
            }
        });
    };

    useEffect(() => {}, []);
    return (
        <RegisterLayout>
            <div className="step-3-2 slide-in-left ">
                <span>STEP 3 OF 3</span>
                <h2>Set up your credit or debit card</h2>

                <form>
                    <div className="input-card">
                        <CardNumberElement className="input" />
                        <FaCreditCard />
                    </div>
                    <div className="outer-div">
                        <div className="input-card wid-49">
                            <CardCvcElement className="input" />
                            <FaLock />
                        </div>
                        <div className="input-card wid-49">
                            <CardExpiryElement className="input" />
                            <FaCalendar />
                        </div>
                    </div>

                    <div className="input-card">
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={onChanger}
                            placeholder="First name"
                            className="input"
                        />
                        {/* write a function for average  */}
                    </div>
                    <div className="input-card">
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={onChanger}
                            placeholder="Last name"
                            className="input"
                        />
                    </div>
                </form>
                <div className="plan-chosen">
                    <div>
                        <h4>Rs{plan?.price}/month</h4>
                        <span>{plan?.plan?.toUpperCase()}</span>
                    </div>
                    <button
                        className="blue-color"
                        onClick={() => setChangePlan(true)}
                    >
                        Change
                    </button>
                </div>

                <p className="bottom-para">
                    your payments will be processed internationally. Additional
                    bank fee may apply.
                </p>
                <p className="bottom-para">
                    By checking the checkbox below, you agree to our{" "}
                    <a href="" className="blue-color">
                        Terms of Use,{" "}
                    </a>{" "}
                    <a href="#" className="blue-color">
                        Privacy Statement,
                    </a>{" "}
                    and that you are over 18. Netflix will automatically
                    continue your membership and change the membership fee
                    (currently Rs{plan?.price}
                    /month) to your payment method until you cancel. You may
                    cancel at any time to avoid future charges.
                </p>
                <br />
                <div>
                    <input type="checkbox" name="" id="" /> I agree.
                </div>
                <button
                    onClick={registerUser}
                    ref={payBtn}
                    className="big-btn disabled:bg-red-300 disabled:cursor-not-allowed"
                >
                    Start Membership
                </button>
            </div>
            {changePlan && (
                <div key={changePlan} className="change_plan_container">
                    <div className="box_change_plan">
                        <div className="plan-box">
                            <div className="plan-box-div">
                                <input
                                    id="mobile"
                                    type="radio"
                                    onClick={planSelected}
                                    name="plan"
                                />
                                <label htmlFor="mobile">
                                    <h4> Mobile</h4>
                                    <span>Rs250/mo.</span>
                                </label>
                            </div>
                        </div>
                        <div className="plan-box">
                            <div className="plan-box-div">
                                <input
                                    id="basic"
                                    type="radio"
                                    onClick={planSelected}
                                    name="plan"
                                />
                                <label htmlFor="basic">
                                    <h4> Basic</h4>
                                    <span>Rs450/mo.</span>
                                </label>
                            </div>
                        </div>
                        <div className="plan-box">
                            <div className="plan-box-div">
                                <input
                                    id="standard"
                                    type="radio"
                                    onClick={planSelected}
                                    name="plan"
                                />
                                <label htmlFor="standard">
                                    <h4> Standard</h4>
                                    <span>Rs800/mo.</span>
                                </label>
                            </div>
                        </div>
                        <div className="plan-box">
                            <div className="plan-box-div">
                                <input
                                    id="premium"
                                    type="radio"
                                    onClick={planSelected}
                                    name="plan"
                                />
                                <label htmlFor="premium">
                                    <h4>Premium</h4>
                                    <span>Rs1100/mo.</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </RegisterLayout>
    );
};

export default Step3;
