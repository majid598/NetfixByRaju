import { Link } from "react-router-dom";
import logo from "../../../public/assets/images/logo.png";
import "./header.css";
const HeaderSignIn = () => {
  return (
    <header className="header-sign-in header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Netflix" />
        </Link>
      </div>
      <div>
        <Link to="/login" className="btn">
          Sing In
        </Link>
      </div>
    </header>
  );
};

export default HeaderSignIn;
