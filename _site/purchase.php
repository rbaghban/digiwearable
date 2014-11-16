<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "test_order";
	$table = "orders";

	
		$first_name		= $_POST['first_name'];
		$last_name		= $_POST['last_name'];
		$email			= $_POST['email'];
		$phone  		= $_POST['phone'];
		$detail			= $_POST['detail'];

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} else {
		echo "Connection Successful";
	}

	$sql = "INSERT INTO $table (firstname, lastname, email, phone, detail)
	VALUES ('$first_name', '$last_name', '$email', '$phone', '$detail')";

	if (mysqli_query($conn, $sql)) {
   		 echo "New record created successfully";
	} else {
   		 echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}	

mysqli_close($conn);
	
?>