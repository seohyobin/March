import React from 'react';
import axios from 'axios';

//내부와 섞이는걸 방지하기위해 회원가입,timer로 넣은 => 원래는 중괄호없이 props=>({안에 넣어})
export default function SignUpComponent({회원가입, timer,timerCounterfn,mapAddressFn}) {
    //상위컴포넌트(wrap) 프롭스
    const {setId,minutes,seconds,msg,isEnd} = timer;

    const [state, setState] = React.useState(회원가입);
    //const createRef = React.createRef(); // 입력상자 태그요소 휴대폰을 선택함.(참조함)
    const createRef = React.useRef(); // 입력상자 태그요소 휴대폰을 선택함.(참조함)
    //useRef-> 새로고침 해야만 증가값 보인다.
    //useRef-> 새로고침해도 증가값이 유지된다.

    //state-> 상태변수 새로고침하면 새로 시작 초기화
    //state-> 상태변수 변경되면 화면이 다시 그려진다. ===>마운트된다.
    // let cnt = React.useRef(0); // 입력상자 태그요소 휴대폰을 선택함.(참조함)


    //타이머 카운트 점검 : 유효시간 만료 istimeend 변수 만들어서 true false  해도 가능
    React.useEffect(()=>{
          
            setState({
                ...state,
                isConfirmModal:isEnd, //모달 오픈 변수
                confirmModalMsg:msg //모달 메세지 변수
            })
        

    },[isEnd]); //false 에서 true 로 변경 시점에 실행


    //1.아이디 입력상자 onChange 이벤트
    const onChangeUserId=(e)=>{ 

        //입력제한조건 
        //정규표현식만들기
        //1.특수문자 입력즉시 삭제  ==> \- \] \\ 이스케이프 문자처리!!! replace()
        //2.6자 ~ 16자 이하 test()
        //3.한글 사용 불가 test()
        //4.영문 필수,숫자선택=>1가지 이상 영문 ,숫자 조합 test()
        //5.공백사용안됨 test()
        //툭수문자 \\는 2번써야지 문자로 표현

        const {value} = e.target;  // 비구조화 === 구조분할할당
        const regEx1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;   //특수문자
        const regEx2 = /^(.){6,16}$/g;   //6자 이상 16자 이하
        const regEx3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;   // 한글 
        const regEx4 = /[A-Za-z]+[0-9]*/g;   // 영문필수 1자이상 +,  숫자선택 0자이상 *
        const regEx5 = /\s/g;   // 공백

        let 아이디 = '';
        let isIdError = false;
        let errorMsg = '';

        //1)문자열.replace(정규식,'바꿀문자열'); //특수문자를 공백으로 치환 //특수문자이면  true 아니면 false
        아이디 = value.replace(regEx1,'');
         //console.log(regEx1.test(value)); 

        //2)테스트 정규식.test(문자열) {6,16} 범위이면 true 아니면 false
        //3)테스트 정규식.test(문자열) 한글사용하면 true 아니면 false
        //4)테스트 정규식.test(문자열) 영문필수 이상+,   숫자선택0자이상 *  
        //5)테스트 정규식.test(문자열) 공백 사용 불가 
        if(regEx2.test(value) ===false || regEx3.test(value)===true || regEx4.test(value)===false ||regEx5.test(value)===true ){
            //console.log('6자이상 16자 이하로 입력해주세요');
            errorMsg='6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합';
            isIdError=true;
        }
        else{
            //console.log('정상입니다');
            errorMsg='';
            isIdError=false;

        }

        setState({
            ...state,
            아이디:아이디,
            isIdError:isIdError,
            errorMsg:errorMsg

        })
    }
     
    //2.아이디 중복확인버튼 onClick 이벤트
    const onClickUserIdOk=(e)=>{
        e.preventDefault();
        const value = state.아이디;  // 상태관리 값 변수에 대입
        const regEx1 = /[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]/g;   //특수문자
        const regEx2 = /^(.){6,16}$/g;   //6자 이상 16자 이하 시작 끝 지정해야 정확함.
        const regEx3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;   // 한글 
        const regEx4 = /[A-Za-z]+[0-9]*/g;   // 영문필수 1자이상 +,  숫자선택 0자이상 *
        const regEx5 = /\s/g;   // 공백

        if(regEx2.test(value) ===false || regEx3.test(value)===true || regEx4.test(value)===false ||regEx5.test(value)===true ){
            setState({
                ...state,
                isConfirmModal:true,
                confirmModalMsg:'6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합'
            })
        
        }
        else{
            //아이디 중복검사 실시
            //가져오는 방법은 REST API 사용 AJAX 또는  AXIOS  JSON데이터 처리에 가장 적합한 패키지
            //서버에서 DB에 저장된 아이디 데이터를 가져온다.
            //서버사이드 스크립트 언어가 MYSQL SQL명령문 이용 가지고 온다.
            //그리고 입력된 아이디랑 비교한다.
            //정보요청  Request 

            axios({
                url:'http://luck1409.dothome.co.kr/signup_db/select.php',
                method: 'GET'
            })
            .then((res)=>{
                
                console.log( res );
                console.log( res.data );

                // 맵함수이용 화살표함수 중괄호 빼고 사용하면
                // 비교 결과 true, false 배열로 곧바로 리턴 값

                const result = res.data.map((item)=>item.아이디===state.아이디);
                console.log( result );
                // result[false, false, false, true, ......]
                if( result.includes(true) ){
                    setState({
                        ...state,
                        isConfirmModal:true,
                        confirmModalMsg:'사용 불가능한 아이디 입니다.'
                    })
                }
                else{
                    setState({
                        ...state,
                        isConfirmModal:true,
                        confirmModalMsg:'사용 가능한 아이디 입니다.'
                    })
                }
            })
            .catch((err)=>{
                console.log(`AXIOS 실패! ${err} `)
            });    
        }

    }
    //3.비밀번호
            //입력제한조건
        //1)10자이상 16자이하
        //(영문숫자)+(숫자영문)+(영문특수문자)+(특수문자영문)+(숫자특수문자)+(특수문자숫자)+
        //2)([영문(1자이상)]+[숫자(1자이상)]+)  2가지이상조합 그룹1  +이거나 | 
        //  ([영문(1자이상)]+[특수문자(1자이상)]+)  2가지이상조합 그룹2 이거나 |  ====>3그룹 번갈아 가면서 3그룹*2 =>6그룹
        //  ([숫자(1자이상)]+[특수문자(1자이상)]+)  2가지이상조합 그룹3 이거나 |
        //3)한글사용안돼
        //4)공백사용안돼
        //5)동일한 숫자 3개이상 연속 사용 불가
    const onChangeUserPw1 =(e)=>{
        const {value} = e.target;
        let isPwError=false;
        let isPwMsg='';

        // const regEx1 = /[`~!@#$%^&*()-_=+,<.>/?;:'"\\|[{}]/g; 
        // const regEx2 = /.{6,16}/g;  //입력제한 6자 이상 16자 이하
        // const regEx3 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;  //한글
        // const regEx4 = /[A-Za-z]+[0-9]*/g;  //영문필수->한글자 이상+,  무조건 나와야함  숫자선택0자이상 *  \d 도 숫자
        // const regEx5 = /\s/g;  //공백문자 사용 불가  

        const regExp1 = /.{10,16}/g; //1)10자이상 16자이하true
        const regExp2 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;  //3)한글사용안돼 false이면 정상
        const regExp3 = /\s/g; //4)공백사용안돼 false이면 정상
        const regExp4 = /(\d)\1\1/g;  //5)동일한 숫자 3개이상 연속 사용 불가 false 이면 정상
        const regExp5 = /([A-Za-z]+[0-9]+)+|([0-9]+[A-Za-z]+)+|([A-Za-z]+[`~!@#$%^&*()-_=+,<.>/?;:'"\\|[{}]+)+|([`~!@#$%^&*()-_=+,<.>/?;:'"\\|[{}]+[A-Za-z]+)+|([0-9]+[`~!@#$%^&*()-_=+,<.>/?;:'"\\|[{}]+)+|([`~!@#$%^&*()-_=+,<.>/?;:'"\\|[{}]+[0-9]+)+/g;

        if(regExp1.test(value)===false){
            isPwError=true;
            isPwMsg='최소 10자이상 입력';
        }
        else if(regExp2.test(value)===true ||regExp5.test(value)===true || regExp3.test(value)===true  ){
            isPwError=true;
            isPwError='영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합';
        }
        else if(regExp4===true){
            isPwError = true;
            isPwMsg = '동일한 숫자 3개 이상 연속 사용 불가';
        }
        else{
            isPwError=false;
            isPwMsg='';
        }
        setState({
            ...state,
            isPwError:isPwError,
            isPwMsg:isPwMsg,
            비밀번호:value
        })
    }


    //4.비밀번호확인
      //1)공백이면 : 비밀번호를 한번 더 입력해주세요.
      //  비밀번호 확인 입력 값 다르면 : 동일한 비밀번호를 입력
    const onChangeUserPw2 =(e)=>{
        const {value} = e.target;

        let isPw2Error= false;
        let isPw2Msg = '';

        if(value===''){
            isPw2Error= true;
            isPw2Msg='비밀번호를 한번 더 입력해주세요'
        }
        else if(value!==state.비밀번호){
            isPw2Error= true;
            isPw2Msg='동일한 비밀번호를 입력';
        }
        else{
            isPw2Error= false;
            isPw2Msg='';
        }
        setState({
            ...state,
            isPw2Error:isPw2Error,
            isPw2Msg : isPw2Msg,
            비밀번호확인:value
        })

        
        
    }   

    //5.이름
        //1)특수문자 입력과 동시에 삭제
        //2)공백이면 이름을 입력해주세요


    const onChangeUserName=(e)=>{
        const {value} = e.target;

        let isNameError=false;
        let isNameMsg='';
        let 이름='';

        const regExp =  /[`~!@#$%^&*()-_=+,<.>/?;:'"\\|[{}]/g; 
        이름 = value.replace(regExp,'');
        
        if(이름===''){
            isNameError=true;
            isNameMsg ='이름을 입력해주세요';
        }
        else{
            isNameError=false;
            isNameMsg ='';
        }
        setState({
            ...state,
            isNameError:isNameError,
            isNameMsg :isNameMsg,
            이름:이름
        })


    }

    //6.이메일
    const onChangeUserEmail=(e)=>{
        const {value} = e.target;
        let isEmailError = false;
        let isEmailMsg= '';
        // 맨앞 (영문숫자한글)필수(.)?(영문숫자한글)선택 @ (영문숫자한글-_.)필수 \.영문만{2,3}  맨뒤 
        //i눈 ignore 영문 대소문자 구별없음
        const regExp = /^[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*_\-|+='/?{}]+(\.)?[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*_\-|+='/?{}]*@[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*_\-|+='/?{}]+\.[a-z]{2,3}$/gi;
        if(value===''){
            isEmailError=true;
            isEmailMsg='이메일 형식으로 입력해주세요.'
        }
        else if(regExp.test(value)===false){
            isEmailError=true;
            isEmailMsg='이메일 형식으로 입력해주세요.'
        }
        else{
            isEmailError=false;
            isEmailMsg=''
        }


        setState({
            ...state,
            isEmailError:isEmailError,
            isEmailMsg:isEmailMsg,
            이메일:value
        })
    }
    //6-1이메일 확인
    const onClickUserEmailOk=(e)=>{
            e.preventDefault();
            const value = state.이메일;
            const regExp = /^[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]+(\.)?[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]*@[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/\.?]+\.[a-z]{2,3}$/gi; 
    
            if(value===''){
                setState({
                    ...state,
                    isConfirmModal: true,
                    confirmModalMsg:'이메일을 입력해 주세요.'
                });            
            }
            else if(regExp.test(value)===false){
                setState({
                    ...state,
                    isConfirmModal: true,
                    confirmModalMsg:'이메일 형식으로 입력해 주세요.'
                }); 
            }
            else{
                // 정상인 이메일인 경우
                // 이메일 중복검사
                axios({ // 웹서버 & DB서버에서 데이터 가져오기
                    url:'http://luck1409.dothome.co.kr/signup_db/select.php',
                    method:'GET'
                })
                .then((res)=>{ //Success
                    // console.log(res);
                    // console.log(res.data);
                    // console.log(res.data[0].이메일);
                    // console.log(res.data[1].이메일);
                    // console.log(res.data[2].이메일);
                    // 만약에 오류마면 어떡하지
                    // 예외처리
                    try{                    
                        const result = res.data.map((item)=>item.이메일===state.이메일);
    
                        if(result.includes(true)){
                            setState({
                                ...state,
                                isEmailOk: false,
                                isConfirmModal: true,
                                confirmModalMsg: "사용 불가능한 이메일 입니다."
                            });
                        }
                        else{
                            setState({
                                ...state,
                                isEmailOk: true,
                                isConfirmModal: true,
                                confirmModalMsg: "사용 가능한 이메일 입니다."
                            });
                        }
                    }
                    catch(err){
                        console.log(`AXIOS 오류 메시지!  ${err}`);
                    }
               
                })
                .catch((err)=>{
                    console.log(`AXIOS 실패 메시지!  ${err}`)
                });
    
            }
            
       
    
    }
    //7.휴대폰
    //입력제한조건
    //숫자이외 다 삭제
    const onChangeUserHp=(e)=>{
        const regExp = /[^0-9]/g  
        const {value} = e.target;
        let isHpError=false;
        let 휴대폰 = ''
        let isHpMsg='';
        let isHpdisabled=true;
        //숫자제외 다 삭제
        휴대폰 = value.replace(regExp, '');
        
        if(휴대폰 ===''){
            isHpError=true;
            isHpMsg='휴대폰 번호를 입력해 주세요.';
        }
        else{
            isHpError=false;
            isHpMsg='';
            if(휴대폰.length >= 1){
                isHpdisabled=false;
            }
            else{
                isHpdisabled=true;
            }
        }

        setState({

            ...state,
            휴대폰:휴대폰,
            isHpError:isHpError,
            isHpMsg:isHpMsg,
            isHpdisabled:isHpdisabled
        })

    


    }
    //7-1휴대폰 발송인증번호 받기 onClick 이벤트
    const onClickHpNum=(e)=>{
        e.preventDefault();

    //휴대폰 번호가 정확한지 유효성 검사 실행=====>정규표현식
    //010 011 012 013 014 015 016 017 018 019 맨앞 3자리
    //const regExp = /^01[0|1|2|3|4|5|6|7|8|9]+[0-9]{3,4}[0-9]{4}$/g;   => 필요없는 번호는 지워!!!^01[0|1|2|3|4|5|6|7] 이런식으로!! 
    //const regExp = /^01[0|1|2|3|4|5|6|7|8|9]{1}[0-9]{3,4}[0-9]{4}$/g;
    const regExp = /^01[0-9]{1}[0-9]{3,4}[0-9]{4}$/;
    let isConfirmModal = false;
    let confirmModalMsg='';
    let num = 0; //발송인증번호 상태관리변수 등록
    let 발송인증번호 = 0;

        if(regExp.test(state.휴대폰) ===false){

            isConfirmModal=true;
            confirmModalMsg='잘못된 휴대폰 번호 입니다. 확인 후 다시 시도 해 주세요.';
          }
        else{
 

            //발송인증번호 전송 타이밍
            
            num = Math.floor(Math.random()*900000+100000) //6자리의 난수 발생 -> 발송인증번호

            //상태관리 변수에 발송인증번호 저장
            발송인증번호=num;
            isConfirmModal=true;
            confirmModalMsg=`인증번호가 발송되었습니다 . ${num} `;

        }
        

        setState({
            ...state,
            isConfirmModal:isConfirmModal,
            confirmModalMsg:confirmModalMsg,
            발송인증번호:발송인증번호
        })   
        
    }

    //7-2휴대폰 발송인증번호 확인 입력상자 onChange 이벤트
    const onChangeUserHp2=(e)=>{
        const {value}= e.target;
        let isHpdisabled2 = true;


        if(value.length>=1 ){
           isHpdisabled2 = false;
        }
        else{
            isHpdisabled2 = true;
        }


        setState({
            ...state,
            입력인증번호:value,
            isHpdisabled2:isHpdisabled2
        })
    }
    //7-3휴대폰 발송인증번호 확인 버튼클릭 onClick 이벤트
    const onClickHpNum2=(e)=>{
        e.preventDefault();
        let confirmModalMsg='';
        let isConfirmModal=false;
        let isHp3=true;
        let 발송인증번호=state.발송인증번호;
        let isHpdisabled=true;

        isConfirmModal=true;
        if(state.발송인증번호===Number(state.입력인증번호)){
            confirmModalMsg=`인증에 성공하였습니다.`;
            isHp3=false;
            발송인증번호='';
            isHpdisabled=true;

            //타이머정지
            console.log(timer.setId);
            clearInterval(timer.setId)
        }   
        else{
            confirmModalMsg=`잘못된 인증코드 입니다.`;
            isHp3=true;
            발송인증번호=state.발송인증번호;
            isHpdisabled=false;
        }
        setState({
            ...state,
            isConfirmModal:isConfirmModal,
            confirmModalMsg:confirmModalMsg,
            isHp3:isHp3,
            발송인증번호:발송인증번호,
            isHpdisabled:isHpdisabled
        })
    }

    //7-4다른번호 인증 클릭 이벤트
    const onClickHpNum3=(e)=>{
        e.preventDefault();

        setState({
            ...state,
            isHp3:true,
            휴대폰:'',
            입력인증번호:'',
            발송인증번호:'',
        })
       
        createRef.current.focus(); //커서를 휴대폰 입력상자에 맞추고 커서가 깜박깜박
        

        //1.맨위 루트영역에 ref를 생성하고 변수 createRef에 지정한다.
        //2.createRef 변수를 태그요소 휴대폰 입력상자에 ref={createRef}에 대입시킨다.
        //3.이벤트 수행 시 휴대폰 입력상자에 커서를 포커스 시킨다. createRef.current.focus();
    }

    //8.주소검색 API : 팝업창 구현
    //public 정적요소 위치에
    //popup.html 
    const openPopupDaumPostApi=()=>{
        const popupFile = './popup.html';
        const popupName = '_popupAddressApi';
        const popupWidth = 530;
        const popupHeight = 570;
        const popupTop = (window.innerHeight-popupHeight) /2 ;
        const popupLeft = (window.innerWidth-popupWidth) /2 ;
        // const popupLeft = (윈도우창너비-팝업창너비) /2 ;
        // const popupTop = (윈도우창높이-팝업창높이) /2 ;
        
        //window.open(팝업창,html.팝업창이름, 'width=530, height=550,top=50%, left=50%')

        window.open(popupFile,popupName,`width=${popupWidth} height=${popupHeight} top=${popupTop} left=${popupLeft}`)
    }
    const onClickAddrPopupOpenApi=(e)=>{
        openPopupDaumPostApi(); //팝업창 열기!!
        e.preventDefault();

    }


    //sessionStorage 이벤트 ->가져오기
    //함수는 언제 실행이된다????  화면이 마운트 되고 난 후 실행한다. =>useEffect 사용
    //1.세션스토리지 키(JANEADDRESS)를 찾는다.
    //2.만약 있다면 가져오기 getItem(카)!!!
    //2.빈값이면 리턴~
    //4.값이 있다면 문자형 객체를 JSON.parse() 형식으로 변환한다.
    //5.그리고 속성값 주소1 주소2를 주소 입력창에 바인딩 시킨다. =>새로고침 할때마다 불러와서 안없어져~

    const getSessionStorage=()=>{
        const key = 'JANEADDRESS';
        let 주소1 = '';
        let 주소2 = '';
        let isAddress = false;
        //storage데이터 가져오기 데이터 없으면 null을 반환 ->null은 오류가 아니야 그래서 try catch 의미없음=>if문 써
        let result = sessionStorage.getItem(key);

        if(result!==null){//데이터가 있다면 =>널이아니면 
            result =JSON.parse(sessionStorage.getItem(key));
            주소1 =result.주소1;
            주소2 =result.주소2;
            isAddress =true;
            mapAddressFn(`${result.주소1} ${result.주소2}`,false);
         }
            setState({
                ...state,
                주소1:주소1,
                주소2:주소2,
                isAddress:isAddress
            })

            
        
        
    }
    React.useEffect(()=>{ //useEffect=> state뭔가 변화가 생기면 그때 실행 
        getSessionStorage();
    },[state.주소1]);

    //프롭스 내려받을때 state or 함수!!! 로 넣어도 가능!! mapAddressFn///////state가 더 나아 

    //8-1주소 1 입력상자 onChange이벤트

    const onChangeAddr1=(e)=>{
        
        setState({
            ...state,
            주소1:e.target.value,
            
        })
    }

    //8-2주소 2 입력상자 onChange이벤트

    const onChangeAddr2=(e)=>{
        setState({
            ...state,
            주소2:e.target.value,
            
        })
    }

    //8-3 주소 재검색 =>재검색버튼 클릭이벤트
    const onClickResearch=(e)=>{
        e.preventDefault();
        openPopupDaumPostApi(); //팝업창 열기!!
     
    }


    // 성별 : 라디오버튼 이벤트
    const onChangeGender=(e)=>{
        setState({
            ...state,
            성별: e.target.value
        })
    }

    //컨펌모달 닫기 이벤트

    const onClickComfirmModalClose=(e)=>{
        e.preventDefault();
        // console.log(state.confirmModalMsg.includes('인증번호'));//찾으면 true 못찾으면 false
        // console.log(state.confirmModalMsg.indexOf('인증번호')); // -1찾지못함 / 찾으면 0 
        // console.log(state.confirmModalMsg.search('인증번호')); // -1찾지못함 / 찾으면 0 

        if(state.confirmModalMsg.includes('인증번호')){
            //모달닫기하면 함수 실행
            //타이머 함수 호출 실행
            timerCounterfn();

        }
        else{

        }

        setState({
            ...state,
            isConfirmModal:false
        })
    }


    return (
        <>
        <main id='signUp'>
            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>회원가입</h2>
                            <p><span><i>*</i>필수입력사항</span></p>
                        </div>
                        <div className="content">
                            <form name='sign_up_form' id='signUpForm' method='post' action="./sign_up.php">
                                <ul>
                                    <li>
                                        <div>
                                            <label htmlFor="userId">아이디<i>*</i></label>
                                            <div className="center-box">
                                                <input
                                                    onChange={onChangeUserId} 
                                                    value={state.아이디}
                                                    type='text' 
                                                    maxLength={16} 
                                                    name='user_id' 
                                                    id='userId' 
                                                    placeholder='아이디를 입력해주세요' 
                                                    />
                                            </div>
                                            <button 
                                            onClick={onClickUserIdOk} 
                                            type='button'
                                            >중복확인</button>
                                            <p className={`errorMsg ${state.isIdError ? ' on': '' }`}>{state.errorMsg}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userPw1">비밀번호<i>*</i></label>
                                            <div className="center-box">
                                                <input
                                                value={state.비밀번호}
                                                onChange={onChangeUserPw1}
                                                type='password'  
                                                maxLength={16} 
                                                name='user_pw1' 
                                                id='userPw1' 
                                                placeholder='비밀번호를 입력해주세요' 
                                                />
                                            </div>
                                            <p className={`error-msg ${state.isPwError ? ' on' : ''}`} >{state.isPwMsg}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userPw2">비밀번호확인<i>*</i></label>
                                            <div className="center-box">
                                                <input 
                                                value={state.비밀번호확인}
                                                onChange={onChangeUserPw2}
                                                type='password'  
                                                maxLength={16} 
                                                name='user_pw2' 
                                                id='userPw2' 
                                                placeholder='비밀번호를 한번 더 입력해주세요'
                                                 />
                                            </div>
                                            <p className={`error-msg ${state.isPw2Error ? ' on' : ''}`}>비밀번호확인{state.isPw2Msg}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userName">이름<i>*</i></label>
                                            <div className="center-box">
                                                <input 
                                                value={state.이름}
                                                onChange={onChangeUserName}
                                                type='text' 
                                                name='user_name' 
                                                id='userName' 
                                                placeholder='이름을 입력해주세요' 
                                                />
                                            </div>
                                            <p className={`error-msg ${state.isNameError ? ' on' : ''}`}>{state.isNameMsg}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userEmail">이메일<i>*</i></label>
                                            <div className="center-box">
                                                <input 
                                                value={state.이메일}
                                                onChange={onChangeUserEmail}
                                                type='email' 
                                                name='user_email' 
                                                id='userEmail' 
                                                placeholder='이메일을 입력해주세요'
                                                 />
                                            </div>
                                            <p className={`error-msg ${state.isEmailError ? ' on' : ''}`}>{state.isEmailMsg}</p>
                                            <button 
                                            onClick={onClickUserEmailOk}
                                            type='button'>중복확인</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <label htmlFor="userHp">휴대폰<i>*</i></label>
                                            <div className="center-box">
                                                <input 
                                                value={state.휴대폰}
                                                onChange={onChangeUserHp}
                                                type='text'  
                                                maxLength={11} 
                                                name='user_hp' 
                                                id='userHp' 
                                                placeholder='숫자만 입력해주세요' 
                                                ref={createRef}
                                                />
                                            </div>
                                            <p className={`error-msg ${state.isHpError ? ' on' : ''} `}>{state.isHpMsg}</p>
                                            <button className={`hp-num-btn ${state.isHpdisabled ? '': ' on'}`} onClick={onClickHpNum} disabled={state.isHpdisabled} type='button'>인증번호 받기</button>
                                            <button className={`hp-num-btn hp-num-btn3${state.isHp3 ? '': ' on'}`} onClick={onClickHpNum3}  type='button'>다른번호 인증</button>
                                        </div>
                                    </li>
                                    {
                                        state.발송인증번호!==''&&(
                                    <li>
                                        <div>
                                            <div className="center-box">
                                                <input  
                                                // value={state.휴대폰}
                                                onChange={onChangeUserHp2}
                                                type='text'  
                                                maxLength={6} 
                                                name='user_hp2' 
                                                id='userHp2' 
                                                placeholder='인증번호를 입력하세요' 
                                                />
                                                <span className='hp-timer-counter'> {minutes<10? `0${minutes}`: minutes}:{seconds <10? `0${seconds}` :seconds}</span>
                                            </div>
                                            <button className={`hp-num-btn ${state.isHpdisabled2 ? '': ' on'}`} onClick={onClickHpNum2} disabled={state.isHpdisabled2} type='button'>인증번호 확인</button>
                                        </div>
                                    </li>
                                        )
                                    }
                                    <li>
                                        <div>
                                            <label htmlFor="userAddress1">주소<i>*</i></label>
                                            <div className="center-box">
                                              <button className={`addr-search-btn ${state.isAddress?' on' :''}`} onClick={onClickAddrPopupOpenApi} type='button'>주소검색</button>
                                                <input onFocus={onChangeAddr1} value={state.주소1} type='text'className={`${state.isAddress?' on':''}`} name='user_address1' id='userAddress1' placeholder='검색   주소1' />
                                                <input onFocus={onChangeAddr2} value={state.주소2} type='text'className={`${state.isAddress?' on':''}`} name='user_address2' id='userAddress2' placeholder='나머지 주소2' />
                                                <h5>샛별배송</h5> 
                                                <h6>배송지에 따라 상품 정보가 달라질 수 있습니다.</h6>
                                            </div>
                                            <button 
                                            onClick={onClickResearch} 
                                            className={`addr-research-btn ${state.isAddress?' on' :''}`} 
                                            type='button'
                                            >재검색</button>
                                        </div>
                                    </li>                                 
                                    <li>
                                        <div>
                                            <label>성별</label>
                                            <div className="center-box gender">
                                                {/* <label htmlFor="userMale"><input onChange={onChangeGender} type='radio' name='user_gender' id='userMale' value={'남자'} checked={state.성별.includes('남자')===true?true:false} />남자</label> */}
                                                <label><input onChange={onChangeGender} type='radio' name='user_gender' id='userMale' value={'남자'} checked={state.성별.includes('남자')} />남자</label>
                                                <label><input onChange={onChangeGender} type='radio' name='user_gender' id='userFemale' value={'여자'} checked={state.성별.includes('여자')} />여자</label>
                                                <label><input onChange={onChangeGender} type='radio' name='user_gender' id='userNone' value={'선택안함'} checked={state.성별.includes('선택안함')} />선택안함</label>
                                            </div>                                            
                                        </div>
                                    </li>

                                    <li>
                                    <div>
                                            <label>생년월일</label>
                                            <div className="center-box birth">
                                                <div className="birth-box">
                                                    <ul>
                                                        <li><input type="text" maxLength={4} name='user_birth_year' id='userBirthYear' placeholder='YYYY' /></li>
                                                        <li><i>/</i></li>
                                                        <li><input type="text" maxLength={2} name='user_birth_month' id='userBirthMonth>' placeholder='MM' /></li>
                                                        <li><i>/</i></li>
                                                        <li><input type="text" maxLength={2} name='user_birth_date' id='userBirthDate' placeholder='DD' /></li>
                                                    </ul>
                                                </div>
                                            </div>                                            
                                        </div>
                                    </li>    

                                    <li>
                                        <div>
                                            <label>추가입력사항</label>
                                            <div className="center-box chooga">
                                                {/* <label htmlFor="userMale"><input onChange={onChangeGender} type='radio' name='user_gender' id='userMale' value={'남자'} checked={state.성별.includes('남자')===true?true:false} />남자</label> */}
                                                <label><input type='radio' name='user_chooga' id='userChooga1' value={'친구초대 추천인 아이디'} />친구초대 추천인 아이디</label>
                                                <label><input type='radio' name='user_chooga' id='userChooga2' value={'참여 이벤트명'} />참여 이벤트명</label>                                                
                                                
                                                {
                                                    state.isChooga1 && (
                                                        <>
                                                            <input type="text" name='user_chooga_id' id='userChoogaId' placeholder='추천인 아이디를 입력해 주세요.'/>
                                                            <h6>가입 후 7일 내 첫 주문 배송완료 시, 친구초대 이벤트 적립금이 지급됩니다.</h6>
                                                        </>
                                                    )
                                                }

                                                {
                                                    state.isChooga2 && (
                                                        <>
                                                            <input type="text" name='user_chooga_event' id='userChoogaEvent' placeholder='참여 이벤트명을 입력해 주세요.'/>
                                                            <h6>
                                                                추천인 아이디와 참여 이벤트명 중 하나만 선택 가능합니다.<br/>
                                                                가입 이후는 수정이 불가능 합니다.<br/>
                                                                대소문자 및 띄어쓰기에 유의해주세요.
                                                            </h6>
                                                        </>
                                                    )
                                                }

                                            </div> 
                                            {
                                                state.isChooga1 && (
                                                    <button>아이디 확인</button>
                                                )
                                            }
                                        </div>
                                    </li>


                                    <li className='hr'>
                                        <hr />
                                    </li>  

                                    <li className='service-box'>
                                        <div>
                                            <label>이용약관동의<i>*</i></label>
                                            <div className="center-box service">
                                                {/* <label htmlFor="userMale"><input onChange={onChangeGender} type='radio' name='user_gender' id='userMale' value={'남자'} checked={state.성별.includes('남자')===true?true:false} />남자</label> */}
                                               <ul>
                                                    <li>
                                                        <label><input type='checkbox' name='user_service_all' id='userServiceAll' value={'전체 동의합니다.'} />전체 동의합니다.</label>                                                
                                                        <h5>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</h5>
                                                    </li>
                                                    
                                                    <li>
                                                        <label><input type='checkbox' name='user_service_1' id='userService1' value={'이용약관 동의(필수)'} />이용약관 동의</label><span>필수</span>                                                       
                                                    </li>
                                                    <li>
                                                        <label><input type='checkbox' name='user_service_2' id='userService2' value={'개인정보 수집∙이용 동의(필수)'} />개인정보 수집∙이용 동의</label><span>필수</span>                                                       
                                                    </li>
                                                    <li>
                                                        <label><input type='checkbox' name='user_service_3' id='userService3' value={'개인정보 수집∙이용 동의(선택)'} />개인정보 수집∙이용 동의</label><span>선택</span>                                                       
                                                    </li>
                                                    <li>
                                                        <label><input type='checkbox' name='user_service_4' id='userService4' value={'무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)'} />무료배송, 할인쿠폰 등 혜택/정보 수신 동의</label><span>선택</span>                                                       
                                                    </li>
                                                    <li className='service56'>
                                                        <label><input type='checkbox' name='user_service_5' id='userService5' value={'SNS'} />SNS</label>                                                    
                                                        <label><input type='checkbox' name='user_service_6' id='userService6' value={'이메일'} />이메일</label>
                                                        <h6>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</h6>
                                                    </li>
                                                    <li>
                                                        <label><input type='checkbox' name='user_service_7' id='userService7' value={'본인은 만 14세 이상입니다.(필수)'} />본인은 만 14세 이상입니다.</label><span>본인은 만 14세 이상입니다.</span>                                                       
                                                    </li>

                                               </ul> 

                                            </div>                                            
                                        </div>
                                    </li>

                                    <li>
                                        <button type='submit'>가입하기</button>
                                    </li>

                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
          {  
          state.isConfirmModal && (                                   
        <div id="confirmModal">
            <div className="wrap">
                <div className="container">
                    <div className="content">
                        <div className="title-box">
                            <h1>{state.confirmModalMsg}</h1>
                        </div>
                        <div className="button-box">
                            <button onClick={onClickComfirmModalClose}>확인</button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
          )
    }
        </>
    );
};


SignUpComponent.defaultProps = {
    회원가입: {
    //1.아이디
    아이디:'',  //입력상자 아이디 저장
    isIdError:false, //입력상자 아이디 유효성 검사 오류 여부
    errorMsg:'',

    //2.비밀번호
    비밀번호:'',
    isPwError:false,
    isPwMsg:'',

    //3.비밀번호 확인
    비밀번호확인:'',
    isPw2Error:false,
    isPw2Msg:'', 
    //4.이름
    이름:'',
    isNameError:false,
    isNameMsg:'',   
    
    //5.이메일
    이메일:'',
    isEmailError : false,
    isEmailMsg:'',

    //6.휴대폰
    휴대폰:'',
    isHpError:false,
    isHpMsg:'',

    //6-1휴대폰 발송인증번호 받기 버튼 disabled
    isHpdisabled:true, //휴대폰 발송인증번호 받기 버튼 사용 못함  
    발송인증번호:'', 

    //6-2휴대폰 입력인증번호 확인 입력상자
    isHpdisabled2:true, //휴대폰 인증번호 확인 버튼 사용 못함 
    입력인증번호:'',

    //6-4휴대폰 입력인증번호 확인 버튼 클릭 이벤트
    
    //6-5다른번호인증 : 인증번호가 성공하면 보임
    isHp3:true,


     //주소
    isAddress: false,  // Boolean
    isAddress1: true,  // Boolean
    isAddress2: false,  // Boolean
    주소1:'',
    주소2:'',

     //성별
    성별: '선택안함', // String

     //추가입력사항
    isChooga1: false,
    isChooga2: false,
    
    //컨펌모달창
    isConfirmModal:false,
    confirmModalMsg:'',
    
    }
}
