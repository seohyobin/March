import React from 'react';
import '../../../scss/modal.scss';



export default function ModalComponent({isTimer,isTimerFn,modlaCloseFn,modalMsg}){

    const onClickModalClose =(e)=>{
        e.preventDefault();
        modlaCloseFn(); //상위(부모)컴포넌트의 모달 닫기 함수 실행
        isTimer && isTimerFn(); //티이머 실행함수 호출 (조상컴퍼넌트에 함수를 호출 실행)
        
        
        
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
