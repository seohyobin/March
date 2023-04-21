
import java.util.*;
public class J01_입력화면_조건문_홀짝 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //문제1]

        //자연수를 입력받아서
        //짝수(Even)인지 홀수(Odd)인지 판단 조건문
        //%mod 나머지 mode 최빈수
        //1.입력 : 자연수
        //2.조건 : 짝수 홀수 판단
        //3.입력된 숫자와 "짝수입니다" || "홀수입니다" 

        //1.입력 메세지 & 입력화면
        System.out.println("자연수를 입력하세요");
        int num1 = sc.nextInt();
        
        //2.조건 : num1 2로나누어서 나머지가 0이면 짝수 아니면 홀수
        System.out.printf("입력값 :[%d]은 " , num1);
        if(num1%2==0){

            System.out.println("짝수입니다.");
        }
        else{
            System.out.println("홀수입니다.");
        }
        



        
        sc.close();

    }
}