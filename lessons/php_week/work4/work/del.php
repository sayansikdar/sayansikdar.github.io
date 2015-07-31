<?php
    if(isset($_GET["id"]))
    {
        $id = $_GET["id"];
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
    echo "Record deleted successfully";
} else
{
    echo "Error deleting record: " . mysqli_error($conn);
}
header('location:table.php');
?>
<html>
<head>
</head>
<body>




</body>
</html>