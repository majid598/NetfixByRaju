import { FaCheck } from "react-icons/fa";
import "./steps.css";
import { Link } from "react-router-dom";
import RegisterLayout from "../register/RegisterLayout";
import { useGlobalContext } from "../../states/context/globalContext";

const Step21 = () => {
    const showExtras = (e) => {
        let target = e.target;

        console.log(e.target.innerText);
        if (e.target.innerText.toLowerCase() !== "see more") {
            console.log(
                target.previousElementSibling.classList.add("show-less")
            );
            e.target.innerText = "See more";
        } else {
            console.log(
                target.previousElementSibling.classList.remove("show-less")
            );
            e.target.innerText = "Show less";
        }
    };
    const { setPlan, plans, setChangePlan } = useGlobalContext();
    const planSelected = (e) => {
      setChangePlan(false);
        const planBoxes = Array.from(document.querySelectorAll(".plan-box"));
        plans.map((p) => {
            if (p.plan === e.target.id) {
                setPlan({ plan: p.plan, price: p.price });
            }
        });

        if (planBoxes) {
            planBoxes.forEach((box) => {
                box.classList.remove("active-plan");
            });
        }
        let target = e.target;

        // console.log(
        target.parentElement.parentElement.classList.add("active-plan");
        // );
    };
    return (
        <RegisterLayout>
            <div className="step-2-2 slide-in-left ">
                <span>STEP 2 OF 3</span>
                <h2>Choose the plan that's right for you.</h2>
                <div className="plan-box">
                    <div className="plan-box-div">
                        <input
                            id="mobile"
                            type="radio"
                            onClick={planSelected}
                            name="plan"
                        />
                        <div>
                            <h4> Mobile</h4>
                            <span>Rs250/mo.</span>
                        </div>
                    </div>

                    <p>
                        Good video quality. Watch in 480p (SD). Downloads
                        available. Watch on your mobile phone and tablet.
                    </p>
                    <div className="more-about-plan  show-less">
                        <h5>With any plan, you can:</h5>

                        <p className="features">
                            <FaCheck className="icon" /> Watch all you want.
                        </p>
                        <p className="features">
                            <FaCheck className="icon" />
                            Enjoy recommendations just for you.
                        </p>
                        <p className="features">
                            <FaCheck className="icon" /> Change or cancel your
                            plan anytime
                        </p>
                    </div>
                    <button onClick={showExtras} className="btn-expand">
                        See more
                    </button>
                </div>
                <div className="plan-box">
                    <div className="plan-box-div">
                        <input
                            id="basic"
                            type="radio"
                            onClick={planSelected}
                            name="plan"
                        />
                        <div>
                            <h4> Basic</h4>
                            <span>Rs450/mo.</span>
                        </div>
                    </div>
                    <p>
                        Good video quality. Watch in 720p (HD). Downloads
                        available. Watch on your TV, computer mobile phone and
                        tablet.
                    </p>
                    <div className="more-about-plan show-less">
                        <h5>With any plan, you can:</h5>

                        <p className="features">
                            <FaCheck className="icon" /> Watch all you want.
                        </p>
                        <p className="features">
                            <FaCheck className="icon" />
                            Enjoy recommendations just for you.
                        </p>
                        <p className="features">
                            <FaCheck className="icon" /> Change or cancel your
                            plan anytime
                        </p>
                    </div>
                    <button onClick={showExtras} className="btn-expand">
                        See more
                    </button>
                </div>
                <div className="plan-box">
                    <div className="plan-box-div">
                        <input
                            id="standard"
                            type="radio"
                            onClick={planSelected}
                            name="plan"
                        />
                        <div>
                            <h4> Standard</h4>
                            <span>Rs800/mo.</span>
                        </div>
                    </div>

                    <p>
                        Great video quality. Watch in 1080p (Full HD). Downloads
                        available. Watch on your TV, computer mobile phone and
                        tablet.
                    </p>
                    <div className="more-about-plan  show-less">
                        <h5>With any plan, you can:</h5>

                        <p className="features">
                            <FaCheck className="icon" /> Watch all you want.
                        </p>
                        <p className="features">
                            <FaCheck className="icon" />
                            Enjoy recommendations just for you.
                        </p>
                        <p className="features">
                            <FaCheck className="icon" /> Change or cancel your
                            plan anytime
                        </p>
                    </div>
                    <button onClick={showExtras} className="btn-expand">
                        See more
                    </button>
                </div>
                <div className="plan-box">
                    <div className="plan-box-div">
                        <input
                            id="premium"
                            type="radio"
                            onClick={planSelected}
                            name="plan"
                        />
                        <div>
                            <h4>Premium</h4>
                            <span>Rs1100/mo.</span>
                        </div>
                    </div>

                    <p>
                        Our best video quality. Watch in 4K (Ultra HD) and HDR.
                        Downloads available. Watch on your TV, computer mobile
                        phone and tablet.
                    </p>
                    <div className="more-about-plan show-less">
                        <h5>With any plan, you can:</h5>

                        <p className="features">
                            <FaCheck className="icon" /> Watch all you want.
                        </p>
                        <p className="features">
                            <FaCheck className="icon" />
                            Enjoy recommendations just for you.
                        </p>
                        <p className="features">
                            <FaCheck className="icon" /> Change or cancel your
                            plan anytime
                        </p>
                    </div>
                    <button onClick={showExtras} className="btn-expand">
                        See more
                    </button>
                </div>
                <p className="bottom-para-plan">
                    HD (720p), Full HD (1080p), Ultra HD (4K) and HDR
                    availability subject to your internet service and device
                    capabilities. Not all content is available in all
                    resolutions. See our{" "}
                    <a href="#" className="blue-color">
                        Terms of Use
                    </a>{" "}
                    for more details.
                </p>
                <p className="bottom-para-plan">
                    Only people who live with you may use your account. Watch on
                    4 different devices at the same time with Premium, 2 with
                    Standard, and 1 with Basic and Mobile.
                </p>
                <Link to={"/signup/step-3"} className="big-btn">
                    Next
                </Link>
            </div>
        </RegisterLayout>
    );
};

export default Step21;
