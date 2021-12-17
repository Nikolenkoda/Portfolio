import React from "react";
import Modal from './Modal.js';

const AboutMe = () => {
    return (
        <div className='about-me'>
            <div>
                <Modal />
            </div>
            <a href="https://github.com/Nikolenkoda">
                <img className='about-me__image' src="components/logo/github.png" />
            </a>
            <a href="https://t-do.ru/nikolenko_da">
                <img className='about-me__image' src="components/logo/telegram.png" ></img>
            </a>
            {/* <div>
                <h1 className='about-me__text'>I'm a Front End Developer<br/> in <br/>Saratov</h1>
            </div> */}
        </div>
    );
}

export default AboutMe;