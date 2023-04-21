import React from 'react';
import TopModalComponent from './wrap/TopModalComponent';
import HeaderComponent from './wrap/HeaderComponent';
import SignUpComponent from './wrap/SignUpComponent';
import FooterComponent from './wrap/FooterComponent';
import Sub1PageComponent from './wrap/Sub1PageComponent';
import Sub2PageComponent from './wrap/Sub2PageComponent';
import {BrowserRouter,Routes,Route} from 'react-router-dom';


export default function WrapComponent(){
    return (
        <div id='wrap'>
            <BrowserRouter>
                <TopModalComponent/> {/* 고정이미지 */}
                <Routes>
                    <Route path='/'element={<HeaderComponent/>}>  {/* 네비게아션 항상 고정되는 체이지 메인버튼 클릭 페이지 이동 다 감싸주는 태그 헤더가 감싸줘*/}
                        <Route index element={<SignUpComponent/>}/>  {/* 회원가입페이지   단독태그!! */}
                        <Route path='/회원가입' element={<SignUpComponent/>}/>  {/* 회원가입페이지   단독태그!! */}
                        <Route path='/로그인' element={<Sub1PageComponent/>}/>  {/* 회원가입페이지   단독태그!! */}
                        <Route path='/고객센터' element={<Sub2PageComponent/>}/>  {/* 회원가입페이지   단독태그!! */}

                    </Route>
                </Routes>         
                <FooterComponent/> 
            </BrowserRouter>
        </div>
    );
};
