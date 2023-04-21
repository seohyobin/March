import React, { Component } from 'react';
import '../../scss/style.scss';
class MainComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            아이디:'',
            비밀번호:'',
            비밀번호한번더:'',
            이름:'',
            이메일:'',
            번호:'',
            

        }
        
    }

    // onChangeInput=(e)=>{
    //     this.setState({
    //         할일:e.target.value
    //     })

    // }
    onClickSave=(e)=>{
        e.prevetDefault();
        this.setState({
        
        })


      
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
    onChangePasswordAgain=(e)=>{
        this.setState({
            비밀번호한번더:e.target.value
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
    onChangeNumber=(e)=>{
        this.setState({
            번호:e.target.value
        })
    }

    render() {
        return (
            <main id='main'>
                <div className="container">
                    <div className="title">
                        <h2>마켓컬리</h2>
                    </div>
                    <form name='todo' id='todo' method='post' action="todo.php">
                        <ul className='input-box'>
                            <div className="box-1">
                                <h3>아이디</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <li>
                                <input 
                                type="text" 
                                name='todo' 
                                id='toDo' 
                                placeholder='아이디를입력해주세요'
                                onChange={this.onChangeId}
                                value={this.state.아이디}
                                />
                                 <button onClick={this.onClickSave} ClassName="button-box">아이디저장</button>
                            </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="box-2">
                            <h3>비밀번호</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <li>
                                <input 
                                type="text" 
                                name='todo' 
                                id='toDo' 
                                placeholder='비밀번호를입력해주세요'
                                onChange={this.onChangePassword}
                                />
                                 <button onClick={this.onClickSave} ClassName="button-box">비밀번호저장</button>
                            </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="box-3">
                            <h3>비밀번호 다시 입력</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <li>
                                <input 
                                type="text" 
                                name='todo' 
                                id='toDo' 
                                placeholder='비밀번호를 한번 더 입력해주세요'
                                onChange={this.onChangePasswordAgain}
                                />
                                 <button onClick={this.onClickSave} ClassName="button-box">아이디저장</button>
                            </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="box-4">
                            <li>
                            <h3>이름</h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input 
                                type="text" 
                                name='todo' 
                                id='toDo' 
                                placeholder='이름를입력해주세요'
                                onChange={this.onChangeName}
                                />
                                 <button onClick={this.onClickSave} ClassName="button-box">이름저장</button>
                            </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="box-5">
                            <h3>이메일</h3>
                            <li>
                                <input 
                                type="text" 
                                name='todo' 
                                id='toDo' 
                                placeholder='이메일를입력해주세요'
                                onChange={this.onChangeEmail}
                                />
                                 <button onClick={this.onClickSave} ClassName="button-box">이메일저장</button>
                            </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <div className="box-6">
                            <h3>전화번호</h3>
                            <li>
                                <input 
                                type="text" 
                                name='todo' 
                                id='toDo' 
                                placeholder='전화번호를입력해주세요'
                                onChange={this.onChangeNumber}
                                />
                                 <button onClick={this.onClickSave} ClassName="button-box">전화번호저장</button>
                            </li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                        </ul>
                        {/* <div className="btn-box">
                            <button ClassName="button-box">배열저장</button>
                        </div> */}
                    </form>
                </div>  
            </main>
        );
    }
}

export default MainComponent;