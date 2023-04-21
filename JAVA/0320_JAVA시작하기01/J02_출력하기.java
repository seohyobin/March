public class J02_출력하기 {
    public static void main(String[] args) {
        System.out.println("자바출력문 라인 피드 줄바꿈");
        System.out.println("자바" + "JDK 프로그램"); //문자열 + 문자열 연결연산자
        //정수출력
        System.out.println(30);
        //실수출력
        System.out.println(255.55); 

        //사칙연산
        System.out.println(1550+130);
        System.out.println(12.98+35.33);
        System.out.println("250 + 130 = " + (250 + 130));
        System.out.println("250 * 130 = " + (250 * 130));
        System.out.println("250 - 130 = " + (250 - 130));
        System.out.println("250 / 130 = " + (250 / 130));

        //줄바꿈없는 프린트 출력 Escape New Line 사용 
        System.out.print("문자열안에 \n");
        System.out.print("줄바꿈넣기 \n");
        System.out.print("새로운줄에서 \n줄바꿈");


        //printf %d 사용 숫자출력 => c 언어 형식 출력
        System.out.printf("\n정수 : %d", 3300);
        System.out.printf("\n정수 : %d", 15000);

        //시스템 줄바꿈 메소드 사용하기
        System.out.println("method이용 줄바꿈" +System.lineSeparator()+ "다음줄 내용");
        System.out.println("" + System.lineSeparator() + "");
        System.out.println("" + System.lineSeparator() + "");
        System.out.println("" + System.lineSeparator() + "");
    }
}
