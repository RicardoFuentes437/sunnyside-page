import React, { useState, useEffect } from 'react';
import '../styles/welcomeStyles.scss';
import PopoverComponent from './Popover';

const Welcome = () => {

    const [isMobile, setMobile] = useState(window.innerWidth <= 800 ? true : false);

    useEffect(() => {
        const handleWindowResize = () => {
            if(window.innerWidth <= 800){
                setMobile(true);
            }

            if(window.innerWidth > 800){
                setMobile(false);
            }
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div id="welcome-section">
            <div id="navbar">
                <img src="images/logo.svg" alt='logo' id="welcome-logo"></img>
                { isMobile ? 
                    <PopoverComponent></PopoverComponent> : 
                    <div id="links-section">
                        <a href='#'>About</a>
                        <a href='#'>Services</a>
                        <a href='#'>Projects</a>
                        <button id="contact-button">CONTACT</button>
                    </div>
                }
            </div>
            <h1>WE ARE CREATIVES</h1>
            <img src="images/icon-arrow-down.svg" alt="arrow-down" id="arrow-down"></img>
        </div>
    );
}

export default Welcome;
