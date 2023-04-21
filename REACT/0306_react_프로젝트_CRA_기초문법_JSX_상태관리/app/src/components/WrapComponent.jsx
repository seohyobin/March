import React from "react";
import HeaderComponent from'./wrap/HeaderComponent.jsx';
import ModalComponent from'./wrap/ModalComponent.jsx';
import '../css/style_wrap.css'; //src내에 css style 가져오기
import '../scss/style.scss';

export default function WrapComponent({wrapProps,cnt}){

    //상태관리 변수 대명사 : 스테이트 state
    //상태관리 변수 수정(설정 세터 setter) : 셋스테이트 setState
    //리액트에서 모든 프롭스(변수)를 상태관리에게 넘겨준다.
    const [state, setState] = React.useState(wrapProps);//리액트 상태관리 훅

    // h1 클릭 이벤트 =>타이틀 수정
    //1.JSX 태그요소에서 onClick 이벤트 ={실행할이벤트함수생성}
    //2.함수 등록하기 화살표함수식으로 등록한다.
    //3.클릭 이벤트 새로고침 제거
    //4.타이틀 수정 setter => 타이틀 
    const onClickTitleUpdate =(e)=>{
        e.preventDefault();
        setState({
            ...state,
            타이틀 :'상태관리 타이틀 변수 내용 setstate() 함수를 이용 변경했습니다.'
        });
    }

    //h2 클릭 이벤트 ====>이름변경

    const onClickName=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            이름:'김유신'
        });
    }

    //카운트 클릭 이벤트 : 부모(상위) 컴포넌트의 함수를 자식이 호출하여 실행하면 다양함 응용이 가능
    const onClickCount=()=>{
        setState({
            ...state,
            cnt : state.cnt+1
        });
    }

    //모달 닫기 함수===>자식컴퍼넌트 모달창에세 프롭스로 내려보낸다. 

    const modalCloseFn=()=>{
        setState({
            ...state,
            isModal:false
        })
    }
        //모달 열기 함수===>자식컴퍼넌트(headerComponent) 모달창으로 프롭스로 내려보낸다. 

        const modalOpenFn=()=>{
            setState({
                ...state,
                isModal:true
            })
        }

    return(
        <div id="wrap">
            <h1 style={style.h1} onClick={onClickTitleUpdate}>{state.타이틀}</h1>
            <h2 style={style.h2} onClick={onClickName}>{state.이름}</h2>
          
            <HeaderComponent modalOpenFn={modalOpenFn} 이름={state.이름} cnt={cnt} onClickCount={onClickCount} />

            {/* 모달창 ModalComponent */}
            {
               state.isModal && <ModalComponent modalCloseFn={modalCloseFn}/> //조건부연산자 
            }

        </div>
    )
}

WrapComponent.defaultProps = {
    wrapProps:{
        타이틀:'랩퍼 컴퍼넌트입니다.',
        이름:'이순신',
        아이디:'lsdlfj',
        비밀번호:'asdfg123',
        isModal: false //모달창 초기값 false(안보임 hide) //true이면 모달창 보임(show)
    }
}

//WrapComponent 내부스타일 =>객체 속성 스타일
const style={
    h1:{
        fontSize:'100px',
        color:'#29c',
        padding:'20px',
        lineHeight:'200%'
    },
    h2:{
        padding:'10px',
        fontSize:'50px',
        color:'#c29' 
    }

}

