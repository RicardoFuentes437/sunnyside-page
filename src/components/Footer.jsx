import React from 'react';
import '../styles/footerStyles.scss';

const Footer = () => {
    return (
        <div id="footer-section">
            <img src='images/logo.svg' alt="logo" id="footer-logo"></img>
            <div id="sunnyside-info">
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Projects</a>
            </div>
            <div id="socials">
                <img src='images/icon-facebook.svg' alt="facebook"></img>
                <img src='images/icon-instagram.svg' alt="instagram"></img>
                <img src='images/icon-twitter.svg' alt="twitter"></img>
                <img src='images/icon-pinterest.svg' alt="pinterest"></img>
            </div>
        </div>
    );
}

export default Footer;
