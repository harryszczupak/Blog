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

    $title = $userpostdata->title;
    $description =$userpostdata->description;
    $user_id = $userpostdata->user_id;
  $date = $userpostdata->dateData;
  $sql = "INSERT INTO entries (title, description , user_id,date) VALUES ('$title', '$description', '$user_id', '$date')";
  if (mysqli_query($conn, $sql)) {
    echo json_encode('Entry added succesfully');
} else {

}
};
?>