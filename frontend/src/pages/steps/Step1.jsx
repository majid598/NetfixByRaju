import { FaLaptop, FaMobileAlt, FaTabletAlt, FaTv } from "react-icons/fa";
import "./steps.css";
import { Link } from "react-router-dom";
import RegisterLayout from "../register/RegisterLayout";
const Step1 = () => {
  return (
    <RegisterLayout>
      <div className="step-1-1 slide-in-left ">
        <div className="icons-steps-1-1">
          <FaLaptop className="icon" />
          <FaTv className="icon" />
          <FaMobileAlt className="icon" />
          <FaTabletAlt className="icon" />
        </div>
        <span>STEP 1 OF 3</span>
        <h2>Finish setting up your account</h2>
        <p>
          Netflix is personalized for you. Create a password to watch on any
          device at any time
        </p>
        <Link to={"/signup/step-1"} className="big-btn">
          Next
        </Link>
      </div>
    </RegisterLayout>
  );
};

export default Step1;
