<?


    //CORS
    header('Access-Control-Allow-Origin: *'); 
    header('Access-Control-Allow-Headers: *');

    $db_server         ='localhost';
    $db_user_name      ='luck1409';
    $db_user_password  ='Ejqmf5767!!';
    $db_name           ='luck1409';

    $conn = mysqli_connect($db_server, $db_user_name , $db_user_password, $db_name);
    mysqli_set_charset($conn,'utf8');

    $sql = "INSERT INTO sign_up(id, pw, name, email, hp ,address ,gender ,birth ,service ,chooga ,sign_up_date) 
            VALUES('$user_id','$user_pw','$user_name ','$user_email','$user_hp','$user_addr','$user_gender','$user_birth','$user_service','$user_add_input','$user_gaib_date')";
             $result =  mysqli_query($conn,$sql); //쿼리 실행 
            if (!$result){
                echo("데이터 베이스 테이블에 회원정보 저장 실패");
            }
            else{
                echo("마켓컬리 회원가입을 축하드립니다");

            }

?>