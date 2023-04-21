
(function($, window, document){ 


    const corperate = {
        init(){
            this.header();
            this.section4();
            this.section7();
            this.go();
        },
        header(){
            
            const mainBtn = $('#header .main-btn');
            const logoBtn = $('#header .logo-btn')
            let btbNum = 0;
            
            let newScroll = $(window).scrollTop();
            let oldScroll = newScroll
            $(window).scroll(function(e){
                newScroll = $(window).scrollTop();
                if (newScroll-oldScroll>0){
                    $('#header').addClass('on');
                    $('#header').removeClass('off');
                }
                if(newScroll-oldScroll<0){
                    $('#header').addClass('off');
                    $('#header').removeClass('on');
                }
                oldScroll = newScroll;
            });


            $('.logo-btn').on({
                click(){
                    let pos = $(this).attr('href');
                    $('html,body').animate({ scrollTop: $( pos ).offset().top }, 500);
                }
            });
            $('.main-btn').on({
                click(){
                    let pos = $(this).attr('href');
                    $('html,body').animate({ scrollTop: $( pos ).offset().top }, 500);
                }
            });        

            mainBtn.each(function(idx){
                $(this).on({
                    click(e){
                        e.preventDefault();
                        mainBtn.removeClass('on');
                        $(this).addClass('on');
                        btbNum=idx;

                    }
                })
            });
            // logoBtn.each(function(idx){
            //     $(this).on({
            //         click(e){
            //             e.preventDefault();
            //             logoBtn.removeClass('on');
            //             $(this).addClass('on');
            //             btbNum=idx;

            //         }
            //     })
            // });
        },
        section4(){
            
            //Element 요소 선택자
            //선택자 중복을 피하기 위해서 반드시 해당 섹션 아이디를 앞에 표기
            const galleryBtn = $('#section4 .gallery-btn');//갤러리 이벤트 버튼\
            const imgBox = $('#section4 .img-box')

            const galleryBoxUl = $('#gallery-box ul');//갤러리 박스
            const galleryBoxUlLi = $('#gallery-box ul li'); //갤러리 리스트(목록):이미지박스
            

            
            let n = galleryBoxUlLi.length; //li 갯수 hidw 갯수 -  show 갯수 
            let cols = 4; //기본 4칸
            let rows = Math.ceil(n/cols); // 8개/4칸 = 2줄
            let winW = $(window).innerWidth();
            let imgW = winW/cols; //창너비 / 칸수 li너비
            let imgH = imgW*0.75; //이미지너비 * 0.75 li 높이
            let galboxH = imgH*rows; //갤러리박스 전체 높이
            
            let btnNumber = 0; //버튼 클릭시 전달되는 버튼번호

            let a = [];

            ///로딩시 함수 호출실행 (버튼 번호 0번)
            galleryfn();
            galleryBtn.removeClass('on');
            galleryBtn.eq(btnNumber).addClass('on');
            //1.반응형 이벤트를 구현

            //$(window).scroll() //스크롤 값이 변경될때 이벤트 발생
            $(window).resize(function(){

                galleryfn();
            }); //크기 변경시 이벤트 발생


            //2.갤러리 함수

            function galleryfn(){
                //console.log('버튼번호', btnNumber);
                switch(btnNumber){
                    case 0:
                        n=8;
                        break;
                    case 1:
                        n=5;
                        break;
                    case 2:
                        n=6;
                        break;
                    case 3:
                        n=5;
                        break;
                    case 4:
                        n=6;
                        break;
                    default:
                }
                //console.log('갤러리 리스트 갯수' , n);

            if($(window).innerWidth() >= 1200){
                cols = 4;
            }
            else if($(window).innerWidth() >= 991){
                cols = 3;
            }
            else if($(window).innerWidth() >= 768){
                cols = 2;
            } 
            else{
                cols = 1;
            }

            rows = Math.ceil(n/cols); 
            winW = $(window).innerWidth();
            imgW = winW/cols; 
            imgH = imgW*0.75; 
            galboxH = imgH*rows; 

            //3.갤러리 박스 높이 지정

            galleryBoxUl.css({height:galboxH});
            galleryBoxUlLi.css({width:imgW, height:imgH});//투랜지션 설정되어 있어서 animate() 충돌

            //버튼 번호에 따른 배열 값을 정리하고 반복처리하면 코딩이 많이 줄어든다.///////////////////////////////////////

            switch(btnNumber){
                case 0:
                a=[0,1,2,3,4,5,6,7]   
                break
                case 1:
                a=[2,3,5,6,7]  
                break
                case 2:
                a=[0,1,3,4,6,7] 
                break
                case 3:
                a=[0,2,3,4,6]
                break
                case 4:
                a=[1,3,4,5,6,7]  
                break
            }

            
            //전체반복처리 마무리
            imgBox.removeClass('addZoom');
            let k =-1
            for(let i = 0; i<rows; i++){
                for(let j =0; j<cols; j++){
                    k++;
                    galleryBoxUlLi.eq(a[k]).stop().animate({top: imgH*i , left: imgW *j }, 300); 
                }
            }
            for(let i =0; i<a.length; i++){
                imgBox.eq(a[i]).addClass('addZoom');
               }


            }//갤러리함수 끝------------------------------------------------------------------------------------------------

            //3.갤러리 버튼 클릭 이벤트 : '버튼마다 해당 이미지 리스트가 다르다' 를 구성
            //5개의 버튼 개채에 대한 배열처리 ->EACH 기본이 idx
            galleryBtn.each(function(idx){
                $(this).on({
                    click(e){
                        e.preventDefault();
                        galleryBtn.removeClass('on');//버튼초기화 클래스
                        $(this).addClass('on');
                        btnNumber = idx;
                        galleryfn();
                    }
                })
            });
            
        },
        section7(){
            const num = $('#section7 .num');
            let countNum = [250,165,234,95];
            let countSum = [0,0,0,0];//누적변수는 반드시 초기값 필요
            let setId=0; //number
            //1000단위마다 콤마형식으로 변환(치환 replace)하기
            //그룹은 소괄호()() 공백 절대 안돼!!!!
            //스트링(문자열 이용해서 패턴을 만들어).replace(정규표현식, '그룹1,그룹2')REGEXP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            //(^시작문자 숫자\d 1자이상+) (234 뒤에는 반드시 숫자 3자리{3})
            //(^시작문자 숫자\d 1자이상+) (1,234)
            //(^시작문자 숫자\d 1자이상+) (156,234)
            //(^시작문자 숫자\d 1자이상+) (3,156,234)


            //const regexp=/(그룹1)(그룹2)/g;
            //const regexp=/($1)($2)/g; 그룹은 달러사인으로 표현 

            const regexp = /(^\d+)(\d{3})/g;
            //1회 구현하기 
            //콤마형식 반복문 사용 구현하기 1,000,000,000
            
            let number1 = String(123454644);
            let number2 = 723;
            //String(number).replace(regexp,'$1,$2');
            //console.log(String(number1).replace(regexp,'$1,$2'));

            ///반복문 활용
            //정규표현식 참 거짓 확인 테스트
            //정규표현식.test('문자열')
            //regexp.test'String(number)'
           //console.log(regexp.test(String(number1)))
           
           function commaFn(value){
            number1=String(value);
            while(regexp.test(number1)){
                number1 =number1.replace(regexp, '$1,$2')
                console.log(number1);
            }

            //화일문끝나면 리턴 값을 되돌려 보내주랴!!!!
            return number1;
           }




            function countFn(){

                for(let i= 0; i<countNum.length; i++){
                    countSum[i]+= (countNum[i]/1000);
                }

                //console.log(countSum);

                if(countSum[0]>countNum[0]){
                    clearInterval(setId);
                }
                for(let i=0; i<countNum.length; i++){
                    //num.eq(i).html(Math.round(String(countSum[i]).replace(regexp,'$1,$2')));
                    num.eq(i).html(commaFn(Math.round(countSum[i])));
                    //함수호출 반복문 정규표현식 구현 리턴값 받는다.

                }
                
            }
            

          setId=setInterval(countFn, 5);
        },
        go(){
            $('.gotop').on({
                click(){
                    // attribute 어트리뷰트  속성 포로퍼티
                    // console.log( $(this).attr('href') )
                    let pos = $(this).attr('href');
                    
                    $('html,body').animate({ scrollTop: $( pos ).offset().top }, 500);
                }
            });
        }
    }

    corperate.init(); 

})(jQuery, window, document); 



