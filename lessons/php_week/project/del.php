<?php
    if(isset($_POST["id"]))
    {
        $id = $_POST["id"];
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

$sql = "DELETE FROM subscriptiondata WHERE id='$id'";
if (mysqli_query($conn, $sql))
{
	echo "success";

	//header('location:table.php');
    //echo "Record deleted successfully";
} 
/*else
{
    echo "Error deleting record: " . mysqli_error($conn);
}
header('location:table.php');*/
?>
