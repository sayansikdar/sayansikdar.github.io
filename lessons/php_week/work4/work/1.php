<?php
$NameErr="";
$EmailErr="";
$PhoneErr="";

session_start();
 if( isset( $_SESSION['counter']) && isset($_SESSION['name1']) && isset($_SESSION['email1']))
   {
      $_SESSION['counter'] += 1;
      $NameErr=$_SESSION['name1'];
      $EmailErr=$_SESSION['email1'];
      $PhoneErr=$_SESSION['phone1'];
      session_unset();
   }
   else if (isset($_SESSION['counter'])) 
   {

   	$_SESSION['counter']+=1;
   }
   else
   {
      $_SESSION['counter'] = 1;
   }

?>
<html>
 <head>
 </head>
 <body>
 <form action="abc.php" method="POST">
 <strong>Name</strong><input type="text" name="name"><span>*<?php echo $NameErr; ?></span>
 <strong>Email</strong><input type="text" name="email"><span>*<?php echo $EmailErr ;?></span>
 <strong>PhoneNO</strong><input type="Number" name="phoneno"><span>*<?php echo $PhoneErr;?></span>
   <input type="submit">
 </form>



 </body>
 </html>