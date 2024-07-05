import './footer.css'
function Footer() {
    return (
        <footer id='footer'>
            <div id='company-tag'>
                <span>© 2024 Shubham Singh</span>
            </div>
            <div id='socials'>
                <ul id='social-id'>
                    <li>
                        <a href="#">
                            <span class="fab fa-instagram" aria-hidden="true"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="fa-brands fa-facebook-f" aria-hidden="true"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="fa-brands fa-twitter" aria-hidden="true"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;