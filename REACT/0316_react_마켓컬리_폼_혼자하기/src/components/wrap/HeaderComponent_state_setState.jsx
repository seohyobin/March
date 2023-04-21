import React from 'react';
//import $ from 'jquery';

export default function HeaderComponent() {
    //상태관리
    const[state,setState]=React.useState({
        isFixed:false
    })



    React.useEffect(()=>{


        const row3Top = document.querySelector('#header .row3').offsetTop;

        window.addEventListener('scroll',function(){
            let isFixed =false;


            if(window.scrollY>=row3Top){
                isFixed=true;
            }
            else{
                isFixed=false;
            }
            setState({
                ...state,
                isFixed:isFixed
            });
        })

    },[]);

    return (
        <header id='header'>
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="row1">
                            <div className="container">
                                <ul>
                                    <li><a href="/회원가입" title='회원가입'>회원가입</a></li>
                                    <li><i>|</i></li>
                                    <li><a href="/로그인" title='로그인'>로그인</a></li>
                                    <li><i>|</i></li>
                                    <li><a href="/고객센터" title='고객센터'>고객센터</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`row2${state.isFixed? ' on':''}`}>
                            <div className="container">
                                <div className="left">
                                    <h1>
                                        <img src="./images/sign_up/logo.svg" alt="" />
                                        <span><a href="/">마켓컬리</a></span>
                                        <span><i>|</i></span>
                                        <span><a href="/뷰티컬리">뷰티컬리</a></span>
                                    </h1>
                                </div>
                                <div className="center">
                                    <div>
                                        <input type="text" name='' id='' placeholder='검색어를 입력해 주세요'/>
                                        <a href='!#'><img src="./images/sign_up/search.svg" alt="" /></a>
                                    </div>
                                </div>
                                <div className="right">
                                    <span><a href="!#"><img src="./images/sign_up/map.svg" alt="" /></a></span>
                                    <span><a href="!#"><img src="./images/sign_up/heart.svg" alt="" /></a></span>
                                    <span><a href="!#"><img src="./images/sign_up/cart.svg" alt="" /></a></span>
                                </div>
                            </div>
                        </div>
                        <nav id='nav' className={`row3${state.isFixed? ' on':''}`}>
                            <div className="container">
                                <div className="left">
                                    <a href="!#"><img src="./images/sign_up/nav_bar.svg" alt="" /><span>카테고리</span></a>
                                </div>
                                <div className="center">
                                    <ul>
                                        <li><a href='!#'>신상품</a></li>
                                        <li><a href='!#'>베스트</a></li>
                                        <li><a href='!#'>알뜰상품</a></li>
                                        <li><a href='!#'>특가혜택</a></li>
                                    </ul>
                                </div>
                                <div className="right">
                                    <a href="!#">샛별・택배<span>배송안내</span></a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};
