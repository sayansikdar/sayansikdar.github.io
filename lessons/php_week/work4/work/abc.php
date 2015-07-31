<?

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
    
  $csvdata="name:".$_POST["name"].",email:".$_POST["email"].",phone_number:".$_POST["phoneno"].",sex:".$_POST["sex"].",interest:".$_POST["interest"].",country:".$_POST["country"].",state:".$_POST["state"].",address:".$_POST["add"].PHP_EOL;
  $fp = fopen("data.csv","a"); 
  if($fp)
  {
    fwrite($fp,$csvdata); 
        fclose($fp); 
        
  }
   echo '{"status":"SUCCESSFULLY SUBMITTED"}';
}  
 
}
 //header("Location:index.php");
?>