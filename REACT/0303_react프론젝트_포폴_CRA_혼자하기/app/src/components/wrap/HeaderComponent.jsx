import React from 'react';

function HeaderComponent (){
    return (
        <header id="header">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="logo">
                            <a href="#wrap" className="logo-btn" title="HOME">
                                <img src="./img/home-classic-corporate-logo.png" alt=""/>
                            </a>
                        </div>
                        <nav id="right">
                            <ul>
                                <li><a href="#section2" className="main-btn " title="ABOUT">ABOUT</a></li>
                                <li><a href="#section4" className="main-btn" title="PORTFOLIO">PORTFOLIO</a></li>
                                <li><a href="#section5" className="main-btn" title="SERVICES">SERVICES</a></li>
                                <li><a href="#section9" className="main-btn" title="TESTIMONIAL">TESTIMONIAL</a></li>
                                <li><a href="#section10" className="main-btn" title="BLOG">BLOG</a></li>
                                <li><a href="#section11" className="main-btn" title="CONTACT">CONTACT</a></li>
                            </ul>
                        </nav>
                        <div id="mobileNav">
                            <a href="!#" className="mobile-btn">
                                <i className="line line1"></i>
                                <i className="line line2"></i>
                                <i className="line line3"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;