<?php 
ini_set('display_errors',1);
error_reporting(E_ALL);
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = 'blog';
$conn = mysqli_connect($servername,$username,$password,$dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }


$method = $_SERVER['REQUEST_METHOD'];
switch($method)
{
    case "POST";
    $userpostdata = json_decode(file_get_contents('php://input'));

    $name = $userpostdata->name;
    $password =$userpostdata->password;
  $sql = "SELECT * FROM users WHERE name='$name'";

  if($name != '' && $password !=''){
  
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        
        while($row = mysqli_fetch_assoc($result)) {
          if($password != $row['password']) {
            http_response_code(422);
            $response =array("message" => "invalid password",);
            echo json_encode($response);
          }else {
            $response = array("id" => $row['id'], "name"=> $row['name'], "email" => $row['email'] );
            echo json_encode($response);
          }
            
        }
      } else {
        http_response_code(401);
        $response = array("message" => "invalid username",);
        echo json_encode($response);
      }
      
    
    }else {
           
    }
};
?>