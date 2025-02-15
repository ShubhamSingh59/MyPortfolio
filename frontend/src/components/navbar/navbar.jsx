//import { useState } from 'react'
import '../navbar/navbar.css'
function Navbar() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark" aria-label="Offcanvas navbar large">
                <div class="container-fluid">
                    <a className="navbar-brand" href="#">
                        Shubham Singh
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#project-head">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#contactme">Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="" onClick={()=>window.open('https://drive.google.com/uc?export=download&id=1ZQU__KmpaLR34XGUYdyjYKHpWH4WR1tR')}>Resume</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#about-me">About Me</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}
export default Navbar;