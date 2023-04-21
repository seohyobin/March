import React, { Component } from 'react';
import female from '../img/wedding-img5.jpg';
import male from '../img/wedding-img6.jpg';
import '../sass/wrap.scss';
class WrapComponenet extends React.Component {

    //생성자 컨스트럭터
    constructor(props){
        super(props); //super사용하여 => this 사용가능
        this.state = {
            title : '클래스형 컴포넌트 타이틀',
            cnt : 0,
            좋아하는과일:this.props.과일,
            회원:{
                아이디:'',
                비밀번호:'',
                이름:'',
                이메일:'',
            },
            isGender:true,
            할일:'', //입력상자 온체인지 이벤트 (화면에 일시적으로 보이는것)
            todoList:[] //버튼을 클릭해서 할일 내용 누적 저장(저장소)
        }
    }

    //ToDo List
    //할일 입력상자 온체인지 이벤트 : 할일 입력 
    onChangeTodoWrite=(e)=>{
        this.setState({
           할일:e.target.value
        })
    }
    //배열저장
    //1. ToDoList 버튼클릭이벤트 :배열에 데이터 추가 ...전개연산자 이용 추가한다.
    //수정할때 매개변수 필요 그 외는 전달안해
    OnClickTodoListAdd =(e)=>{
        e.preventDefault();
        this.setState({
            todoList:[
                ...this.state.todoList,
                {
                    할일:this.state.할일 //입력상자에서 입력된 state.할일
                }
            ],
            할일:''
        })

        
    }

    //스토리지 저장
    //2.추가된 배열에 목록을 브라우저 저장소에 저장한다.(영구저장) <- *배열에 저장 목록은 새로고침하면 브라우저가 새로 랜더링되면서 모두 초기화
    //3. 스토리지 : localStorage[세터, 게터]
    OnClickTodoListAddStorage =(e)=>{
        e.preventDefault();
        const key='TODO';
        //localStorage 저장하기 : 문자열로 저장된다, 객체 저장 (object)문자열로 변환하고 저장
        // localStorage.setItem(키key,값value)
        //문제점 : 새로고침하면 배열이 비어있는 상태 또는 입력된 한개의 데이터인 경우 
        //스토리지에 저장하면 스토리지 데이터가 업데이트 되면서 모두 삭제되고 빈 데이터 
        //또는 최근 입력된 한개 이상의 데이터만 저장된다.(덮어쓰기)   
        //스토리지 이전에 있는 데이터를 그대로 보관하고 배열에 있는 데이터는 추가로 저장한다
        //=>스토리지 데이터를 가져오기하고 추가된 배열 데이터를 병합한다 =>전개연산자이용 
        

        //1.localStarage데이터 가져오기 =====>getter
        const getData = localStorage.getItem(key);
        //예외처리 빈값 null =>빈데이터 나오면 나가// null은 오류아님, 이후에 오류가 발생할수있는 이유가 되서 미리 처리해야함
        //만약 가져올 데이터가 있다면 
        
        let todo= [];
        if(getData!==null){
            todo = JSON.parse(getData);
         }   

            //2.localStarage데이터 추가(병합) 저장하기 =====>setter
        
            todo = [
                ...todo, 
                {
                    할일: this.state.할일
                }
    
            ];
            
            localStorage.setItem(key, JSON.stringify( todo ));

            this.setState({할일:''});

       
         }



    //1씩 증가 클릭 이벤트 함수->상태 변경->세터함수 이용
    //전개연산자 사용 안해도 됨
    onClickAdd=(e)=>{
        e.preventDefault();
        this.setState({
            cnt: this.state.cnt + 1
        })
    }
      //1씩 감소 클릭 이벤트 함수->상태 변경->세터함수 이용
    onClickSub=(e)=>{
        e.preventDefault();
        this.setState({
            cnt: this.state.cnt - 1
        })
    }
    //회원정보 //this state넣어야지 다른 정보 안없어지고 아이디만 변경 돼 !!!==>내가지정한건 ...state필요
    onClickMember=(e)=>{
        e.preventDefault();
     
        this.setState({
            회원: {
                ...this.state.회원,
                아이디:'member123',
                비밀번호:'sjndflkjs',
                이름:'서효빈',
                이메일:'seohyobin2@naver.com'
            }
        })
    }
    //파라미터 변수 사용하기 증가
    onClickParaAdd=(e,z)=>{
        e.preventDefault();
        const {cnt}=this.state;
        this.setState({
            cnt:cnt+1
        })
    }
    //파라미터 변수 사용하기 감소
    onClickParaSub=(e,z)=>{
        e.preventDefault();
        const {cnt}=this.state;
        this.setState({
            cnt:cnt-1
        })
    }

   

