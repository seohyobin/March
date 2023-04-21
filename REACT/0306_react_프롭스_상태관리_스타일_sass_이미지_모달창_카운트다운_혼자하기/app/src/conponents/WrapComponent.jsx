import React from 'react';
import HeaderComponent from './wrap/HeaderComponent.jsx'
import ModalComponent from './wrap/ModalComponent';
import img1 from '../images/photography-img19.jpg';
import '../scss/style_wrap.scss';
export default function WrapComponent (wrapProps,cnt){

    const [state,setState] = React.useState(wrapProps);
    //모달창 닫기
    const modalCloseFn =()=>{
        setState({
            ...state,
            isModal:false
        })
    }

    //모달창 열기
    const modalOpenFn =()=>{
        setState({
            ...state,
            isModal:true
        })
    }
    //카운트 클릭이벤트
    const onClickCount=()=>{
        setState({
            ...state,
            cnt : state.cnt+1
        });
    }


    return (
        <div id='wrap'>
            <div className="container">
                 <h1 cnt={cnt} >WrapComponent</h1>
                 <img src={img1} alt="" />
                 <button onClick={modalOpenFn}>모달창열기</button>
            </div>
            <HeaderComponent cnt={cnt}/>
            {
            state.isModal && <ModalComponent modalCloseFn={modalCloseFn} onClickCount={onClickCount}/>
            }
        </div>
    );
};

WrapComponent.defaultProps = {

    wrapProps:{

        isModal:true,

        }
    }
