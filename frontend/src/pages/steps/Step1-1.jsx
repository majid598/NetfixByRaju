import "./steps.css";
import { useGlobalContext } from "../../states/context/globalContext";
import { Link } from "react-router-dom";
import RegisterLayout from "../register/RegisterLayout";

const Step11 = () => {
  const { email, onChanger, password } = useGlobalContext();
  return (
     <RegisterLayout>
       <div className="step-1-2 slide-in-left ">
         <span>STEP 1 OF 3</span>
         <h2>Create a password to start your membership</h2>

         <p>Just a few more steps and you're done!</p>
         <p>we hate paperwork, too.</p>
         <form>
           <div>
             <input
                type="email"
                name="email"
                value={email}
                onChange={onChanger}
                placeholder="email"
                autoComplete="off"
                className="input bg-white"
                required
                minLength={15}

             />
           </div>
           <div>
             <input
                type="password"
                name="password"
                value={password}
                onChange={onChanger}
                placeholder="password"
                className="input bg-white"
                required
                minLength={3}
             />
           </div>
           <div>
             <input type="checkbox" placeholder="" className="input-email" />
             <span>please do not email me netflix special offers</span>
           </div>
         </form>
         <Link to={"/signup/step-2"} className={`big-btn ${email.length < 15 || password.length < 3 ? 'pointer-events-none bg-red-400' : ''}`}>
           Next
         </Link>
       </div>
     </RegisterLayout>
  );
};

export default Step11;