    render() {//랜더함수 아래는 다 똑같음!!!!
        // console.log(`this.props ${this.props.과일}`);
        // //1씩 증가 클릭 이벤트 함수->상태 변경->세터함수 이용
        //  const onClickAdd=(e)=>{
        //     e.preventDefault();
        //     this.setState({
        //         cnt: this.state.cnt + 1
        //     })
    
        // }
        //   //1씩 감소 클릭 이벤트 함수->상태 변경->세터함수 이용
        // const onClickSub=(e)=>{
        //     e.preventDefault();
        //     this.setState({
        //         cnt: this.state.cnt - 1
        //     })
    
        // }
        return (
            <div id='wrap' style={{textAlign:'center', lineHeight:'200%',padding:'130px 0'}}>
                <h1>{this.state.title}</h1>
                <h1>{this.props.과일}</h1>
                <h1>{this.state.cnt}</h1>
                <hr />
                <h1><em>{this.state.회원.아이디}</em></h1>
                <h1><em>{this.state.회원.비밀번호}</em></h1>
                <h1><em>{this.state.회원.이름}</em></h1>
                <h1><em>{this.state.회원.이메일}</em></h1>

                <hr />
                <br /><br /><br />
                {/* 컨스트럭터 생성자 함수 클릭이벤트 ->반드시 this사용 */}
                <button onClick={this.onClickAdd}>증가</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.onClickSub}>감소</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                <button onClick={this.onClickMember}>회원정보</button>

                {/* 랜더 함수 */}
                {/* <button onClick={onClickAdd}>증가</button> */}
                {/* <button onClick={onClickSub}>감소</button> */}
                <hr />
                <br /><br /><br />
                {/* 클릭이벤트와 매개변수 전달 구현 */}
                <button onClick={(e)=>this.onClickParaAdd(e,'1씩증가')}>클릭이벤트 매개변수 전달 구현 1씩증가 버튼</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={(e)=>this.onClickParaSub(e,'1씩감소')}>클릭이벤트 매개변수 전달 구현 1씩감소 버튼</button>
                <hr />
                <br /><br /><br />
                {/* 클릭이벤트 직접 구현 =>상태변수 변경 화살표함수 {}없으면 즉시리턴*/}
                <button onClick={()=>this.setState({cnt:this.state.cnt+1})}>직접 클릭 이벤트 1씩증가 버튼</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={()=>this.setState({cnt:this.state.cnt-1})}>직접 클릭 이벤트 1씩감소 버튼</button>

                <div style={{width:'300px',margin:'50px auto',}}>
                    {
                        this.state.isGender ? <img src={female} alt="여성이미지" style={{width:'100%'}}/> : <img src={male} alt="남성이미지"style={{width:'100%'}}/>
                    }

                </div>
                <hr />
                    <button onClick={()=>this.setState({isGender: !this.state.isGender})}>여성 | 남성</button>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />


                    <hr />
                    <div id="todo">
                        <div className="container">
                            <div className="title">
                                <h1>Todo List</h1>
                            </div>
                            <form name='todo' id='todo' method='post' action="todo.php">
                                <ul className='input-box'>
                                    <li>
                                        <input 
                                        type="text" 
                                        name='todo_w' 
                                        id='todoW' 
                                        placeholder='할일을 입력하세요' 
                                        onChange={this.onChangeTodoWrite}
                                        value={this.state.할일} //입력상자에 내용 쓰고 저장누르면 사라지게 만들어줌=>그래서 필요해!!!
                                        />
                                    </li>
                                </ul>
                                <div className="btn-box">
                                    <button onClick={this.OnClickTodoListAdd} >배열저장</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button onClick={this.OnClickTodoListAddStorage} >로컬스토리지 저장</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
        );
    }
}

export default WrapComponenet;

WrapComponenet.defaultProps={
    과일:['딸기','수박','복숭아','귤','배']
}
 
