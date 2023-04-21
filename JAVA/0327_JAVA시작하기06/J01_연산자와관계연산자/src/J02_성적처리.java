public class J02_성적처리 {
    public static void main(String[] args) {
        
        int kor , eng, math;

        //정수 입력 => 리터럴 값
        kor = 77;
        eng = 80;
        math = 85;

        //총점

        int sum = kor + eng + math;
        double avg =(double)sum / 3;


        System.out.println("국어" + kor);
        System.out.println("영어" + eng);
        System.out.println("수학" + math);
        System.out.println("평균" + avg);
        System.out.println("총점" + sum);
        System.out.println("총점" + (kor + eng + math));
        System.out.println("평균" + (double)sum / 3);
        
    }
}
