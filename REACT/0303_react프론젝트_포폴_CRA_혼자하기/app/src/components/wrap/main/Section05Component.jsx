import React from 'react';

function Section05Component(){
    return (
        <section id="section5">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="title">
                            <h2>SERVICES</h2>
                        </div>
                    <div className="left-right">
                        <div className="left">
                            <figure>
                                <img src="./img/home-classic-corporate-services-left-img.png" alt=""/>
                            </figure>
                        </div>
                        <div className="right">
                            <ul>
                                <li><h2>Beautifully handcrafted templates for your website</h2></li>
                                <li>
                                    <div className="icon-text">
                                        <div><i className="fa fa-check"></i><p>Beautiful and easy to understand UI, professional animations</p></div>
                                        <div><i className="fa fa-check"></i><p>Theme advantages are pixel perfect design & clear code delivered</p></div>
                                        <div><i className="fa fa-check"></i><p>Present your services with flexible, convenient and multipurpose</p></div>
                                        <div><i className="fa fa-check"></i><p>Find more creative ideas for your projects</p></div>
                                        <div><i className="fa fa-check"></i><p>Unlimited power and customization possibilities</p></div>
                                    </div>
                                </li>
                                <li><button>OUR SERVICES</button></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section05Component;