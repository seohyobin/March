import React from 'react';

function Section04Component(){
    return (
        <section id="section4">
            <div className="container">
                <div className="gap">
                    <div className="title"><h2>PORTFOLIO</h2></div>
                    <div className="content">
                        <nav id="gallery-nav">
                            <ul>
                                <li><a href="!#" className="gallery-btn on">ALL</a></li>
                                <li><a href="!#" className="gallery-btn">WEB</a></li>
                                <li><a href="!#" className="gallery-btn">DESIGN</a></li>
                                <li><a href="!#" className="gallery-btn">BRANDING</a></li>
                                <li><a href="!#" className="gallery-btn">ADVERTISING</a></li>
                            </ul>
                        </nav>
                        <div id="gallery-box">
                            <ul>
                                <li>
                                    <div className="col-gap">
                                        <figure className="img-box">
                                            <img src="./img/portfolio-01-2.jpg" alt=""/>
                                            <figcaption>
                                                <h3>Herbal Beauty Salon</h3>
                                                <h4>PHOTOGRAPHY</h4>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-gap">
                                        <figure className="img-box">
                                            <img src="./img/portfolio-02-3.jpg" alt=""/>
                                            <figcaption>
                                                <h3>Pixflow Studio</h3>
                                                <h4>Branding</h4>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-gap">
                                        <figure className="img-box">
                                            <img src="./img/portfolio-03-1.jpg" alt=""/>
                                            <figcaption>
                                                <h3>Third Eye Glasses</h3>
                                                <h4>Graphics</h4>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-gap">
                                        <figure className="img-box">
                                            <img src="./img/portfolio-04-1.jpg" alt=""/>
                                            <figcaption>
                                                <h3>RedDot Media</h3>
                                                <h4>Design</h4>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-gap">
                                        <figure className="img-box">
                                            <img src="./img/portfolio-05-3.jpg" alt=""/>
                                            <figcaption>
                                                <h3>Banana Design</h3>
                                                <h4>Design</h4>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-gap">
                                        <figure className="img-box">
                                            <img src="./img/portfolio-06-2.jpg" alt=""/>
                                            <figcaption>
                                                <h3>Rubber Studio</h3>
                                                <h4>Graphics</h4>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-gap">
                                        <figure className="img-box">
                                            <img src="./img/portfolio-07-2.jpg" alt=""/>
                                            <figcaption>
                                                <h3>Kaya Skin Care</h3>
                                                <h4>Photography</h4>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                                <li>
                                    <div className="col-gap">
                                        <figure className="img-box">
                                            <img src="./img/portfolio-08-2.jpg" alt=""/>
                                            <figcaption>
                                                <h3>Tailoring Interior</h3>
                                                <h4>Branding</h4>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section04Component;