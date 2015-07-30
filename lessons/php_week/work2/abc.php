<?php
session_start();
$_SESSION["interest"]="";

  if( isset( $_SESSION['counter'] ) )
   {
     $_SESSION['counter']+=1;
   }
   else
   {
      $_SESSION['counter'] = 1;
   }
   $_SESSION['phpHIT']="set";
    
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   if (empty($_POST["name"]))
    {
     $nameErr = "Name is required";
     $_SESSION["name1"]= $nameErr;
    } else 
    {
     $_SESSION["name"] = test_input($_POST["name"]);
     }
  
   if (empty($_POST["email"])) {
     $emailErr = "Email is required";
     $_SESSION["email1"]= $emailErr;
    } else {
      
     $_SESSION["email"] = test_input($_POST["email"]);
     if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL))
         {
          $emailErr = "Email format is incorrect";
          $_SESSION["email1"]= $emailErr;
          echo "email error";
        }
        echo $_SESSION["email"];
   }
   if (empty($_POST["phoneno"]))
    {
     $phnumErr = "Phone number is required";
     $_SESSION["phoneno"]= $phnumErr;
    } 
   else {
     $_SESSION["phnum"] = test_input($_POST["phoneno"]);
     if(strlen($_POST["phoneno"])!=10)
     {
        $phnumErr = "PhNum_is_incorrect";
        $_SESSION["phoneno"]= $phnumErr;
     }
   }
   if (empty($_POST["sex"]))
   {
     $sexErr = "Sex_is_required";
     $_SESSION["sexErr"]= $sexErr;
    } else {  
              $_SESSION["sex"]=test_input($_POST["sex"]);
              if($_POST["sex"]=='male')
                $_SESSION["sexMale"] = test_input($_POST["sex"]); 
              else if($_POST["sex"]=='female')
                $_SESSION["sexFemale"] = test_input($_POST["sex"]); 
   }
   
   if (empty($_POST["interest"])) {
     $interestErr = "Interest is required";
     $_SESSION["interestErr"]= $interestErr;
    } 
    else {
     foreach($_POST["interest"] as $value) 
     {
           $_SESSION["interest"].=",".$value;
          
      }


   }
   if (empty($_POST["country"])) {
     $countryErr = "Country is required";
     $_SESSION["countryErr"]= $countryErr;
    } else {
     $_SESSION["country"] = test_input($_POST["country"]);
   }
  if(empty($_POST["state"]))
  {
    $_SESSION["stateErr"]="enter the state";
  }
   if(empty($_POST["state"])){
    $_SESSION["stateErr"]="enter state";
   }
    else
     {
      $_SESSION["state"]=test_input($_POST["state"]);
     }
   if (empty($_POST["address"])) 
   {
     $addErr = "Address is required";
     $_SESSION["addressErr"]= $addErr;
     echo $_SESSION["addressErr"];
     echo $addErr;
    } else {
     $_SESSION["address"]= test_input($_POST["address"]);
   }
   
    $_SESSION["submit"]=1;
  
   
}
if( isset($_SESSION["name"]) && isset($_SESSION["email"]) && isset($_SESSION["state"]) && isset($_SESSION["phnum"]) && isset($_SESSION["interest"]) && isset($_SESSION["address"]) && isset($_SESSION["sex"]) && isset($_SESSION["country"]))
{

//SAVING ALL THE SESSION DATA
    $Name=$_SESSION["name"];
    $Email=$_SESSION["email"];
    $Phone=$_SESSION["phnum"];
    $Interest=$_SESSION["interest"];
    $Address=$_SESSION["address"];
    $Country=$_SESSION["country"];
    $Sex=$_SESSION["sex"];
    $State=$_SESSION["state"];
    STATIC $counter=1;


/*
   $csvdata=$_SESSION["name"].",".$_SESSION["phnum"].",".$_SESSION["email"].",".$_SESSION["country"].",".",".$_SESSION["address"].",".$_SESSION["interest"].",".$_SESSION["sex"]."\n";
   
   
      
    $fp = fopen("data.csv","a"); 
   
   
  if($fp)
  {
    fwrite($fp,$csvdata); 
    fclose($fp); 
        
 }*/



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
    echo "New record created successfully";
    header("Location:table.php");
    exit();
    $counter++;
} 
else 
{
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  
}


}
function test_input($data) {
   $data = trim($data);
   $data = stripslashes($data);
   $data = htmlspecialchars($data);
   return $data;
}
//header("Location:index.php");
?>