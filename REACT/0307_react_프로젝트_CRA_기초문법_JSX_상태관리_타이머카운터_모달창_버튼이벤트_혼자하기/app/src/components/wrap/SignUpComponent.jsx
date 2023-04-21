import React ,{useEffect,useState}from 'react';
import ModalComponent from './sign_up/ModalComponent';
import '../../scss/signup.scss';
export default function SignUpComponent(){

    const [state,setState] = useState({
        isModal:false,
        modalMsg:'',
        hpOkNumber:0

    });
    //모달열기
    const onClickHpOkNumber=(e)=>{
        e.prevnetDefault();
        let hpOkNumber = 0;

        //5자리랜덤숫자
        hpOkNumber= Math.floor(Math.random()*90000+10000);

        setState({
            ...state,
            isModal:true,
            modalMsg:`휴대폰 인증번호가 전송되었습니다. ${hpOkNumber}`,
            hpOkNumber:hpOkNumber
        })
    }


    //모달닫기함수
    const modalCloseFn =()=>{
        setState({
            ...state,
            isModal:false
        })
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
                                <input type="text" name='user_id' id='userId' placeholder='아이디 입력하세요' />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="password" name='user_pw' id='userPassword' placeholder='비밀번호 입력하세요' />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='user_name' id='userName' placeholder='이름 입력하세요' />
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='user_hp' id='userHp' placeholder='휴대폰 번호 입력하세요' />
                                <button onClick={onClickHpOkNumber} type='button'>인증번호 받기</button>
                            </div>
                        </li>
                        <li>
                            <div>
                                <input type="text" name='user_hpOk' id='userHpOk' placeholder='휴대폰 인증번호 입력하세요' />
                                <button type='button'>인증번호 확인</button>
                                <span>2:59</span>
                            </div>
                        </li>
                    </ul>
                </form>
            </div>
            
           {
                state.isModal && <ModalComponent modalCloseFn={modalCloseFn} modalMsg={state.modalMsg}/>
            } 
        </div>
    );
};