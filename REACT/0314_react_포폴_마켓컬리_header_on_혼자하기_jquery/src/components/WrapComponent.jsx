import React from 'react';
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';

export default function WrapComponent(){
    return (
        <div id='wrap'>
            <TopModalComponent/>
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
        </div>
    );
};

