<?php
$us=$_GET['username'];
$pw=$_GET['pwd'];
$mysql=new mysqli("localhost","root","","Ushouye");
if ($mysql->connect_errno) {
die($mysql->connect_errno);
};
$mysql->query("set names utf8");
$sqlstr="select*from zhuce where zhuce_id={$us}";
$result=$mysql->query($sqlstr);
$myArray = array();
while($record = $result->fetch_assoc()){
   array_push($myArray,$record);
   };

   if(count($myArray) > 0){
   if($myArray[0]["zhuce_mima"] == $pw){
     echo 1;
   }else{
     echo 2;
   };
   };

 ?>
