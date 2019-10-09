<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>PhP3</title>
</head><body>
<?php

foreach($_SERVER as $key=>$value){
	echo "<p>$key=>$value</p>";
}
echo $_SERVER['SERVER_ADDR'];
echo $_SERVER['SERVER_SOFTWARE'];
echo $_SERVER['REQUEST_TIME'];

?>
</body></html>