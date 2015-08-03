<?php

    $stateErr=$nameErr=$addressErr=$emailErr=$mobileErr=$interestErr=$countryErr=$sexErr="";
    $flag=0;
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["name"])) {
     $nameErr = "Name_is_required";
     $flag=1;
    } 
   if (empty($_POST["email"])) {
     $emailErr = "Email_is_required";
    
     $flag=1;
    } else {
      
     if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL))
         {
          $emailErr = "Email_is_incorrect";
          $flag=1;
        }
   }
   if (empty($_POST["phoneno"])) {
     $mobileErr = "PhNum_is_required";
     $flag=1;
    } else {
     
     if(strlen($_POST["phoneno"])!=10)
     {
         $mobileErr = "PhNum_is_incorrect";
        $flag=1;
     }
   }
   if (empty($_POST["sex"])) {
     $sexErr = "Sex_is_required";
     
     $flag=1;
    } 
   if (empty($_POST["interest"])) {
     $interestErr = "Interest_is_required";
    
     $flag=1;
    } 
    
    
            
   
   if (empty($_POST["country"])) {
     $countryErr = "Country_is_required";
     
     $flag=1;
    } 
   if(empty($_POST["add"])) {
     $addressErr = "Address_is_required";
     
     $flag=1;
    } 
   
   if (empty($_POST["state"])) {
     $stateErr = "State_is_required";
    
     $flag=1;
    } 
   
   if($flag==1)
   { $output='{"nameErr":"'.$nameErr.'","emailErr":"'.$emailErr.'","mobileErr":"'.$mobileErr.'","sexErr":"'.$sexErr.'","interestErr":"'.$interestErr.'","countryErr":"'.$countryErr.'","stateErr":"'.$stateErr.'","addressErr":"'.$addressErr.'"}';
    echo $output;
   }

 
if($flag==0)
{
    
  /*$csvdata="name:".$_POST["name"].",email:".$_POST["email"].",phone_number:".$_POST["phoneno"].",sex:".$_POST["sex"].",interest:".$_POST["interest"].",country:".$_POST["country"].",state:".$_POST["state"].",address:".$_POST["add"].PHP_EOL;
  $fp = fopen("data.csv","a"); 
  if($fp)
  {
    fwrite($fp,$csvdata); 
        fclose($fp); 
        
  }
   echo '{"status":"SUCCESSFULLY SUBMITTED"}'; */




    $Name=$_POST["name"];
    $Email=$_POST["email"];
    $Phone=$_POST["phoneno"];
    $Interest=$_POST["interest"];
    $Address=$_POST["add"];
    $Country=$_POST["country"];
    $Sex=$_POST["sex"];
    $State=$_POST["state"];
    STATIC $counter=1;


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "storeddata";
$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn)
{
    die("Connection failed: " . mysqli_connect_error());
}
$sql = "INSERT INTO subscriptiondata (Name,Email,Mobile,Sex,Interest,Country,State,Address)
VALUES('$Name','$Email','$Phone','$Sex','$Interest','$Country','$State','$Address')";
//POPULATING MAP DATABASE
if (mysqli_query($conn, $sql)) 
{
    
    exit();
    $counter++;
} 
else 
{
     mysqli_error($conn);
  
}
}



}  
 

 //header("Location:index.php");
?>