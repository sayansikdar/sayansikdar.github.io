<html>
<head>

<script>
  function edit(button_ref)
  {

  	while(button_ref.tagName!=="FORM")
  	{
      button_ref=button_ref.parentElement;
    }
    console.log(button_ref.nodeName);
    if(button_ref.nodeName=='FORM')
     {
     var id=button_ref.name.value;
     var name = button_ref.name.value;
     var email = button_ref.email.value;
     var phnum = button_ref.phnum.value;
     var sex = button_ref.sex.value;
     var address = button_ref.address.value;
     var interest = button_ref.interest.value;
   
    var country = button_ref.country.value;
    var state = button_ref.state.value;
  

    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    
    xmlhttp.onreadystatechange = function()
     {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
         {
         	console.log(xmlhttp.responseText);
            var obj = JSON.parse(xmlhttp.responseText);

            for (var i in obj) 
                 form[i].value =obj[i];
         }
     };
    var parameters = "id="+id+"&name="+name+"&email="+email+"&phnum="+phnum+"&interest="+interest+"&sex="+sex+"&country="+country+"&state="+state+"&address="+address+"&edit=true";
    console.log(parameters);
    xmlhttp.open("POST", "edit.php", true);
    xmlhttp.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded");
    xmlhttp.send(parameters);
  }   
  }
function delet(button_ref)
{
	while(button_ref.tagName!=="FORM")
  	{
      button_ref=button_ref.parentElement;
    }
    console.log(button_ref.nodeName);
    if(button_ref.nodeName=='FORM')
    {
    var id=button_ref.id.value;

    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        	console.log(xmlhttp.responseText);
              if(xmlhttp.responseText=="success")
               document.body.removeChild(button_ref);
        }
    };
    var parameters = "id="+id;
    xmlhttp.open("POST", "del.php", true);
    xmlhttp.setRequestHeader("Content-type",
        "application/x-www-form-urlencoded");
    xmlhttp.send(parameters);


    }

}



</script>







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
<table border="1px" style="height:50px ;width:500px;">
<tr><td>ID</td><td>&nbsp  &nbsp </td><td>NAME</td><td>&nbsp  &nbsp </td><td>EMAIL</td><td>&nbsp  &nbsp </td><td>MOBILE</td><td>&nbsp  &nbsp </td><td>SEX</td><td>&nbsp  &nbsp </td><td>INTEREST</td><td>&nbsp  &nbsp </td><td>COUNTRY</td><td>&nbsp  &nbsp </td><td>STATE</td><td>&nbsp  &nbsp </td><td>ADRESS</td></tr></table>
<?php

if(mysqli_num_rows($result) > 0) 
{
	 $count=0;
	while($row=mysqli_fetch_assoc($result))
	{
	
	 //echo "<form method='post' id=".$count.">";

	 echo "<form method='post' id=".$count.">"."<table border='1px solid black'style=height:50px ;width:800px'><tr>"."<td style='width:50px'><input type='text' name='id' value=".$row["id"]."></td>"."<td>"." "."</td>".
	 "<td style='width:50px'><input type='text' name='name' value=".$row["Name"]."></td>"."<td>"." "."</td>"."<td style='width:50px'><input type='text' name='email' value=".$row["Email"]."></td>"."<td >"." "."</td>"."<td style='width:50px'><input type='text' name='phnum' value=".$row["Mobile"]."></td>"."<td>"." "."</td>"."<td style='width:50px'><input type='text' name='sex' value=".$row["Sex"].">
	 </td>"."<td>"." "."</td>"."<td style='width:50px'><input type='text' name='interest' value=".$row["Interest"]."></td>"."<td>"." "."</td>"."<td style='width:50px'>
	 <input type='text' name='country' value=".$row["Country"]."></td>"."<td>"." "."</td>"."<td style='width:50px'><input type='text' name='state' value=".$row["State"]."></td>"."<td>".""."</td>"."<td style='width:50px'><input type='text' name='address' value=".$row["Address"]."></td>"."<td><input type='button' value='delete' onclick='delet(this)''></td>"."<td>
	 <input type='button' value='edit' onclick='edit(this)'></td>"."</tr></table></form>";
     $count++;
    }

}

 mysqli_close($conn);
 
?>








</body>
</html>