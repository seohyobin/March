/**
 * J01_입력화면_조건문_IF_SWITCH
 * 제한적인 조건문
 * 범위 조건에는 조금 부족하다. 그래서 if
 * 입력값을 받아서 
 * 선택된 메뉴에 따라 조건이 결정
 * ////////////////////////////////////
 * 문제]
 * 분식 판매 처리 프로그래밍_____________
 * 주문시 수량 입력안하면 기본은 1이다.
 * 아래의 지시사항 대로 구현 하시오.
 * ////////////////////////////////////
 */
import java.util.Scanner;
import java.text.DecimalFormat;
public class J01_입력화면_조건문_switch {

    public static void main(String[] args) {

        
        Scanner sc = new Scanner(System.in);

        // 0. 변수 선언 및 타입 지정, 초기값 설정   /////////////////////////////////////////////////////////////////////////
        int menu = 1;         
        int soo = 1;
        int price = 8000;
        int pan = price * soo; // 초기값 계산
        String menuStr = "떡볶이";


        // [1] INPUT(입력)   //////////////////////////////////////////////////////////////////////////////////////////////
        // 1-1. 입력화면 설계 - 메뉴선택 : 1. 떡볶이  2. 순대  3. 튀김
        // 1-2. 입력화면 설계 - 수량입력 : 1  
        System.out.println("손님 뭐 드실거예요 메뉴 선택하세요");
        menu = sc.nextInt();
        
        System.out.println("손님 몇개 주문할까요? 수량을 입력하세요");
        soo = sc.nextInt();


        // [2] PROCESS(처리)  //////////////////////////////////////////////////////////////////////////////////////////////
        // 2-1. 가격조견표
        // 1. 떡볶이 : 8000원  
        // 2. 순대 : 7000원
        // 3. 튀김 : 6000원

        // 2-2. 조건문 스위치 케이스 IF(){} ELSE IF(){} ELSE {}
        // 2-3. 정가 * 수량 = 판매가
        switch(menu){ // 메뉴가
            case 1:   // 1인 경우  (뭐뭐인~경우)
            // case '떡볶이';
                price = 8000;
                pan = price * soo;
                menuStr = "떡볶이";
                break;
            case 2:
            // case '순대';
                price = 7000;
                pan = price * soo;
                menuStr = "순대";
                break;
            case 3:
            // case "튀김":            
                price = 6000;
                pan = price * soo;
                menuStr = "튀김";
                break;
            default:
                price = 0;
                pan = price * soo;
                menuStr = "주문한 메뉴는 없습니다.";
        }

        // if( menu==1 || menu=='떡볶이' ){ // 비교
        //     price = 8000;
        //     pan = price * soo;
        //     menuStr = "떡볶이";
        // }
        // else if( menu==2 || menu=='순대'  ){ // 비교
        //     price = 7000;
        //     pan = price * soo;
        //     menuStr = "순대";
        // }
        // else if( menu==3 || menu=='튀김'  ){ // 비교
        //     price = 6000;
        //     pan = price * soo;
        //     menuStr = "튀김";
        // }
        // else {
        //     price = 0;
        //     pan = price * soo;
        //     menuStr = "주문한 메뉴는 없습니다.";
        // }

        // [3] OUTPUT(출력)  //////////////////////////////////////////////////////////////////////////////////////////////
        // 3-1. 출력설계 : ~ 를 선택했습니다. 잠시만 기다리세요
        // 3-2. 출력표시형식 : 메뉴, 수량, 정가, 판매 가격
        // 세자리 마다 콤머형식 : 데시멀 포멧형식    
        // 외부 클래스를 가져오면 반드시 생성자를 생성하여 사용한다.
        // DecimalFormat 은 숫자를 스트링 형태의 표시형으로 변환 => 반드시 출력는 스트링 자료형
        DecimalFormat df = new DecimalFormat("#,###");  // "#,###"   "#,##0"   인용부호는 반드시 스트링이니까 더블 쿼트
    
        System.out.println();
        System.out.printf("선택한 메뉴는 [ %d ]번 [ %s ]를, [ %d ]개 주문 했습니다.\n",  menu, menuStr, soo);
        System.out.printf("결재 금액은 [ %s ] 입니다.",  df.format(pan) );
        System.out.println();
        System.out.println();

    }
}