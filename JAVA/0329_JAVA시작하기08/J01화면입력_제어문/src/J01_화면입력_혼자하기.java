import java.util.Scanner;
public class J01_화면입력_혼자하기 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("문자열을 입력하세여");
        String str = sc.nextLine();
        System.out.println("입력된 string = " + str);

        System.out.println("단어를 입력하세요");
        String word = sc.next();
        System.out.println("입력된 단어는 ? : " + word);

        System.out.println("정수를 입력하세요");
        int num = sc.nextInt();
        System.out.println("입력된 정수는 :" + num);

        System.out.println("실수를 입력하세요");
        double num_d = sc.nextDouble();
        System.out.println("입력된 실수는 : " + num_d);

        System.out.println("단어를 입력하세요");
        char ch = sc.next().charAt(1);
        System.out.println("입력된 단어는 : " + ch);
        
        sc.close();
    }
}
