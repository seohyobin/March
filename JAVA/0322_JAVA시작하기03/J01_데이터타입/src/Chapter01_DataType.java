
public class Chapter01_DataType {

    public static void main(String[] args) {
        //데이터타입
        //bit < 4bit < 8bit 1byte >16bit 2byte
        //변수에 타입 지정 논리형(Boolean 1Byte 2진법) 바이트 문자(2Byte) 정수(Byte(1byte), short(2byte), int(4btye), long(8byte)) 실수 문자형
        //131072 65536 32768 16384  8192  4096  2048  1024  512  256  128   64    32   16   8    4     2    1
        // 2^17  2^16   2^15  2^14  2^13  2^12  2^11  2^10  2^9  2^8  2^7   2^6   2^5  2^4  2^3  2^2  2^1 2^0

        //표현범위 -(2n-1) ~ (2n-1)-1
        //8bit의 표현범위 -128 ~127
        //n=8
        //-2^(8-1)~2^(8-1)-1
        //-2^7 ~ 2^7-1
        //-128~127

        //10진수 최대수(n-1 =>10-1 =   9)는 0 1 2 3 4 5 6 7 8 9
        //0 1 2 3 4 5 6 7 8 9 A(10) B(11) C(12) D(13) E(14) F(15) =>2진수 4자리 필요하다 1111
        //10진수 => 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32

        //16진수 최대수(16-1 =>16-1 = 15)는 0 1 2 3 4 5 6 7 8 9 A(10) B(11) C(12) D(13) E(14) F(15)
        //10진수 표현 => 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
        //16진수 표현 => 0 1 2 3 4 5 6 7 8 9  A  B  C  D  E  F 10 11 12 13 14 15 16 17 18 19 1A 1B 1C 1E 1F 20 21

        // 8진수 => 최대수(n-1 => 8-1 => 7) =>2진수 3자리가 필요하다 111
        //10진수 표현 => 0 1 2 3 4 5 6 7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32
        // 8진수 표현 => 0 1 2 3 4 5 6 7 10 11 12 13 14 15 16 17 20 21 22 23 24 25 26 27 30 31 32 33 34 35 36 37 40

        // 4진수 => 최대수(n-1 => 4-1 => 4) => 2진수 2자리가 필요하다 11
        //10진수 표현 => 0 1 2 3  4  5  6  7   8  9  10 11 12 13 14 15  16  17  18  19  20  21  22  23  24  25  26  27  28 
        // 4진수 표현 => 0 1 2 3 10 11 12 13  20  21 22 23 30 31 32 33 100 101 102 103 110 111 112 113 120 121 122 123 130
        
        //2진수
        //전원 켠다 on(1) 끈다 off(0)
        //전원스위치가 0개 이면 표현방법 몇가지 ? => 2^0 -> 1가지
        //전원스위치가 1개(on off)이면 표현방법 몇가지 ? =>2^1 -> 2가지
        //사람이 사용하는 10진수중 가장 작은 수 0(zero) 를 off 상태로 표현하고 1을 on상태로 표현한다.
        //그래서 2진수가 탄생!!
        // 0 과 1
        // 0 또는 1 1비트에 표현 숫자는 0또는 1 이라고 표현한다. bit  =>  Binery Term

        // 2진수 => 최대수(n-1 => 2-1 => 1)
        //10진수 표현 => 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32  
        //2 진수 표현 =>
        //10진수 2진수
        // 0    0   
        // 1    1
        // 2    10
        // 3    11
        // 4    100
        // 5    101
        // 6    110
        // 7    111
        // 8    1000    
        // 9    1001
        // 10   1010
        // 11   1011
        // 12   1100
        // 13   1101
        // 14   1110
        // 15   1111    
        // 16   10000
        // 17   10001
        // 18   10010
        // 19   10011
        // 20   10100


        // 45  => 101101

        //65536 32768 16384  8192  4096  2048  1024  512  256  128   64    32   16   8    4     2    1  2^n 2의 n승 조건표
        //2^16   2^15  2^14  2^13  2^12  2^11  2^10  2^9  2^8  2^7   2^6   2^5  2^4  2^3  2^2  2^1 2^0
        //                                                                  1    0    1    1    0    1      0010 1101
        //                                                                  32   0    8    4    0    1 =>32+0+8+4+0+1 = 45


        //예] 2진수 => 4진수 => 2진수 2자리 [11]
        //문제1] 0101 1101(2)
        // 21  21  21  21
        // 01  01  11  01
        //================
        //  1   1   3   1  (4진수)

        //문제2] 3213(4)
        //21 21 21 21
        // 3  2  1  3
        //11 10 01 11

        //문제3] 1101 1101 (2)
        // 11 01 11 01
        // 21 21 21 21
        // 3  1  3  1 (4)
        // 3131(4)

        //13(4)
        //1. 4진수(3) 자리를 1자리씩 나누어 쓴다. 2 1
        // 21 21
        //  1  3
        //=======
        // 01  11 

        //예] 2진수 =>8진수(7) =>2진수 2자리[111] 4 2 1
        // 문제1]173 (8)
        // 421 421 421
        //  1   7   3
        //=============
        //001  111  011
        //문제2] 11011110101010(2) 
        //반드시 뒤에서 앞으로 3자리씩 나누어 표기한다.
        //자리가 부족한 앞자리는 0으로 채운다.
        // 421 421 421 421 421
        // 011 011 110 101 010 
        //=====================
        //  3   3   6   5   2

        //문제2] 7546(8)
        //   7   5   4   6 
        // 421 421 421 421
        // 111 101 100 110


        //예] 2진수 =>16진수(15) =>2진수 2자리[1111] 8 4 2 1 
        // 173A (16)
        // 8421 8421 8421 8421
        //   1    7    3    A(10)
        // 0001 0111  0011  1010

        //문제2] CB98(16)
        //  C    B    9    8
        //8421 8421 8421 8421
        //====================
        //1100 1011 1001 1000


        //예] 2진수 => 8진수 => 2진수 3자리 [11]
        //예] 2진수 => 16진수 => 2진수 4자리 [11]
        //예] 2진수 => 10진수 => 2^n  16 8 4 2 1 

        //문제1] 126(10)
            // 128 64 32 16 8 4 2 1
            //  0   1  1  1 1 1 1 0 =>0111 1110(2)
            //     64 32 16 8 4 2 0 =>64+32+16+8+4+2=>126
        //문제2] 1011011(2)
        // 64 32 16  8  4  2  1 
        //  1  0  1  1  0  1  1
        // 64  0 16  8  0  2  1=>64+16+8+2+1=>91
        
        
        













    }                            
}