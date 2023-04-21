public class J02_리터럴_데이터파일_형변환 {
    public static void main(String[] args) {
        //숫자 리터럴
        long priceNum = 12_345_678_921_345_678L;
        //long priceNum = 12_345_678_921_345_678_L;//마지막끝에 사용 불가

        System.out.println("숫자 리터럴_언더바(언더스코아)사용 : 가독성 높여준다. __________");
        System.out.println("12_345_678_921_345_678L " +priceNum);

        float floatNum = 3.14159f;
        //float floatNum = 3_._14159f;//소수점자리 앞 뒤에는 언더바 사용불가
        System.out.println("숫자 리터럴_언더바(언더스코아)사용 : 가독성 높여준다. __________");
        System.out.println("3.14159f " +floatNum);



        long longNum = 0x76;
        //long longNum = 0_x76;  x앞뒤 사용불가
        //long longNum = 0x_76;  x앞뒤 사용불가
        long longNum2 = 0b01010;
        // long longNum2 = 0_b01010; b앞뒤 사용불가
        // long longNum2 = 0b_01010; b앞뒤 사용불가
        long longNum3 = 045; //8진수
        long longNum4 = 0____________45; //8진수
        long longNum5 = 0_155___555___45; //8진수
        //long longNum5 = 045_; 맨뒤 사용불가

        System.out.println("숫자 리터럴_언더바(언더스코아)사용 : 가독성 높여준다. __________");
        System.out.println("longNum= 0x76 " +longNum);
        System.out.println("longNum2= 0b01010 " +longNum2);
        System.out.println("longNum3= 045 " +longNum3);
        System.out.println("longNum4= 0____________45 " +longNum4);
        System.out.println("longNum5= 0_155___555___45 " +longNum5);
    }
}
