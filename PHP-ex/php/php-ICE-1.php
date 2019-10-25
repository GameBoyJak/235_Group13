<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP ICE 1</title>
</head>

<body>
  <?PHP
	define("PI", 3.14159);
	$radius = 10;
	$area = PI * $radius * $radius;
	echo "<p>The area of a radius $radius circle is $area</p>";
	$circumference = 2 * PI * $radius;
	echo "<p>The circumference of a $radius circle is $circumference</p>
	?>
</body>
  </html>
