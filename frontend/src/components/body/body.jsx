import '../body/body.css'
import React, { useRef } from 'react';
function Body(){
    
    return(
        <section id="main-body">
            <div id='welcome-text'>
                <p>Welcome to my website! I'm Shubham Singh, a dedicated web developer. Explore my projects and let's connect!</p>
            </div>
            <button id='button1' className='btn btn-primary' >Learn More</button>
        </section>
    )
}

export default Body;