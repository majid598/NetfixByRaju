import { FaCheck, FaCheckCircle } from "react-icons/fa";
import "./steps.css";
import { Link } from "react-router-dom";
import RegisterLayout from "../register/RegisterLayout";

const Step2 = () => {

  return (
     <RegisterLayout>
       <div className="step-2-1 slide-in-left ">
        <span>
          <FaCheckCircle className="icon-check" />
        </span>
         <span>STEP 2 OF 3</span>
         <h2>Choose your plan.</h2>

         <p className="features">
           <FaCheck className="icon" /> No commitments, cancel anytime!
         </p>
         <p className="features">
           <FaCheck className="icon" /> Everything on Netflix for one low price.
         </p>
         <p className="features">
           <FaCheck className="icon" /> No ads and no extra fees. Ever.
         </p>
         <Link to={'/signup/step-2-1'} className="big-btn">Next</Link>
       </div>
     </RegisterLayout>
  );
};

export default Step2;
