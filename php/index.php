<?php
  $filename = "../rooms.csv";
  $mode = "r";
  $file_handle = fopen($filename, $mode);
  $file_string = file("../rooms.csv");

  echo $file_string[0];
?>
