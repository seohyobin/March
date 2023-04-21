import java.util.*;;
public class J05_입력화면_조건문_할인율 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        //문제1]
        //정가(임의의 정수)를 입력받아서 
        //할인율울 정하라 그리고 판매가를 구하시오


        //조견표
        //정가 500,000원 이상 할인율20%
        //정가 100,000원 이상 할인율10%
        //정가  50,000원 이상 할인율 5%
        //정가  10,000원 이상 할인율 1%
        //정가에 할인율을 적용해서 판매가를 구하시오!!
        double rate = 0.0;
        //1.input
        long price = sc.nextLong();
        
        if(price>=500000){
            rate=0.2;
  
        }
        else if(price>=100000){
            rate=0.1;
        }   
        else if(price>=50000){
            rate=0.05;
        }   
        else if(price>=10000){
            rate=0.01; 
        } 
        else{
            rate=0.0;
        }  

        System.out.printf("정가 가격은 [%d]입니다" , price);
        System.out.printf("할인율은 [%d] 입니다" , rate);
        System.out.printf("판매가는 [%d] 입니다" , (long)(price*(1-rate)));

        //2.process 처리
        // if(num>=500000){
        //     System.out.println("가격 " + num*0.8);
        // }
        // else if(num>=100000){
        //     System.out.println("가격 " + num*0.9);
        // }
        // else if(num>=50000){
        //     System.out.println("가격 " + num*0.95);
        // }
        // else if(num>=10000){
        //     System.out.println("가격 " + num*0.99);
        // }
        // else{
        //     System.out.println("가격 " + num);
        // }

        //3.output
        System.out.println();
    }
}
