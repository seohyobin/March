public class J01_데이터타입_형변환 {

    public static void main(String[] args) {
        //문자 정수
        System.out.println("_______문자 정수_______");
        System.out.println(65);
        System.out.println((char)65); //ASCII 아스키코드 65 A Upper Case
        System.out.println('a');
        System.out.println((int)'a'); //ASCII 아스키코드 97 a Low case
        System.out.println('A');
        System.out.println((int)'A');
        System.out.println('z');
        System.out.println((int)'z'); //ASCII 아스키코드 122 z Low case
        System.out.println('Z');
        System.out.println((int)'Z'); //ASCII 아스키코드 90 Z Upper Case

        //정수 실수
        System.out.println("_______정수 실수_______");
        System.out.println(255);
        System.out.println("(float)" + (float)255);
        System.out.println("(double)" + (double)255);

        System.out.println(3.14159f);
        System.out.println("(int)3.14159f"+ (int)3.14159f);
        System.out.println("(int)3.14159d"+ (int)3.9994159d);

        //정수(int long) 실수(Double Float) 리터럴 -> 접두사 접미사
        System.out.println("");
        System.out.println("_______실수(Double)_______");
        double num_double_D = 354.1234567891234567123890D; //맨뒤에 접미사 D double은 13자리까지 나와
        double num_double_d = 354.1234567891234567123890d; //맨뒤에 접미사 d
        double num_double   = 354.1234567891234567123890; //맨뒤에 접미사 생략 =>double 생략 가능//float 생략 불가능
        System.out.println("num_doubleD " + num_double_D);
        System.out.println("num_doubled " + num_double_d);
        System.out.println("num_double "  + num_double);

        System.out.println("");
        System.out.println("_______실수(Double) =>정수(int)형 변환_______");

        int num_int1 =(int)num_double_D;
        int num_int2 =(int)num_double_d;
        long num_long =(long)num_double;   

        System.out.println("num_int1 " + num_int1);
        System.out.println("num_int2 " + num_int2);
        System.out.println("num_long " + num_long);
         

        System.out.println("");
        System.out.println("_______ 실수(Float)_______");
        float num_float_F = 354.1234567891234567123890F; //맨뒤에 접미사 F float은 6~7자리까지 나와
        float num_float_f = 354.1234567891234567123890f; //맨뒤에 접미사 f float은 6~7자리까지 나와
        //float num_float = 354.1234567891234567123890; //맨뒤에 접미사 f 생략 불가!!!!! 
        System.out.println("num_float_F " + num_float_F);
        System.out.println("num_float_f "  + num_float_f);

        System.out.println("");
        System.out.println("_______실수(float) =>실수(double)형 변환_______");

        float num_float_F1 = 354.1234567891234567123890F; //맨뒤에 접미사 F float은 6~7자리까지 나와
        float num_float_f1 = 354.1234567891234567123890f; //맨뒤에 접미사 f float은 6~7자리까지 나와
        double num_double_D_float_F = (double)num_float_F1;
        double num_double_d_float_f = (double)num_float_f1;

        System.out.println("num_double_D_float_F "+num_double_D_float_F);
        System.out.println("num_double_D_float_f "+num_double_d_float_f);

        System.out.println("");
        System.out.println("_______수동형변환 (명시적 형변환) | 문자 -> 숫자_______");

        //1.문자 => 숫자
        String strNum = "1"; //string 첫글자는 대문자로 선언한다. "" =>스트링은 이거 써 /리터럴값은 더블쿼트 사용


        //string -> int
        int intNum = Integer.parseInt(strNum);
    
        System.out.println("_______ string -> int_______");
        System.out.println("string strNum = " + strNum);
        System.out.println("Integer.parseInt(strNum)=> intNum = " + intNum);
        System.out.println(intNum * 5);

         //string -> double
         double doubleNum = Double.valueOf(strNum);
         System.out.println("_______ string -> double_______");
         System.out.println("string strNum = " + strNum);
         System.out.println("Double.valueOf(strNum)=> doubleNum = " + doubleNum);

         //string -> float
         float floatNum = Float.valueOf(strNum);
         System.out.println("_______ string -> float");
         System.out.println("string strNum = " + strNum);
         System.out.println("Float.valueOf(strNum)=> floatNum = " + floatNum);

         //string -> long
         long longNum = Long.parseLong(strNum);
         System.out.println("_______ string -> long");
         System.out.println("string strNum = " + strNum);
         System.out.println("Long.parseLong(strNum)=> longNum = " + longNum);

         //string -> short
         short shortNum = Short.parseShort(strNum);
         System.out.println("_______ string -> short");
         System.out.println("string strNum = " + strNum);
         System.out.println("Short.parseShort(strNum)=> shortNum = " + shortNum);


         System.out.println("");
         System.out.println("_______수동형변환 (명시적 형변환) | 숫자 -> 문자_______");
         //숫자 => 문자
         // String strNum2 = ''; //싱클쿼트는 string에서 리터럴값이 오류

        int intNum2 = 10;
        String strNum2 = "";

        strNum2 = String.valueOf(intNum2);
    
        System.out.println("int intNum2 = " + intNum2);
        System.out.println("String.valueOf(intNum2)=> strNum2 = " + strNum2);

        strNum2 = Integer.toString(intNum2);
        System.out.println("int intNum2 = " + intNum2);
        System.out.println("Integer.toString(intNum2)=> strNum2 = " + strNum2);

        //3.정수 <=> 실수

        double doubleNum2 = 1.12345;
        float floatNum2 = 1.12345f;
        int intNumResult;
        //double -> int
        intNumResult = (int) doubleNum2;
        System.out.println(" doubleNum2 = " + doubleNum2);
        System.out.println("(int) doubleNum2=> intNumResult = " + intNumResult);

        intNumResult = (int) floatNum2;
        System.out.println(" floatNum2 = " + floatNum2);
        System.out.println("(int) floatNum2=> intNumResult = " + intNumResult);

    }
}
