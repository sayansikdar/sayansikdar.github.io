<?php
session_start();
$id=$_SESSION['id'];
if(isset($_POST["name"])&& isset($_POST["email"]) && isset($_POST["mobile"]) && isset($_POST["sex"]) && isset($_POST["interest"]) && isset($_POST["country"]) && isset($_POST["address"]))
	{

		$EMAIL=$_POST["email"];
		$NAME=$_POST["name"];
		$MOBILE=$_POST["mobile"];
        $SEX=$_POST["sex"];
        $INTEREST=$_POST["interest"];
        $COUNTRY=$_POST["country"];
        $ADDRESS=$_POST["address"];

		$servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "storeddata";
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        $sql = "UPDATE subscriptiondata SET Name='$NAME',Email='$EMAIL',Sex='$SEX',interest='$INTEREST',Country='$COUNTRY',Address='$ADDRESS' WHERE id='$id'";
        if (mysqli_query($conn, $sql))
        {
        echo "Record updated successfully";
        header('location:table.php');
        session_unset();
        } 
        else
        {
        echo "Error updating record: " . mysqli_error($conn);
        }
    }