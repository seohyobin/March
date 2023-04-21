import React, { Component } from 'react';
import HeaderComponent from './Wrap/HeaderComponent';
import MainComponent from './Wrap/MainComponent';
import FooterComponent from './Wrap/FooterComponent';

import '../scss/reset.scss';


class WrapComponent extends Component {
    render() {
        return (
            <div id='wrap'>
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
            </div>
        );
    }
}

export default WrapComponent;