import React from 'react';
import img2 from '../../images/photography-img19.jpg';
import '../../scss/style_modal.scss';
export default function ModalComponent ({modalCloseFn}){
    const onClickModalClose=(e)=>{
        e.preventDefault();
        modalCloseFn();
    }

    return (
        <div id='modal'>
            <div className="wrap">
                <div className="container">
                    <div className="img-box">
                        <img src={img2} alt="" />
                    </div>
                    <button onClick={onClickModalClose}>CLOSE</button>
                </div>
            </div>
        </div>
    );
};
