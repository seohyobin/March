public class J01_데이터타입_리터럴_접두사_접미사 {
    public static void main(String[] args) {
        //변수의 타입
        //기본형 타입(primitive): 실제 값을 지정(스레드)
        //1바이트는 8비트
        //byte 별로 구분 타입
        //1Byte : Boolean, byte 
        //2Byte : char, short
        //4Byte : int, float
        //8Byte : long, double

        //논리 : Boolean
        //문자 : char
        //정수 : byte short int long 부호(Sign) 와 절대값(Absolute) 부호를 포함하지 않는 숫자 0->+ 1->- 부호비트를 빼서 2^n-1
        //실수 : float double(정확 수치의 정밀도가 높음!!! 소수점거의 다 포함) =>부동소수점 표현식


        //창조형 타입(reference type) : 기본형을 제외한 나머지
        //창조형 타입 : 객체의 주소를 저장
        //String system 객체 배열 나열형

        //부호의 유무의 분류 => 자료표현 범위가 달라진다. 

        //-2^(n-1) ~ 2^(n-1)-1                                                                                    |Sign 1(-)| 31bit 절대값 |부호 |절대값|
        // 음수,양수 부가 있는거 (signed)int =>4바이트 =>32비트  =>-2^(n-1) ~ 2^(n-1)-1 n=32 ... -2^(32-1) ~ 2^(32-1)-1 =>-2^(31) ~ 2^(31)-1 =>-2,147,483,648 (부호(-)와 절대값2,147,483,648)~ 2,147,483,647
        // 암수만 사용(부호가 없다 unsigned)int =>4바이트 =>32비트  =>-2^(n) ~ 2^(n)-1 n=32 ... -2^(32) ~ 2^(32)-1 =>-2^(32) ~ 2^(32)-1 =>0~4,294,967,295
        //부호가 있는 자료형 byte short int long float double

        //2^(n)-1
        //boolean =>1byte =>8bit =>2^(8)-1 =>256-1 =>255 최대수 시작은 0 ~ 255
        //char =>2byte =>16bit =>2^(16)-1 =>65536-1 =>65535 최대수 시작은 0 ~ 65535
        //-1의 의미 => 모든 수는 기본이 0 부터 시작하기때문에 n-1 즉 10진수는 0부터 9까지가 된다 .10진수는 10-1 =  9 최대수
        //-1의 의미 => 모든 수는 기본이 0 부터 시작하기때문에 n-1 즉  4진수는 0부터 3까지가 된다.   4진수는 4-1 =  3 최대수
        //-1의 의미 => 모든 수는 기본이 0 부터 시작하기때문에 n-1 즉  8진수는 0부터 7까지가 된다.   8진수는 8-1 =  7 최대수
        //-1의 의미 => 모든 수는 기본이 0 부터 시작하기때문에 n-1 즉 16진수는 0부터 15까지가 된다.16진수는 16-1 = 15 최대수
        //부호가 없는 자료형 =>Boolean char 



        //자료와 변수이름 = 변수값 (리터럴) => 자료형에 맞는 리터럴값 지정 
        //int cnt = 0;

        //변수이름 => 명명규칙 =>네이밍규칙 
        //클래스 =>첫글자 대문자(반드시 영문!!!) 중간연결단어 대문자 [파스칼 케이스 기법]
        //예] ProjectKurly

        //변수 , 매서드 => 첫글자 소문자 이면서 중간연결단어 대문자 [카멜케이스]
        // _언더바 $달러 특수문자 사용가능!
        // 예]a = 50; abc=70; loveIs = 66; _int $_long

        //상수=> 모두 대분자로 사용, 단어와 단어사이 연결되는 단어는 언더바_ (팟홀) 사용 [팟홀케이스]
        //예]final double PI = 3.14;  ROOT_2 = 1.414213


        //리터럴 = 변수에 대입되는 값
        int cnt1 = 0;
        char ch1 = 'A'; //반드시 '' 싱글코트 사용 리터럴
        //char ch2 = 'AB'; //2글자는 오류 리터럴오류
        char ch2 = 65; //아스키코드(ASCII CODE) 값 65 => A 리터럴
        char ch3 = '\u0041'; //유니코드(UNICODE) 값 \u0041 => A 리터럴
        char ch4 = '\t'; //tab 5칸정도를 한 묶음으로 띄워줌 일장한 사이 간격을 띄운다. 리터럴
        byte by1 = 99; //byte 정수 리터럴
        short sh1 = 12898;//short 정수 리터럴
        int bi = 0b10101;//2진수 정수 리터럴 숫자 zero b => binary
        int otc = 037;//octal 8진수 대문자  421 2진수 3자리
        // 421 421
        // 3    7 
        //===========
        //  0  1  1 1 1 1
        //  32 16 8 4 2 1 
        //=================
        //  0  16 8 4 2 1 =>31 
        int hex = 0x1100;// hexa 16진수 2진수 4자리
        //8421 8421 8421 8421
        // 1    1    0    0
        //========================
        //0001 0001 0000 0000
        //       4096 2048 1024 512 256 128 64 32 16 8421
        //  0 0 0  1    0   0    0   1   0   0  0  0 0000
        //4096+256  = 4352
        long lon = 32542524L;//LONG 숫자 맨 뒤에 영문 L을 표기한다.(대 소문자 다 가능) 반드시 뒤에 영문 표기
        long lon2 = 32542524l;//LONG 숫자 맨 뒤에 영문 L을 표기한다.(대 소문자 다 가능) 반드시 뒤에 영문 표기
        float flo = 1.14535f;//float 숫자 맨 뒤에 영문 f을 표기한다.(대 소문자 다 가능) 반드시 뒤에 영문 표기
        double dou = 3.14445464564d;//double 숫자 맨 뒤에 영문 d을 표기한다.(대 소문자 다 가능) double 형은 리터럴에서 표기 생략가능
        //16 8 4 2 1
        //1  0 1 0 1 
        //============
        //16 0 4 0 1  => 21
        System.out.println("cnt1 "+cnt1);
        System.out.println("ch1 "+ch1);
        System.out.println("ch2 "+ch2);
        System.out.println("ch3 "+ch3);
        System.out.println("ch4 "+ch4);
        System.out.println("by1 "+by1);
        System.out.println("sh1 "+sh1);
        System.out.println("bi "+bi);
        System.out.println("otc "+otc);
        System.out.println("hex "+hex);
        System.out.println("lon "+lon);
        System.out.println("lon2 "+lon2);
        System.out.println("flo "+flo);
        System.out.println("dou "+dou);

        
    }

}
