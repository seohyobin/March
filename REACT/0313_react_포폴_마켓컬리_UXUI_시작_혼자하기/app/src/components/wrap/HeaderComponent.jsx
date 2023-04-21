import React from 'react';

export default function HeaderComponent(){
    return (
        <header id='header'>
            <div className="gap">
                <div className="content">
                    <div className="row1">
                        <div className="right">
                            <div className="container">
                                <ul>
                                    <li><a href="!#">회원가입</a></li>
                                    <li><i>|</i></li>
                                    <li><a href="!#">로그인</a></li>
                                    <li><i>|</i></li>
                                    <li><a href="!#">고객센터</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row2">
                        <div className="container">
                            <div className="left">
                                <div>
                                    <img src="./img/sign_up/logo.svg" alt="" />
                                    <a href="!#">마켓컬리</a>
                                    <i>|</i>
                                    <span><a href="!#">뷰티컬리</a></span>
                                </div>
                            </div>
                            <div className="center">

                                <input type="text" name='text' id='text' placeholder='검색어를 입력해주세요'/>
                                <span><img src="./img/sign_up/searchhh.svg" alt="" /></span>

                            </div>
                            <div className="right">
                                <span>
                                    <a href="!#"><img src="./img/sign_up/map.svg" alt="" /></a>
                                    <a href="!#"><img src="./img/sign_up/heart.svg" alt="" /></a>
                                    <a href="!#"><img src="./img/sign_up/cart.svg" alt="" /></a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row3">
                        <div className="container">
                            <div className="left">
                                <div>
                                    <a href="!#"><img src="./img/sign_up/ham.svg" alt="" /><span>카테고리</span></a>
                                </div>
                            </div>
                            <div className="center">
                                <ul>
                                    <li><a href="!#">신상품</a></li>
                                    <li><a href="!#">베스트</a></li>
                                    <li><a href="!#">알뜰쇼핑</a></li>
                                    <li><a href="!#">특가/혜택</a></li>
                                </ul>
                            </div>
                            <div className="right">
                                <a href="!#">샛별・택배<span> 배송안내</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

