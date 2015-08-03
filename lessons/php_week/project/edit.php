<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "storeddata";


$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn)
{
    die("Connection failed: " . mysqli_connect_error());
}

if(isset($_POST["id"]))
{
$id=$_POST["id"];
$name=$_POST["name"];
$email=$_POST["email"];
$phnum=$_POST["phnum"];
$sex=$_POST["sex"];
$interest=$_POST["interest"];
$country=$_POST["country"];
$state=$_POST["state"];
$address=$_POST["address"];

$sql = "UPDATE subscriptiondata SET Name='$name',Email='$email',Mobile='$phnum',Sex='$sex',Interest='$interest',Country='$country', State='$state' ,Address='address'  WHERE id='$id'";
if (mysqli_query($conn, $sql))
 {

     $output='{"name":"'.$name.'","phnum":"'.$phnum.'","email":"'.$email.'","sex":"'.$sex.'","interest":"'.$interest.'","country":"'.$country.'","state":"'.$state.'","address":"'.$address.'"}';  

     echo $output;
  }
}
?>


