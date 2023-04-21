/*
 * 스캐너 클래서 가져와서 사용하기
 * import 사용해서 가져와
 * class는 사용시 반드시 생성자를 생성하고 사용한다.
 */
import java.util.*;//유틸패키지 (폴더) 들어있는 모든 클래스를 가져와서 사용한다.

public class J03_화면입출력 {
    public static void main(String[] args) {
        //const scanner= new Scanner(System.in);  ->react방법

        //생성자 생성 : 화면입력
        Scanner newScanner= new Scanner(System.in);
        
        //1.문자열를 입력해주세요
        System.out.println("문자열을 입력하세요");

        //2.화면입력 : newScanner.nextLine(); 문자열 입력을 하는 코딩 
        String str = newScanner.nextLine(); //화면에서 입력받는 문자열=> str 변수에 대입

        //3.입력받은 str 변수 문자열 출력
        System.out.println("--------------------------");
        System.out.printf("str = %s \n",str);
        System.out.println();
        
        //문자열 입력받기 (한단어) :공백 전까지 입력받음
        //newScanner.next(); : 문자열 입력을 닫어 단위로 입력받는다.
        System.out.println("문자열 단어를 입력하세요");
        String word =newScanner.next();
        System.out.printf("word = %s\n", word);
        System.out.println();


        
    }
}
