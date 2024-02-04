/* eslint-disable react-hooks/exhaustive-deps */
import HeaderSignIn from "../../components/header/Headersignin";
import FooterSignIn from "../../components/footer/FooterSignIn";
import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../states/context/globalContext";

// eslint-disable-next-line react/prop-types
const RegisterLayout = ({ children }) => {
  const {isAuthenticated} = useGlobalContext();
  const navigate = useNavigate();
  useEffect(() => {
    
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);
  return (
    <Fragment>
      <HeaderSignIn />
      <div className="steps-div">{children}</div>
      <FooterSignIn />
    </Fragment>
  );
};

export default RegisterLayout;
