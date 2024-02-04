import "./footer.css";

const FooterSignIn = ({ classes }) => {
    return (
        <footer className={`${classes}  footer footer-sign-in`}>
            <a href="">Questions? contact us</a>
            <div className="footer-lists">
                <ul>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <a href="">Privacy</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">Help Center</a>
                    </li>
                    <li>
                        <a href="">cookie preferences</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">Netflix Shop</a>
                    </li>
                    <li>
                        <a href="">Corporate Information</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">Terms of Use</a>
                    </li>
                </ul>
            </div>
            <h2 className="font-bold text-white text-2xl">
                &copy; Mr Raju all rights reserved.
            </h2>
        </footer>
    );
};

export default FooterSignIn;
