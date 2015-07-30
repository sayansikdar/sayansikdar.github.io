<html>
<head>
</head>
<body>
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

//ATTEMPT FOR NORMALIZING DATA 
/*
//fetching data from subscriptiondata
$sql = "SELECT * FROM subscriptiondata";
$result = mysqli_query($conn,$sql);
$rowFromSubscription = mysqli_fetch_assoc($result);
$userId = $rowFromSubscription['id'];
//fetching data from maps table
$sql1="SELECT iid FROM maps WHERE id='$userId'";
$result1= mysqli_query($conn,$sql1);
$iid=array();
foreach ($variable as $key => $value) {
	# code...
}
while($row = mysqli_fetch_assoc($result1)) {
	$iid = $row['iid'];
	echo $iid;
}
//fetching data from interest table
$sql2="SELECT name FROM interest WHERE iid='$iid'";
$result2=mysqli_query($conn,$sql2);
$name=array();
while($rowFromInterest=mysqli_fetch_assoc($result2))
{
  $name=$rowFromInterest['name'];
  echo $name; die();
}


*/
$sql = "SELECT * FROM subscriptiondata";
$result = mysqli_query($conn,$sql);

?>
<table border="1px">
<tr><td>ID</td><td>&nbsp  &nbsp </td><td>NAME</td><td>&nbsp  &nbsp </td><td>EMAIL</td><td>&nbsp  &nbsp </td><td>MOBILE</td><td>&nbsp  &nbsp </td><td>SEX</td><td>&nbsp  &nbsp </td><td>INTEREST</td><td>&nbsp  &nbsp </td><td>COUNTRY</td><td>&nbsp  &nbsp </td><td>ADRESS</td><td>&nbsp  &nbsp </td> <td>&nbsp  &nbsp </td></tr>
<?php

if(mysqli_num_rows($result) > 0) 
{
	while($row=mysqli_fetch_assoc($result))
	{
	 echo"<tr>"."<td>".$row["id"]."</td>"."<td>"." "."</td>"."<td>".$row["Name"]."</td>"."<td>"." "."</td>"."<td>".$row["Email"]."</td>"."<td>"." "."</td>"."<td>".$row["Mobile"]."</td>"."<td>"." "."</td>"."<td>".$row["Sex"]."</td>"."<td>"." "."</td>"."<td>".$row["Interest"]."</td>"."<td>"." "."</td>"."<td contenteditable='true'>".$row["Country"]."</td>"."<td>"." "."</td>"."<td>".$row["Address"]."</td>"."<td><a href='del.php?id=$row[id]'>DELETE</a></td>"."<td><a href='edit.php?id=$row[id]'>EDIT</a></td>"."</tr>";
    }

}

 mysqli_close($conn);
 ?>

</table>






</body>
</html>