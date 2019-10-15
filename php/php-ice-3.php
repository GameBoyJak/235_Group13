<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>PhP3</title>
</head><body>
<h1>About this page and you</h1>
<?php

echo "<p>Server Name: " . $_SERVER['SERVER_NAME'] . "</p>";
echo "<p>Your Address: " . $_SERVER['REMOTE_ADDR'] . "</p>";
echo "<p>Your Browser: " . $_SERVER['HTTP_USER_AGENT'] . "</p>";
echo "<p>Server Address: " . $_SERVER['SERVER_ADDR'] . "</p>";
echo "<p>Server Software: " . $_SERVER['SERVER_SOFTWARE'] . "</p>";
echo "<p>Server Time: " . date("m/d/Y G:i:s", $_SERVER['REQUEST_TIME']) . "</p>";

?>
</body></html>