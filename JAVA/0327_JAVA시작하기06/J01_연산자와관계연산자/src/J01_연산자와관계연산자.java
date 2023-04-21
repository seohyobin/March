public class J01_연산자와관계연산자 {

    public static void main(String[] args) {
        //문제1] 성적 연산처리
        //국어, 영어, 수학, 총점, 평균 자료형에 맞게 변수지정하고
        //총점과 평균을 출력하시오
        //출력은 국어 영어 수학 총점 평균 모두 출력

        //1.변수 선언
        //국어영어수학 총점  자료형-> 정수형 integer
        //평균은 소수점이 포함된 결과가 나오기 때문에 실수형 ->float double 로 지정

        int kor , eng, math, tot;
        float avg;

        //정수 입력 => 리터럴 값
        kor = 77;
        eng = 80;
        math = 85;
        
        //총점 연산 합계
        tot =kor + eng + math;

        //평균 연산 => 총점 / 3
        avg = (float)tot / 3;

        
        System.out.println("국어" + kor);
        System.out.println("영어" + eng);
        System.out.println("수학" + math);
        System.out.println("총점" + tot);
        System.out.println("평균" + avg);


    }
}