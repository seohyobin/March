import React from 'react';
import { useState } from 'react';
import '../../../scss/modal.scss';



export default function ModalComponent({modalCloseFn,modalMsg}){

    const onClickModalClose =(e)=>{
        e.preventDefault();
        modalCloseFn();
    }



    return (
        <div id='modal'>
            <div className="wrap">
                <div className="container">
                    <div className="content">
                        <div className="msg-box">
                            <p>{modalMsg}</p>
                        </div>
                        <div className="btn-box">
                            <button onClick={onClickModalClose}>확인</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
