import "./feature.css";
import {Fragment} from "react";

const Feature = () => {
    return (
        <Fragment>

            <div className="feature h-max my-40 flex  flex-col md:flex-row">
                <div className={`md:w-1/2 w-full`}>
                    <h2 className="feature-title lg:text-6xl md:text-4xl sm:text-2xl text-xl">Watch Everywhere</h2>
                    <p className="feature-desc text-lg lg:text-3xl md:text-2xl  sm:font-semibold">
                        Stream unlimited movies and TV shows on your phone, tablet, laptop,
                        and TV{" "}
                    </p>
                </div>
            </div>
            <div className="feature h-max my-40 flex  flex-col md:flex-row">
                <div className="img-feature w-1/2">
                    <img
                        className="feature-img"
                        src="./assets/images/home-kids.png"
                        alt="Image Feature"
                    />
                </div>
                <div className={`md:w-1/2 w-full`}>
                    <h2 className="feature-title lg:text-6xl md:text-4xl sm:text-2xl text-xl">Create profiles for
                        kids </h2>
                    <p className="feature-desc text-lg lg:text-3xl md:text-2xl  sm:font-semibold"> Send kids on
                        adventures with their favorite characters in a space
                        made just for them--free with your membership
                    </p>
                </div>
            </div>
        </Fragment>
    );
};

export default Feature;
