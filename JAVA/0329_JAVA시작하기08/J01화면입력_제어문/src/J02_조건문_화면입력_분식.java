import java.util.Scanner;
public class J02_조건문_화면입력_분식 {
    public static void main(String[] args) {
        //1.화면입력 scanner 클래스 가져오기
        //2.생성자(sc)만들기
        //3.간식메뉴 만든다. 메뉴1 메뉴2 메뉴3
        //4.조건문 구분을 만든다.
        //5.간식메뉴 변호(정수)를 입력받아 선택한다.
        //6.해당하는 조건문 수행 구현한다.

        Scanner sc = new Scanner(System.in);

        //메뉴선택
        System.out.println("간식 메뉴 번호 선택");
        System.out.println("1.떡볶이 2.순대 3.튀김");

        //화면입력
        int menu = sc.nextInt();

        //조건문 : if(){} else if (){} else{}
        if(menu==1){ //메뉴1 떡볶이
            System.out.println("떡볶이 선택");
        }
        else if(menu==2){ //메뉴2 순대
            System.out.println("순대 선택");
        }
        else if(menu==3){ //메뉴3 튀김
            System.out.println("튀김 선택");
        }
        else{
            System.out.println("메뉴에 없는 간식 선택했습니다.");
        }

    }
}
