/**
 * J01_Basic
 */
public class J01_Basic1 { //파일이름.java과 클래스 이름 같게 설정한다.


    public static void main(String[] args) {
        System.out.println("");
        System.out.println("");
        System.out.println("");
        System.out.println("---------------------------------");
        System.out.println("자바시작하기 내용 출력 줄바꿈 발생");
        System.out.print("Hello java start!!!!!");
        System.out.print("Hello java start!!!!!");
        System.out.print("Hello java start!!!!!");
        System.out.print("Hello java start!!!!!");
        System.out.println("");
        System.out.println("");
        System.out.println("");
        System.out.println("\n-------------new line 이스케이프 역슬래시--------------------");
        //hap() method 호출 실행
        System.out.println("더하기 메소드 호출" + hap(200,300));
        System.out.println("곱하기 메소드 호출" + gob(200,300));
        System.out.println("");
        System.out.println("");
    }

        //리턴 값이 있는 method
        //기본 자료형 정수 integer 실수 문자열string 불린...
        public static int hap(int a, int b) {
            return a + b;
            
        }
        public static int gob(int a, int b) {
            return a * b;
            
        }
        public static void name1() {
            
        }

}