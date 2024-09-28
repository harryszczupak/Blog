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
    case "GET";
   
   
  $sql = "SELECT name, entries.id, entries.title,entries.description,entries.date,entries.user_id
FROM users
INNER JOIN entries ON users.id = entries.user_id";

    $result = mysqli_query($conn,$sql);
  
    if (mysqli_num_rows($result) > 0) {
        $arr = [];
        while($row = mysqli_fetch_assoc($result)) {
           
            $response= array("id" => $row['id'],"title" => $row['title'],
        "description" => $row['description'],"dateData" => $row['date'], "userName" => $row["name"],
    "userName" => $row["name"], "userId" => $row["user_id"] );
        array_push($arr,$response);
      
        };
        echo json_encode($arr);
    }
   
} 
;
?>