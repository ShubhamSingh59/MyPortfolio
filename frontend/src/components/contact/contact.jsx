import './contact.css'

function Contact() {
    return (<>
        <center><h2>Contact Me</h2></center>
        <section id="contactme" >
            <div id="contact-form">
                <form id="form">
                    <input type="text" id="name" placeholder="Full Name" />
                    <input type="email" id="email" placeholder="Email Address" />
                    <input type="text" id="text" placeholder="Message" />
                    <button type='submit' id='btn'>Send</button>
                </form>
            </div>
            <div id="contact-socials">
                <div id="social">
                    <ul>
                        <li>
                            <a href="">
                                <span className="fa-brands fa-instagram"></span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="fa-brands fa-facebook-f"></span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="fa-brands fa-twitter"></span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="fa-brands fa-linkedin"></span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div id='details'>
                    <span className='detail-item'><i class="fa fa-user"></i>Shubham Singh</span>
                    <span className='detail-item'><i class="fa fa-phone"></i>1236547890</span>
                    <span className='detail-item'><i class="fa fa-envelope"></i>shubhams@iitgn.ac.in</span>
                </div>
            </div>

        </section>
    </>
    )
}

export default Contact;