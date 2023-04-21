import java.util.*;;
public class J02_입력화면_조건문_자연수의합 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //문제2]
        //자연수 2개 입력받아서
        //합과 num1+num2
        //차를 구한다 num1-num2


        //1.입력
        System.out.println("자연수를구하시오");
        int num1 = sc.nextInt();
        System.out.println("첫번째숫자"+num1);
        int num2 = sc.nextInt();
        System.out.println("두번째숫자"+num2);

        //2.두수의 합
        System.out.printf("두자연수의 합은 %d + %d = %d\n",num1,num2,num1+num2);
        System.out.println();

        //2-2두수의 차
         //조건이 필요 : 작은수 - 큰수 = -(음수) 나옴
         //그래서 조건문이 필요 큰수 - 작은수 로 처리

         if(num1>num2){
            System.out.printf("두자연수의 차은 %d - %d = %d\n",num1,num2,num1-num2);
            System.out.println();
         }
         else{
            System.out.printf("두자연수의 차은 %d - %d = %d\n",num1,num2,num2-num1);
            System.out.println();
         }

        // if(cha <-1){
        //    System.out.println("차"+cha*-1);
        // }
        // else{
        //     System.out.println("차" + cha);
        // }
    }
}
