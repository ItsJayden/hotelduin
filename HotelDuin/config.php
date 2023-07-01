<?php

$server = "localhost";
$username = "root";
$password = "";
$database = "HotelDuin";

$conn = mysqli_connect($server,$username,$password,$database);

if(!$conn){
    die("<script>alert('connection Failed.')</script>");
}
