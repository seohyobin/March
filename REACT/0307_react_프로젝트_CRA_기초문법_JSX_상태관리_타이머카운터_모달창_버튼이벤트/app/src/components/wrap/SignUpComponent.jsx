import React ,{useEffect,useState}from 'react';
import ModalComponent from './sign_up/ModalComponent';
import '../../scss/signup.scss';
export default function SignUpComponent({isTimerFn,timerClear,setId, seconds, minutes, timerMsg}){

    const [state,setState] = useState({
        isModal: false,//boolean
        modalMsg:'',//string
        hpOkNumber:0,//number
        아이디:'',
        비밀번호:'',
        이름:'',
        휴대폰번호:'',
        휴대폰인증번호:'',
        isUserHp:true,
        isUserHpOk:true,
        isTimer:false

    });
    //1.아이디 입력상자 onChange이벤트(키보드로 입력값을 받는 이벤트)
    const onChangeUserId=(e)=>{
        setState({
            ...state,
            아이디:e.target.value
        });
    }
    //2.비밀번호 입력상자 onChange이벤트
    const onChangeUserPassword=(e)=>{
        setState({
            ...state,
            비밀번호:e.target.value
        });
    }
    //3.이름 입력상자 onChange
    const onChangeUserName=(e)=>{
        setState({
            ...state,
            이름:e.target.value
        });
    }
    //4.휴대폰번호 입력상자 onChange
    const onChangeUserHp=(e)=>{
        let isUserHp = true;

        if(e.target.value.length >1){
            isUserHp=false;
        }
        else{
            isUserHp=true;
        }
        setState({
            ...state,
            휴대폰번호:e.target.value,
            isUserHp:isUserHp
        });
    }
    //5.휴대폰인증변호 입력상자
    const onChangeUserHpOk=(e)=>{
        let isUserHpOk = true;

        if(e.target.value.length > 1){
            isUserHpOk = false;
        }
        else{
            isUserHpOk = true;
        }

        setState({
            ...state,
            휴대폰인증번호:e.target.value,
            isUserHpOk :isUserHpOk

        });
    }

    //6.인증번호 받기 버튼 클릭이벤트
    
    //모달창 열기 클링 이벤트
     const onClickHpOkNumber=(e)=>{
        e.preventDefault();
        let hpOkNumber =0;

        //6자리의 랜덤(random)한 번호를 만들자~
        hpOkNumber = Math.floor(Math.random()*900000+100000);
        
        
        setState({
            ...state,
            isModal:true,
            modalMsg:`휴대폰 인증번호가 전송되었습니다. ${hpOkNumber}`,
            hpOkNumber:hpOkNumber,
            isTimer:true // 모달창 닫기 할때 true이면 타이머 동작 시작한다.
        })
     }
     
    //모달창 닫기 함수=> 모달창에서 확인버튼 클릭하면 호출 되어서 실행 이벤트
     const modlaCloseFn=()=>{
        setState({
            ...state,
            isModal:false
        })
     }

     // 인증번호 비교
     const onClickOkIf=(e)=>{
        e.preventDefault();
        let modalMsg ='';
        //상태관리 인증번호와 휴대혼 인증번호 입력상자(hpOkNumber)에 입력된 인증번호를 비교
        if(state.hpOkNumber=== Number(state.휴대폰인증번호)){
            modalMsg='인증되었습니다.';
            //타이머 정지하기
            timerClear();//상위컴퍼넌트에서 타이머 중지 함수 호출실행
        }
        else{
            modalMsg='인증번호를 다시 확인하세요.';
        }
        setState({
            ...state,
            isModal:true,
            modalMsg:modalMsg
        });
     }

    return (
        <div id='signUp'>
            <div className="title">
                <h1>회원가입폼</h1>
            </div>
            <div className="content">   
                <form name='sign_up' id='signUp' method='post' action='./sign_up.php'>
                    <ul>
                        <li>
                            <div>
                                <input onChange={onChangeUserId} type="text" name='user_id' id='userId' placeholder='아이디 입력하세요' />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input onChange={onChangeUserPassword} type="password" name='user_pw' id='userPassword' placeholder='비밀번호 입력하세요' />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input onChange={onChangeUserName} type="text" name='user_name' id='userName' placeholder='이름 입력하세요' />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input 
                                onChange={onChangeUserHp} 
                                type="text" 
                                name='user_hp' 
                                id='userHp' 
                                placeholder='휴대폰 번호 입력하세요' />
                                <button 
                                    onClick={onClickHpOkNumber} 
                                    type='button' 
                                    disabled={state.isUserHp}/* isUserHp 변수 값이 false이면 버튼 사용 가능//// false이면 addclass, true 이면removeclass  */
                                    className={state.isUserHp === false ? `on`:'' }
                                    >인증번호 받기</button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input 
                                onChange={onChangeUserHpOk} 
                                type="text" 
                                name='user_hpOk' 
                                id='userHpOk' 
                                placeholder='휴대폰 인증번호 입력하세요' />
                                <button 
                                    onClick={onClickOkIf}  
                                    type='button' 
                                    disabled={state.isUserHpOk}
                                    className={state.isUserHpOk === false ? `on`:'' }
                                    >인증번호 확인</button>
                                    <span>{minutes<10?`0${minutes}`:minutes}:{seconds<10? `0${seconds}`:seconds}</span>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
            
           {
                state.isModal && <ModalComponent isTimer={state.isTimer} isTimerFn={isTimerFn} modlaCloseFn={modlaCloseFn} modalMsg={state.modalMsg}/>
            } 
        </div>
    );
};