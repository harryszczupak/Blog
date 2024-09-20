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
    $email = $userpostdata->email;

  $sql = "INSERT INTO users (name, password , email) VALUES ('$name', '$password', '$email')";

  if($name != '' && $password !='' && $email !=''){

    if (mysqli_query($conn, $sql)) {
          echo json_encode('Account has been added');
      } else {
      
      }
} };
?>