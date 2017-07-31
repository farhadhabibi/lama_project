<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<?php 
	header("Content-Type: application/json; charset=UTF-8");
	$obj = json_decode($_GET["x"], false);
	echo $obj;
	// $conn = new mysqli("localhost", "root", "");
	// $sql = "INSERT INTO $tbl_user_info (name, email, password) VALUES ('$name', '$email', '$password')";
	// 				$result = mysqli_query($con,$sql);
	// $outp = array();
	// $outp = $result->fetch_all(MYSQLI_ASSOC);
    
	// echo json_encode($outp); 
 ?>
</body>
</html>