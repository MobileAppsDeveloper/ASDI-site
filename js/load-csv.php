<?php
	header('Content-Type: text/plain');
	$csv = file_get_contents('load-csv.csv');
	echo $csv;
?>