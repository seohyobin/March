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
            market:[]
            

        }
        
    }
    onClickSave=(e)=>{
        e.preventDefault();
        const key ='MARKET';
        const getData = localStorage.getItem( key );
        let market = [];
        if(getData!==null){
            market=JSON.parse(getData);
        }

        market=[
            ...market,
            {
                아이디:this.state.아이디,
                비밀번호:this.state.비밀번호,
                비밀번호한번더:this.state.비밀번호한번더,
                이름:this.state.이름,
                이메일:this.state.이메일,
                번호:this.state.번호
            }
        ];
        localStorage.setItem(key, JSON.stringify(market));

        this.setState({
            아이디:'',
            비밀번호:'',
            비밀번호한번더:'',
            이름:'',
            이메일:'',
            번호:''
        });
        this.setState({
            market:[
                ...this.state.market,
                {
                    아이디:this.state.아이디,
                    비밀번호:this.state.비밀번호,
                    비밀번호한번더:this.state.비밀번호한번더,
                    이름:this.state.이름,
                    이메일:this.state.이메일,
                    번호:this.state.번호

                }
            ],
            
            아이디:'',
            비밀번호:'',
            비밀번호한번더:'',
            이름:'',
            이메일:'',
            번호:''

        
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
                        <h2>회원가입</h2>
                        <p>*필수입력사항</p>
                    </div>
                    <form name='todo' id='todo' method='post' action="todo.php">
                        <ul className='input-box'>
                            <div className="box">
                            <li>
                                <input 
                                type="text" 
                                name='todo' 
                                id='toDo' 
                                placeholder='아이디를입력해주세요'
                                onChange={this.onChangeId}
                                value={this.state.아이디}
                                />
                            </li>
                            <li>
                                <input 
                                type="text" 
                                name='todo' 
                                id='toDo' 
                                placeholder='비밀번호를입력해주세요'
                                onChange={this.onChangePassword}
                                value={this.state.비밀번호}
                                />
                            </li>
                            <li>
                                <input 
                                type="text" 
                                name='todo' 
                                id='toDo' 
                                placeholder='비밀번호를 한번 더 입력해주세요'
                                onChange={this.onChangePasswordAgain}
                                value={this.state.비밀번호한번더}
                                />
                            </li>
                            <li>
                                <input 
                                type="text" 
                                name='todo' 
                                id='toDo' 
                                placeholder='이름를입력해주세요'
                                onChange={this.onChangeName}
                                value={this.state.이름}
                                />
                            </li>
                            <li>
                                <input 
                                type="text" 
                                name='todo' 
                                id='toDo' 
                                placeholder='예: marketkurly@kurly.com'
                                onChange={this.onChangeEmail}
                                value={this.state.이메일}
                                />
                            </li>
                            <li>
                                <input 
                                type="text" 
                                name='todo' 
                                id='toDo' 
                                placeholder='숫자만 입력해주세요'
                                onChange={this.onChangeNumber}
                                value={this.state.번호}
                                />
                            </li>
                            <li>
                                <button onClick={this.onClickSave}>저장</button>
                            </li>
                            </div>
                        </ul>
                    </form>
                </div>  
            </main>
        );
    }
}

export default MainComponent;