import React from 'react';

function Section11Component(){
    return (
        <section id="section11">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h2>CONTACT US</h2>
                    </div>
                    <div className="content">
                        <div className="left-box">
                            <div className="col-gap">
                                <ul>
                                    <li>
                                        <i className="icon-phone"></i>
                                        <div>
                                            <h3>CALL US AT</h3>
                                            <a href="!#">123-456-7890</a>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="icon-map-pin"></i>
                                        <div>
                                            <h3>580 Pitner Ave #2</h3>
                                            <h4>Victoria, United States</h4>
                                        </div>
                                    </li>
                                    <li>
                                        <i className="icon-envelope"></i>
                                        <div>
                                            <h3>EMAIL US AT</h3>
                                            <a href="!#">sales@domain.com</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-box">
                            <div className="col-gap">
                                <form name="message_form" id="formMessage" method="post" action="">
                                    <ul>
                                        <li>
                                            <input type="text" name="name" id="name" placeholder="* YOUR NAME"/>
                                        </li>
                                        <li>
                                            <input type="text" name="email" id="email" placeholder="* YOUR EMAIL"/>
                                        </li>
                                        <li>
                                            <textarea name="message" id="message" placeholder="* YOUR MESSAGE"></textarea>
                                        </li>
                                        <li>
                                            <button type="submit" className="submit-btn">SEND MESSAGE</button>
                                        </li>
                                        <li>
                                            <h3>* PLEASE COMPLETE ALL FIELDS CORRECTLY</h3>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section11Component;