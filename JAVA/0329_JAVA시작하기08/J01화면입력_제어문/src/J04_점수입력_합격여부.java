import java.util.*;
public class J04_점수입력_합격여부 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //문제1]성적처리

        //1.화면입력
        //국어점수
        //수학점수
        //영어점수
        //=>3과목 점수 입력 받아서

        //2.연산처리
        //총점 연산

        //3.조건문 구현 출력
        //평균 연산=>80이상 합격 미만 불합격
        System.out.println("평균점수");

        int kor = sc.nextInt();  
        System.out.println("국어" + kor);
        int eng = sc.nextInt();  
        System.out.println("영어" + eng);  
        int math = sc.nextInt(); 
        System.out.println("수학" + math);


        double avg = (double)kor+eng+math / 3;
        System.out.println("평균" + avg);


        if(avg>=80){
            System.out.println("합격입니다");
        }
        else if(avg<80){
            System.out.println("불합격입니다");
        } 
        else{
            System.out.println("다시입력해주세요");
        }
        
    }
}
