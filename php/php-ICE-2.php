<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PHP ICE 2</title>
</head>

<body>
	<ol>
	<?php
	$colors = ["red","green","blue"];
	for($i=0;$i<count($colors);$i++){
		$value = $colors[$i];
		echo "<li>$value</li>";
	}
	?>	
	</ol>
	
	<ul>
	<?php	
	$links = ["RIT"=>"http://www.rit.edu",
   	"RPI"=>"http://www.rpi.edu",
   	"MCC"=>"http://www.monroecc.edu"];
 	foreach($links as $key => $value){
 		echo "<li><a href=$value>$key</a></li>";
 	}
	?>
	</ul>
	
</body>
</html>