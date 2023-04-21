//import java.util.*;
import java.util.Scanner;

public class J01_화면입력 {

    public static void main(String[] args) {
       Scanner sc = new Scanner(System.in);

    //1.문자열 입력을 받을때 외부 클래스인 Scanner를 import해서
    //  생성자를 생성하여 사용한다.
    //  문단을 입력받는다. 즉 enter 치면 입력받는다. => 문단 파라그래프
        System.out.println("문자열을 입력하세요");
        String str = sc.nextLine();
        System.out.println("입력된 문자는 = " + str);




    //2. 단어 입력
    //   단어(word)는 공백전까지 입력받는다.
        System.out.println("단어를 입력하세요 : ?");
        String word = sc.next(); //공백전까지 받는당
        System.out.println("입력단어는 = " + word);    
        System.out.println();   
    
    //3.정수 입력
        System.out.println("정수 입력 : ");
        int num = sc.nextInt();
        System.out.println("입력된 정수는 :" + num);
        System.out.println();


    //4. 실수 입력
        System.out.println("실수 입력 : ");
        double num_d = sc.nextDouble();
        System.out.println("입력된 실수는 :" + num_d);
        System.out.println();    

    //5.글자단위 문자(1글자)입력 : next().글자단위로(인덱스번호) 
    //next().charAt(index, Number) 인덱스번호가 첫번째글자0,두번째1,세번째2...

        System.out.println("문자를 입력 : ");
        char ch0 = sc.next().charAt(0);
        // char ch1 = sc.next().charAt(1);
        // char ch2 = sc.next().charAt(2);
        System.out.println("입력된글자는(첫번째) = " + ch0);
        // System.out.println("입력된글자는(두번째) = " + ch1);
        // System.out.println("입력된글자는(세번째) = " + ch2);







       sc.close();

       
    }
}