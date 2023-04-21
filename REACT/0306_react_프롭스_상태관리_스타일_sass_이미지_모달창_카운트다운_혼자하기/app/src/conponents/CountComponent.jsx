 import React from 'react';
 import WrapComponent from './WrapComponent.jsx'

 export default function CountComponent(props){
    const [state, setState] = React.useState(props);

    //타이머제작
    const countDown=()=>{
        let cnt =59;
        let setId = 0;
        setId=setInterval(function(){
            cnt--;
            if(cnt<=0){
                clearInterval(setId);
            }
            setState({
                ...state,
                setId:setId
            })
        },1000)
    }
    
    React.useEffect(()=>{
        countDown();
    },[]);
    return (
        <>
        <WrapComponent cnt = {state.cnt}/>
        </>
    );
};

CountComponent.defaultProps = {
    cnt:0,
    setId:0
}
