import React from 'react';
import '../../scss/style_header.scss';

function HeaderComponent ({cnt}){
    return (
        <header id='header'>
            <h2>{cnt}</h2>
        </header>
    );
};

export default HeaderComponent;