<?php
   $us=$_GET['username1'];
   $pw=$_GET['pas'];
   $mysql = new mysqli("localhost","root","","Ushouye");
   if ($mysql->connect_errno) {
      die($mysql->connect_errno);
   };
   $mysql->query("set names utf8");
   $sqlstr = "INSERT INTO zhuce VALUES ('$us','$pw');";
   $result = $mysql->query($sqlstr);
  
   echo $result
  

 ?>
