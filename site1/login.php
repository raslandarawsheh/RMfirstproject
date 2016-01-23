<?php

function validate_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
//echo "Hello World";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if(empty($_POST["email"]))
		echo "Required Email Address to login"."</br>";
	else
		{
			$email = validate_input($_POST["email"]);
			if(!filter_var($email, FILTER_VALIDATE_EMAIL))			
				echo "Wrong Email address\n";
			else
				echo "Email: $email"."<br/>";
		}
		
	if(empty($_POST["password"]))
		echo "Required Password" ."</br>";
	else 
		echo "Password: ". validate_input($_POST["password"])."<br/>";
}
?>
