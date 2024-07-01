import myimage from '../../assets/myphoto.jpg';
import '../about/about.css';
function About() {
    return (
        <section id="about-me">
            <center><h2>About Me</h2></center>
            <div id="aboutme-body">
                <div id="aboutme-image">
                    <img src={myimage} alt="Shubham" id='my-image' />
                </div>
                <div id='aboutme-text'>
                    <p>
                        Hello! I'm Shubham Singh, a passionate web developer and a current B.Tech student at IIT Gandhinagar, majoring in Electrical Engineering with a minor in Computer Science and Engineering.
                        With a keen eye for detail and a love for creating dynamic, user-friendly web applications, I have a strong foundation in both front-end and back-end technologies. I enjoy crafting seamless and responsive websites that provide excellent user experiences.
                        Whether it's building interactive interfaces, optimizing performance, or implementing robust back-end solutions, I strive to deliver high-quality work that meets the needs of clients and users alike. Explore my projects to see the diverse range of skills and expertise I bring to every development challenge.
                    </p>

                    <ul class="socials">
                        <li tabindex="0">
                            <a href="https://github.com/afuadeborah" target="_blank" rel="noopener noreferrer" aria-hidden="true" title="Go to Afua's Github">
                                <span class="fab fa-github" aria-hidden="true"></span>
                            </a>
                        </li>

                        <li tabindex="0">
                            <a href="https://www.linkedin.com/in/meet-afua-frimpong/" target="_blank" rel="noopener noreferrer" aria-hidden="true" title="Go to Afua's LinkedIn">
                                <span class="fab fa-linkedin" aria-hidden="true"></span>
                            </a>
                        </li>

                        <li tabindex="0">
                            <a href="https://twitter.com/afuadeborah_" target="_blank" rel="noopener noreferrer" aria-hidden="true" title="Go to Afua's Twitter">
                                <span class="fab fa-twitter" aria-hidden="true"></span>
                            </a>
                        </li>

                        <li tabindex="0">
                            <a href="https://medium.com/@afuafrimpong4" target="_blank" rel="noopener noreferrer" aria-hidden="true" title="Go to Afua's blog on Medium">
                                <span class="fab fa-medium-m" aria-hidden="true"></span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}
export default About;