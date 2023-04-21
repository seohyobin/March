public class J05_논리연산자 {
    public static void main(String[] args) {
        //2항 연산
        //논리연산자(논리곱, 논리합, 논리부정)
        //&& : 논리곱 (AND) 연산자 =>모두 true 이면 true
        //|| : 논리합 (OR) 연산자 =>어느 하나라도  true 이면 true
        //!  : 논리부정(NOT) 연산자 => 반대 true 이면 fasle / false 이면 true

        //논리연산자 조건표
        ///////////// &&(AND 논리곱)/////////////////
        //2항 연산
        //모두 true 이면 true
        //  참/거짓     연산자    참/거짓     결과  
        //  true        &&        true      true
        //  true        &&       false     false
        //  false       &&        true     false
        //  false       &&       false     false

        ///////////// ||(OR 논리합)/////////////////
        //2항 연산
        // 어느하나라도  true 이면 true
        // 모두 false인 경우
        //  참/거짓     연산자    참/거짓     결과  
        //  true        ||        true      true
        //  true        ||       false      true
        //  false       ||        true      true
        //  false       ||       false     false

        ///////////// !(NOT 논리부정)/////////////////
        //단항 연산
        // 반대로 true 이면 false /false 이면 true
        //  참/거짓     연산자       결과  
        //  true         !         false
        //  true         !         false
        //  false        !          true
        //  false        !          true

        int num1 =90;
        int num2 =70;
        boolean p1 = num1 > num2;  //90 > 70  /90은 70보다 크다  true
        boolean p2 = num1 == num2; //90 == 70 / 90 70 같다  false
        boolean logic1 = p1 && p2; //p1논리값과 p2논리값 => 논리곱 AND
        boolean logic2 = p1 || p2; //p1논리값과 p2논리핪 => 논리합 or
        boolean logic3 = !p1; //p1논리값부정 (NOT)
        boolean logic4 = !p2; //p2논리값부정 (NOT)

        System.out.println("num1 =90 / num2 =70");
        System.out.println("p1 = num1 > num2: " + (num1 > num2));
        System.out.println("p2 = num1 == num2: " + (num1 == num2));
        System.out.println("p1 && p2: " + logic1);
        System.out.println("p1 || p2: " + logic2);
        System.out.println("!p1: " + logic3);
        System.out.println("!p2: " + logic4);
       

        //복합논리연산
        //() || ()
        boolean logic5 = (((num1>num2) && (num1<num2))||((num1==num2)||(num1!=num2)));
        System.out.println("(((num1>num2) && (num1<num2))||((num1==num2)||(num1!=num2)))" + logic5);

        //삼항연산
        //조건식 ? 참 : 거짓;

        int score = 90;
        score = 80;
        System.out.println("score >= 90 ? 합격 : 불합격=>  " + (score >= 90 ? "합격" : "불합격" ));

    }
}
