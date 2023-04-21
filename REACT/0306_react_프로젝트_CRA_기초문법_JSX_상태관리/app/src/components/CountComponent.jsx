import React from 'react';
import WrapComponent from './WrapComponent.jsx';
export default function CountComponent(props){

    const [state, setState]= React.useState(props);
    //카운트 함수
    //타이머제작
    const countDown=()=>{
        let cnt = 59;
        let setId = 0;
        setId = setInterval(function(){
            cnt--;
            if(cnt<=0){
                clearInterval(setId);
            }

            setState({
                ...state,
                cnt:cnt,
                setId:setId
            })
        },500);
    }


    React.useEffect(()=>{
        //countDown(); //로딩시 불러줘

        // setState({
        //     ...state, //전개연산자 타이틀 하나만 수정, 나머지는 그대로 둬
        //     타이틀:'상태관리 타이틀 수정 내용',
        //     이름:'김유신'
        // });
        countDown();
        
    },[] ); //빈배열처리===>로딩시 1회만 실행하고 끝

    return (
        
        <>
            <WrapComponent cnt={state.cnt}/>
        </>
    );
};

CountComponent.defaultProps = {
    cnt:0,
    setId:0
}
