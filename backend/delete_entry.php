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
    $entry_id = json_decode(file_get_contents('php://input'));
 
    $sql = "DELETE from entries WHERE id='$entry_id' ";
    mysqli_query($conn,$sql);
 
};
?>