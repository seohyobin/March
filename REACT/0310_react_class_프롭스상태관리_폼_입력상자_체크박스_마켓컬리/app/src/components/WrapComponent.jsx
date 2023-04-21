import React, { Component } from 'react';
import '../scss/style.scss';

class WrapComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            아이디:'',
            비밀번호:'',
            비밀번호확인:'',
            이름:'',
            이메일:'',
            휴대폰:'',
            가입정보:[],
            checked1:false,
            checked2:false,
            checked3:false,
            checked4:false,
            checked5:false,
            checked6:false,
            checked7:false,
            checked8:false,
            checked9:false,
            checked10:false,
            checked11:false,
            좋아하는과일:[], //checked된 과일 저장하는 배얄,
            좋아하는취미:[]
            
        }

    }
    //저장하기 클릭이벤트
    onClickSave=(e)=>{
        e.preventDefault();
        this.setState({
            가입정보:[
                ...this.state.가입정보, //새로운 데이터는 현재 데이터 아래에 추가 
                {
                아이디:this.state.아이디,
                비밀번호:this.state.비밀번호,
                비밀번호확인:this.state.비밀번호확인,
                이름:this.state.이름,
                이메일:this.state.이메일,
                휴대폰:this.state.휴대폰,
                좋아하는과일:this.state.좋아하는과일,
                좋아하는취미:this.state.좋아하는취미,
                가입일자:`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}` //날짜 객체 생성
            }
        ]
        });
        alert('저장되었습니다');
 
    }
    ////CHECKBOX EVENT////////////////////////////////////////////////////////////////////////////////////////////////////////
    //1.체크박스 온체인지 이벤트
    //2.상태관리 변수(속성) checked1 => Value 저장 =>true or false
    //3.조건문 
    //4.5개의 과일중 체크된(true)항목들 저장할 배열 선언 사용
    onChangeCheckEvent1=(e)=>{
        if(e.target.checked===true){

            this.setState({
                checked1:true, //true
                좋아하는과일:[...this.state.좋아하는과일,e.target.value]
            })
        }
        else{ //false //딸기를 제외한 배열 재구성 필터 매소드
            this.setState({
                checked1:false, //false
                좋아하는과일:this.state.좋아하는과일.filter((item)=>item!=='딸기') //한줄코딩 중괄호쓰지마
                // 좋아하는과일:this.state.좋아하는과일.filter((item)=>item!==e.target.value)
            })
        }
        
        
    
        // console.log(e.target.checked);//체크드!! 선택이 되면 true 선택을 해제하면 false로 결과 출력 
        // console.log(e.target.value);//무슨 과일 선택했어?
    }
    onChangeCheckEvent2=(e)=>{

        if(e.target.checked===true){

            this.setState({
                checked2:true, //true
                좋아하는과일:[...this.state.좋아하는과일, e.target.value]
            })
        }
        else{
            this.setState({
                checked2:false, //false
                // 좋아하는과일:this.state.좋아하는과일.filter((item)=>item!=='복숭아') //한줄코딩 중괄호쓰지마
                좋아하는과일:this.state.좋아하는과일.filter((item)=>item!==e.target.value)
            })
        }
    }
    onChangeCheckEvent3=(e)=>{

        if(e.target.checked===true){

            this.setState({
                checked3:true, //true
                좋아하는과일:[...this.state.좋아하는과일,e.target.value]
            })
        }
        else{
            this.setState({
                checked3:false,
                좋아하는과일:this.state.좋아하는과일.filter((item)=>item!==e.target.value)
            })
        }
    }
    onChangeCheckEvent4=(e)=>{

        if(e.target.checked===true){

            this.setState({
                checked4:true, //true
                좋아하는과일:[...this.state.좋아하는과일,e.target.value]
            })
        }

        else{
            this.setState({
                checked4:false,
                좋아하는과일:this.state.좋아하는과일.filter((item)=>item!==e.target.value)
            })
        }
    }
    onChangeCheckEvent5=(e)=>{

        if(e.target.checked===true){

            this.setState({
                checked5:true, //true
                좋아하는과일:[...this.state.좋아하는과일,e.target.value]
            })
        }
        else{
            this.setState({
                checked5:false,
                좋아하는과일:this.state.좋아하는과일.filter((item)=>item!==e.target.value)
            })
        }
    }
    onChangeCheckEvent6=(e)=>{
        if(e.target.checked===true){
            this.setState({
                checked6:true,
                좋아하는취미:[...this.state.좋아하는취미,e.target.value]
            })
        }
        else{
            this.setState({
                checked6:false,
                좋아하는취미:this.state.좋아하는취미.filter((item)=>item!==e.target.value)
            })
        }
    }
    onChangeCheckEvent7=(e)=>{
        if(e.target.checked===true){
            this.setState({
                checked7:true,
                좋아하는취미:[...this.state.좋아하는취미,e.target.value]
                
            })
        }
        else{
            this.setState({
                checked7:false,
                좋아하는취미:this.state.좋아하는취미.filter((item)=>item!==e.target.value)
            })
        }
    }
    onChangeCheckEvent8=(e)=>{
        if(e.target.checked===true){
            this.setState({
                checked8:true,
                좋아하는취미:[...this.state.좋아하는취미,e.target.value]
            })
        }
        else{
            this.setState({
                checked8:false,
                좋아하는취미:this.state.좋아하는취미.filter((item)=>item!==e.target.value)
            })
        }
    }
    onChangeCheckEvent9=(e)=>{
        if(e.target.checked===true){
            this.setState({
                checked9:true,
                좋아하는취미:[...this.state.좋아하는취미,e.target.value]
            })
        }
        else{
            this.setState({
                checked9:false,
                좋아하는취미:this.state.좋아하는취미.filter((item)=>item!==e.target.value)
            })
        }
    }
    onChangeCheckEvent10=(e)=>{
        if(e.target.checked===true){
            this.setState({
                checked10:true,
                좋아하는취미:[...this.state.좋아하는취미,e.target.value]
            })
        }
        else{
            this.setState({
                checked10:false,
                좋아하는취미:this.state.좋아하는취미.filter((item)=>item!==e.target.value)
            })
        }
    }
    onChangeCheckEvent11=(e)=>{
        if(e.target.checked===true){
            this.setState({
                checked11:true,
                좋아하는취미:[...this.state.좋아하는취미,e.target.value]
            })
        }
        else{
            this.setState({
                checked11:false,
                좋아하는취미:this.state.좋아하는취미.filter((item)=>item!==e.target.value)
            })
        }
    }
    

    onChangeId=(e)=>{
        this.setState({
            아이디:e.target.value
        })
    }
    onChangePassword=(e)=>{
        this.setState({
            비밀번호:e.target.value
        })
    }
    onChangePasswordOk=(e)=>{
        this.setState({
            비밀번호확인:e.target.value
        })
    }
    onChangeName=(e)=>{
        this.setState({
            이름:e.target.value
        })
    }
    onChangeEmail=(e)=>{
        this.setState({
            이메일:e.target.value
        })
    }
    onChangeHp=(e)=>{
        this.setState({
            휴대폰:e.target.value
        })
    }

    render() {
        return (
            <div id='wrap'>
                <div className="container">
                    <div className="title">
                        <h1>회원가입</h1>
                        <h3><i>*</i>필수입력사항</h3>
                    </div>
                    <div className="content">
                        <form name='member_form' id='memberForm' method='post' action="./member_form.php" >
                            <ul>
                                <li>
                                    <div>
                                        <label htmlFor="userId">아이디<i>*</i></label>
                                        <input 
                                        type="text" 
                                        name='user_id' 
                                        id='userId' 
                                        placeholder='아이디를 입력해주세요'
                                        onChange={this.onChangeId}  //키 조작으로 상태관리변수 저장
                                        value={this.state.아이디}   //상태관리변수 내용이 변경되면 입력상자도 변경된다.
                                        />
                                        <button onClick={this.onClickSave}>중복확인</button>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <label htmlFor="userPw">비밀번호<i>*</i></label>
                                        <input 
                                        type="text" 
                                        name='user_pw' 
                                        id='userPw' 
                                        placeholder='비밀번호를 입력해주세요'
                                        onChange={this.onChangePassword}
                                        value={this.state.비밀번호}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <label htmlFor="userPwOk">비밀번호확인<i>*</i></label>
                                        <input 
                                        type="text" 
                                        name='user_pw_ok' 
                                        id='userPwOk' 
                                        placeholder='비밀번호를 한번 더 입력해주세요'
                                        onChange={this.onChangePasswordOk}
                                        value={this.state.비밀번호확인}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <label htmlFor="userName">이름<i>*</i></label>
                                        <input 
                                        type="text" 
                                        name='user_name' 
                                        id='userName' 
                                        placeholder='이름를 입력해주세요'
                                        onChange={this.onChangeName}
                                        value={this.state.이름}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <label htmlFor="userEmail">이메일<i>*</i></label>
                                        <input 
                                        type="text" 
                                        name='user_email' 
                                        id='userEmail' 
                                        placeholder='예: marketkurly@kurly.com'
                                        onChange={this.onChangeEmail}
                                        value={this.state.이메일}
                                        />
                                        <button onClick={this.onClickSave}>중복확인</button>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <label htmlFor="userHp">휴대폰<i>*</i></label>
                                        <input 
                                        type="text" 
                                        name='user_hp'
                                        id='userHp' 
                                        placeholder='숫자만 입력해주세요'
                                        onChange={this.onChangeHp}
                                        value={this.state.휴대폰}
                                        />
                                        <button onClick={this.onClickSave}>인증번호 받기</button>
                                    </div>
                                </li>
                                <li className='fruit'>
                                    <label htmlFor="chk1"><input onChange={this.onChangeCheckEvent1} type="checkbox" name='chk1' id='chk1' value='딸기' checked={this.state.checked1}/> 딸기</label>
                                    <label htmlFor="chk2"><input onChange={this.onChangeCheckEvent2} type="checkbox" name='chk2' id='chk2' value='복숭아'checked={this.state.checked2}/> 복숭아</label>
                                    <label htmlFor="chk3"><input onChange={this.onChangeCheckEvent3} type="checkbox" name='chk3' id='chk3' value='수박'checked={this.state.checked3}/> 수박</label>
                                    <label htmlFor="chk4"><input onChange={this.onChangeCheckEvent4} type="checkbox" name='chk4' id='chk4' value='귤'checked={this.state.checked4}/> 귤</label>
                                    <label htmlFor="chk5"><input onChange={this.onChangeCheckEvent5} type="checkbox" name='chk5' id='chk5' value='체리'checked={this.state.checked5}/> 체리 </label>
                                </li>
                                <li className='hobby'>
                                    <label htmlFor="check1"><input onChange={this.onChangeCheckEvent6} type="checkbox" name='check1' id='check1' value='영화보기' checked={this.state.checked6}/>영화보기</label>
                                    <label htmlFor="check2"><input onChange={this.onChangeCheckEvent7} type="checkbox" name='check2' id='check2' value='음악감상'checked={this.state.checked7} />음악감상</label>
                                    <label htmlFor="check3"><input onChange={this.onChangeCheckEvent8} type="checkbox" name='check3' id='check3' value='책읽기'checked={this.state.checked8} />책읽기</label>
                                    <label htmlFor="check4"><input onChange={this.onChangeCheckEvent9} type="checkbox" name='check4' id='check4' value='등산' checked={this.state.checked9}/>등산</label>
                                    <label htmlFor="check5"><input onChange={this.onChangeCheckEvent10} type="checkbox" name='check5' id='check5' value='수영'checked={this.state.checked10} />수영</label>
                                    <label htmlFor="check6"><input onChange={this.onChangeCheckEvent11} type="checkbox" name='check6' id='check6' value='사진찍기' checked={this.state.checked11}/>사진찍기</label>
                                </li>
                            </ul>
                            <div className="btn-box">
                                <button onClick={this.onClickSave}>저장</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default WrapComponent;