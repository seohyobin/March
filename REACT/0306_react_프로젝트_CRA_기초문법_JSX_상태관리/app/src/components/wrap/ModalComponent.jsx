import React from 'react';
import '../../scss/style_modal.scss'
import imgSrc from '../../imgs/photography-img14.jpg';

export default function ModalComponent({modalCloseFn}){

    const onClickModalClose=(e)=>{
        e.preventDefault();
        modalCloseFn();//모달창 닫기 함수
    }
    return (
        <div id='modal'>
           <div className="wrap">
                <div className="container">
                    <div className="img-box">
                        <img src={imgSrc} alt="" />
                    </div>
                    <button onClick={onClickModalClose}>닫기</button>
                </div>
           </div>
        </div>
    );
};