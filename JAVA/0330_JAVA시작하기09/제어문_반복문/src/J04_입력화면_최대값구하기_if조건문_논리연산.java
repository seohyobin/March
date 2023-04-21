import java.util.*;
public class J04_입력화면_최대값구하기_if조건문_논리연산 {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        //자연수 3개를 입력받아서
        //최대값을 구하시오
        //최소값을 구하시오
        //max min
        //입력값  (print,printf,println) 이용하시오

        //최대값구현 알고리즘 : 중첩조건문 다중조건문
        
        //1. input 입력메세지/자연수입력
        int num1= sc.nextInt();
        System.out.println("첫번째숫자" + num1);
        int num2= sc.nextInt();
        System.out.println("두번째숫자" + num2);
        int num3= sc.nextInt();
        System.out.println("세번째숫자" + num3);

        int max= 0;
        int min= 0;
        //2.process(처리) 논리연산자 (! && ||) 
        if(num1>num2 && num1>num3){
            max=num1;
            if(num2>num3){
                min=num3;
            }
            else{
                min=num2;
            }
        }
        else if(num2>num1 && num2>num3){
            max=num2;
            if(num2>num1){
                min=num1;
            }
            else{
                min=num2;
            }
        }
        else if(num3>num1 && num3>num2){
            max=num3;
            if(num3>num1){
                min=num1;
            }
            else{
                min=num3;
            }
        }

        //3.output 출력형식최대값
        System.out.println();
        System.out.println("최대값");
        System.out.printf("자연수1=>%d 자연수2=>%d 자연수3=>%d 최대값은=>%d" , num1, num2, num3, max);
        System.out.println();
        //3-1.output 출력형식최소값
        System.out.println();
        System.out.println("최소값");
        System.out.printf("자연수1=>%d 자연수2=>%d 자연수3=>%d 최소값은=>%d" , num1, num2, num3, min);
        System.out.println();
        
        // if(num1-num2>num1-num3){
        //     System.out.println("최대값는" +num1 );
        //     if(num2>num3){
        //         System.out.println("최소값은" + num3);
        //     }
        //     else if (num2<num3){
        //         System.out.println("최소값은" + num2);
        //     }
        // }
        // else if(num2-num1>num2-num3){
        //     System.out.println("최대값는" +num2 );
        //     if(num1>num3){
        //         System.out.println("최소값은" + num3);
        //     }
        //     else if (num1<num3){
        //         System.out.println("최소값은" + num1);
        //     }
        // } 
        // else if(num3-num1>num3-num2){
        //     System.out.println("최대값는" +num2 );
        //     if(num1>num2){
        //         System.out.println("최소값은" + num2);
        //     }
        //     else if (num1<num2){
        //         System.out.println("최소값은" + num1);
        //     }
        // }  
        // else{
        //     System.out.println();
        // }


    }
}