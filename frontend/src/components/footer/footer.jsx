import "./footer.css";
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <a href="">Questions? contact us</a>
                <div className="footer-lists">
                    <ul>
                        <li>
                            <a href="">FAQ</a>
                        </li>
                        <li>
                            <a href="">Media</a>
                        </li>
                        <li>
                            <a href="">Ways to watch</a>
                        </li>
                        <li>
                            <a href="">cookie preferences</a>
                        </li>
                        <li>
                            <a href="">Speed test</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">Help Center</a>
                        </li>
                        <li>
                            <a href="">Investor Relations</a>
                        </li>
                        <li>
                            <a href="">Terms of use</a>
                        </li>
                        <li>
                            <a href="">Corporate Information</a>
                        </li>
                        <li>
                            <a href="">Legal Notices</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">Account</a>
                        </li>
                        <li>
                            <a href="">Jobs</a>
                        </li>
                        <li>
                            <a href="">Privacy</a>
                        </li>
                        <li>
                            <a href="">Contact us</a>
                        </li>
                        <li>
                            <a href="">Only on Netflix</a>
                        </li>
                    </ul>
                </div>
                {/* <div className="lang-selector"> */}
                <select className="lang-selector" name="" id="">
                    <option value="">English</option>
                    <option value="">Hindi</option>
                </select>
                {/* </div> */}
                <p>Netflix Pakistan</p>
                <h2 className="font-bold text-2xl">
                    &copy; Mr Raju all rights reserved.
                </h2>
            </footer>
        </>
    );
};

export default Footer;
