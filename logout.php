<?php 
    session_start();
    session_destroy();
    unset($_COOKIE['PHPSESSID']);
    setcookie('PHPSESSID', null, -1, '/');
    header('Location: pages/login.php');

?>