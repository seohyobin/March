/**
 * J01_입력화면_조건문_switch
 * 제한적인 조건문
 * 범위 조건에는 조금 부족, 그래서!!
 * 입력값을 받아서 선택된 메뉴에 따라 조건이 결정된다.
 */       
import java.util.*;
public class J01_입력화면_조건문_if {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        //0.변수타입과 변수 선언 및 타입지정, 초기값 설정
        String a="떡볶이";
        int menu = 1;
        int soo = 1;
        int price = 8000;
        int pan =price * soo;

        //주문시 수량 입력 안하면 기본은 1이다.
        //아래의 지시사항대로 구현하시오

        //Input
        //1-1.입력화면 설계-메뉴선택 : 1.떡볶이 2.순대 3.튀김
        //1-2.입력화면 설계-수량입력 : 
        System.out.println("번호를 선택하세요 1.떡볶이 2.순대 3.튀김");
        menu = sc.nextInt();

        System.out.println("수량을 입력하세요");
        soo = sc.nextInt();

       


        //Process
        //2-1. 가격 조견표
            //1.떡볶이 :8000원
            //2.순대   :7000원
            //3.튀김   :6000원
        //2-2.조건문 스위치 케이스 if(){} else if(){} else{}
        //2-3.정가*수량 = 판매가

        if(menu==1){
            price=8000;
            pan=soo*price;
            a="떡볶이";
     
        }
        else if(menu==2){
            
            price=7000;
            pan=soo*price;
            a="순대";

        }
        else if(menu==3){

            price=6000;
            pan=soo*price;
            a="튀김";
        }   
    
        //Output
        //3-1.출력설계 : ~를 선택했습니다. 잠시만 기다리세요
        //3-2.출력표시형식 : 메뉴, 수량, 정가, 판매 가격 
        System.out.printf("[%s]를 선택했습니다. 잠시만 기다리세요. ",a);
        System.out.printf("가격은 [%d]입니다." , price);
        System.out.printf("판매가 [%d] 선택했습니다. ",pan );




    }
}