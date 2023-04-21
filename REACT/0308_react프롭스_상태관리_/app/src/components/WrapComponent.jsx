import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import FooterComponent from './wrap/FooterComponent';
import'../scss/style.scss';

export default function WrapComponent(props){

    const [state,setState] = React.useState(props);

    React.useEffect(()=>{
        // console.log(state.과일);
        // console.log(state.자동차);
        // console.log(state.성적);
    });


    return (
        <div id='wrap'>
            <HeaderComponent/>
            <MainComponent 성적={state.성적}/>
            <FooterComponent/>
        </div>
    );
};

WrapComponent.defaultProps={
    과일:['수박','딸기','복숭아','체리','귤'],
    자동차:['포니','제네시스','스포티지','소나타','벤츠'],
    성적:[
        {번호:1,이름:'서효빈',국어:99,영어:94,수학:90},
        {번호:2,이름:'박효빈',국어:99,영어:95,수학:95},
        {번호:3,이름:'김효빈',국어:80,영어:91,수학:85},
        {번호:4,이름:'이효빈',국어:85,영어:80,수학:88},
        {번호:5,이름:'정효빈',국어:89,영어:89,수학:95},
        {번호:6,이름:'차효빈',국어:95,영어:84,수학:99}
    ]

}
