public class C01_자료형 {
    public static void main(String[] args) {
        //자료형 => 데이터 타입(Data Type)
        //int => 정수형 
        //string => 문자형
        //100% 타입설정
        //자바 기본타입 : int, long, float, double, //숫자 소수점 ->float
        //               char, string,//문자
        //               boolean, byte, short   
        //변수 _ $ 예외적 사용 가능 ->>>> $cnt _cnt 특수문자2개

        //1.정수자료형
        //ex] 타입설정 변수이름 =(대입연산자)  0(변수값) 
        //ex] 타입설정 cnt = 0
        //ex] 타임의 정의는 변수에 들어오는 (대입하는) 변수 값의 타입을 설정한 것
        //ex] int cnt = 0 ; cnt 변수에 정수형 값을 대입한다.
        //ex] long cnt2 = 0 ; cnt 변수에 정수형 값을 대입한다.


        //2.실수자료형
        //ex] float num = 33.3333 ; num 변수에 실수형(소수점 이하의 숫자가 포함된것) 값을 대입한다.
        //ex] double num2 = 33.352657465413 ; num 변수에 실수형(소수점 이하의 숫자가 포함된것) 값을 대입한다.
       
        
        //3.문자자료형
        //'' 싱글쿼트 사용
        //ex] char grade='A'; 

        //3.문자열자료형
        //"" 더블쿼트 사용
        //ex] string str="I love you!"; 
 
        //3.논리자료형
        //참/거짓 true false 데이터를 저장하는 자료형
        //ex] boolean isGender1 = false; 
        //ex] boolean isGender2 = true; 

        //1.정수자료형
        int numInt = 30;
        long numLong = 300000000;

        System.out.println("int형" + numInt);
        System.out.println("long형" + numLong);

        //2.실수자료형
        double numDouble = 1.141524;
        float numFloat = 3.14f;//플로트형은 더블형보다 작은 실수표기, 반드시 숫자맨뒤에 f를 붙여서 표기

        System.out.println("double형" + numDouble);
        System.out.println("float형" + numFloat);

        //3.문자자료형
        char aChar = 'A';
        char bChar = '대';
        char cChar = 65; //ASCII CODE 값 : A=65, B=66,C=67, ....
        char dChar = 97; //ASCII CODE 값 : a=97, b=98,c=99, ....
        char eChar = 98; 

        System.out.println("a char " + aChar);
        System.out.println("b char " + bChar);
        System.out.println("c char " + cChar);
        System.out.println("d char " + dChar);
        System.out.println("e char " + eChar);
    }
}
