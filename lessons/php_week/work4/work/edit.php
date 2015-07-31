<?php

session_start();


	
    if(isset($_GET["id"]))
    {
        $id = $_GET["id"];
        $_SESSION["id"]=$id;

    }

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "storeddata";


$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn)
{
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM subscriptiondata WHERE id=$id";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) > 0) 
{
	while($row=mysqli_fetch_assoc($result))
	{
		$NAME=$row["Name"];
		$EMAIL=$row["Email"];
		$SEX=$row["Sex"];
		$MOBILE=$row["Mobile"];
		$INTEREST=$row["Interest"];
		$COUNTRY=$row["Country"];
		$ADDRESS=$row["Address"];
	}
}
echo $NAME; echo $EMAIL;echo $SEX;
?>

<html>
<head>
	<title></title>
</head>
<body>
<form action="redirect.php" method="POST">
  <input type="text"  name="name" required value='<?php echo $NAME; ?>'>
  <input type="text"  name="email" required value='<?php echo $EMAIL ;?>'>
  <input type="text"  name="mobile" required value='<?php echo $MOBILE;?>'>
  <input type="text"  name="sex" required  value='<?php echo $SEX;?>' >
  <input type="text"  name="interest" required  value='<?php echo $INTEREST; ?>' >
  <input type="text"  name="country"  required value='<?php echo $COUNTRY; ?>'>
  <input type="text"  name="address" required  value='<?php echo $ADDRESS; ?>' >
  <input type="submit">
</form>

</body>
</html>

