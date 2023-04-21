
//2.리액트에 컴포넌트(class 객체) 생성  명명(네이밍) 규칙 파스칼 케이스 기법
function WrapComponent(props){

    //상태관리 훅(hook)  React.useState() 사용하면 프롭스 변경 사용 가능(세터)
    const [state, setState] = React.useState(props);

    console.log(state.이름);
    console.log(state.구분);
    console.log(state.과일);
    console.log(state.색);
    // setState({
    //     ...state,
    //     이름: '딸기'
    // })
    return(
        <div id="wrap">
            <SkipComponent 색={props.색}/>
            <HeaderComponent 과일={props.과일} 색={props.색}/>
            <MainComponent props={props}/>
            <FooterComponent 구분={props.구분}/>
            <GotopComponent/>
            <h1>이름:{props.이름}</h1>
            <h1>구분:{props.구분}</h1>
        </div>
    )
}
//랩퍼 컴퍼넌트 프롭스(객체 속성 변수) 설정하기
//프롭스(변수인데 객체를 사용하기 때문에 속성 (properties))는 
//부모 컴퍼넌트(상위컴퍼넌트 조상)가 
//자식 컴퍼넌트(하위컴퍼넌트 자손)에게 전달 목적으로 생성 사용된다.
//프롭스는 변경할 수 없다.
//WrapComponent.기본프롭스 = {}

WrapComponent.defaultProps = {
    이름: '사과',
    구분: '빨강',
    과일: '수박',
    색: '초록'
}


//4.스킵컴포넌트 생성
function SkipComponent({색}){
    return(
        <ul id="skip">
            <h1>SkipComponent 스킵 컴포넌트 입니다.</h1>
            <h2>헤더컴포넌트 프롭스 속성 색 {색}</h2>
        </ul>
    )
}
//5.헤더컴포넌트 생성
function HeaderComponent({과일,색}){
    return(
        <header id="header">
            <h1>HeaderComponent 헤더 컴포넌트 입니다.</h1>
            <h2>헤더컴포넌트 프롭스 속성 이름1 {과일}</h2>
            <h2>헤더컴포넌트 프롭스 속성 색 {색}</h2>
        </header>
    )
}

//6.메인컴포넌트 생성
function MainComponent ({props}){
    const {이름,구분,과일,색} = props;
    console.log( props );
        // const props = {
    //     props:{
    //         이름 : '',
    //         구분 : '',
    //         과일 : '',
    //         색 : ''
    //     }
    // }
    return(
        <main id="main">
            <h1>메인컴퍼넌트 프롭스 속성 이름 {props.이름}</h1>
            <h1>메인컴퍼넌트 프롭스 속성 구분 {props.구분}</h1>
            <h1>메인컴퍼넌트 프롭스 속성 과일 {props.과일}</h1>
            <h1>메인컴퍼넌트 프롭스 속성 색   {props.색}</h1>

            <br />
            <hr />
            <br />

            <h1>메인컴퍼넌트 프롭스 속성 이름  {이름}</h1>
            <h1>메인컴퍼넌트 프롭스 속성 구분  {구분}</h1>
            <h1>메인컴퍼넌트 프롭스 속성 과일  {과일}</h1>
            <h1>메인컴퍼넌트 프롭스 속성 색    {색}</h1>
            <Section1Component/>
            <Section2Component/>
            <Section3Component/>
        </main>
    )
}
            //6-1 섹션1 컴포넌트
        function Section1Component(){
            return(
                <section id="section1">
                    <h1>Section1Component 섹션1 컴포넌트</h1>
                    <Article1Component/>
                    <Article2Component/>
                </section>
            )
        }
            function Article1Component(){
                return(
                    <article id="article1">
                        <h1>Article1Component 입니다</h1>
                    </article>
                )
            }
            function Article2Component(){
                return(
                    <article id="article2">
                        <h1>Article2Component 입니다</h1>
                    </article>
                )
            }      

            //6-2 섹션2 컴포넌트
            function Section2Component(){
                return(
                    <section id="section2">
                        <h1>Section2Component 섹션2 컴포넌트</h1>
                    </section>
                )
            }
            //6-3 섹션3 컴포넌트
            function Section3Component(){
                return(
                    <section id="section3">
                        <h1>Section3Component 섹션3 컴포넌트</h1>
                    </section>
                )
            }    
        
//7.푸터컴포넌트
function FooterComponent (props){
    return(
        <footer id="footer">

            <h1>FooterComponent 푸터 입니다</h1>
            <h2>푸터컴포넌트 프롭스 {props.구분}</h2>
        </footer>
    )
}
//8.고탑컴포넌트
function GotopComponent (){
    return(
        <div id="gotop">
            <h1>GotopComponent 고탑  입니다</h1>
        </div>
    )
}
//1. 리액트 돔(React DOM)이 리액트와 HTML DOM 컨테이너(선택자->id : root)) 연결 
ReactDOM.render(
    //3.리액트 컴포넌트와 돔 컨테이너 연결 -> 컴포넌트 이름 복사해서 가상태그를 만든다.
    <WrapComponent />,
    document.getElementById('root')
);
