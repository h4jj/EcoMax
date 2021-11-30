<?php
$error = false;
$notExist = false;
if(isset($_POST['submit'])) {
    $password = $_POST['pass'];
    $username = $_POST['name'];

    if(file_exists('users/' . $username . '.xml')) {
        $xml = new SimpleXMLElement('users/' . $username . '.xml', 0 , true);
        if($password == $xml->password) {
            session_start();
            $fname = $xml->firstName;
            $_SESSION['username'] = $username;
            if($username == 'admin') {
                header('Location: ../admin.php');
                die;
            }
            setcookie('name', $fname, time() + 86400, '/');
            header('Location: ../index.html');
            die;

        }
        else {
            $error = true;
        }
    }
    else {
        $notExist = true;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>
    <link rel="stylesheet" href="../css/index.css">
</head>
<body>
    <header>
        <div class="navbar-container">
            <div class="upper-container">
                <div class="navbar-logo-container">
                    <a href="../index.html" class="navbar-logo-text">EcoMax</a>
                </div>
                <div class="signup-container">
                    <a href="../pages/signUp.html" class="signup-button mobile">
                        Sign In
                    </a>
                    <div class="open-close mobile">
                        <img src="../images/mobileNav/open.svg" alt="" class="mobile-button mobile">
                        <img src="../images/mobileNav/close.svg" alt="" class="mobile-close mobile">
                    </div>
                </div>
            </div>
            <section class="mobile-nav-menu mobile">
                <nav class="mobile-menu-container">
                    <ul>
                        <li><a href="../index.html">Home</a></li>
                        <li><a href="./aisles.html">Aisles</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="./myCart.html">My Cart</a></li>
                        <li><a href="./signUp.html">Sign In</a></li>
                    </ul>
                </nav>
            </section>
            <div class="lower-container mobile">
                <div class="lower-text-container">
                    <div class="lower-text">Online Grocery</div>
                </div>
                <div class="search-bar-container">
                    <div class="search-bar-wrapper">
                        <input type="text" class="search-bar" placeholder="Search for any item"></input>
                    </div>
                    <div class="shopping-cart-wrapper">
                        <a class="mycart-link" href="./myCart.html">
                            <span class="mycart-title">My Cart</span>
                            <img src="../images/addToCart.svg" alt="" class="shopping-cart-logo">
                            <span class="cart-counter">0</span>
                        </a>
                    </div>               
                </div>
                <div class="menu-item-wrapper">
                    <div class="menu-item-container">
                        <a href="../index.html" class="menu-item">Home</a>
                    </div>
                    <div class="menu-item-container">
                        <a href="./aisles.html" class="menu-item">Aisles</a>
                    </div>
                    <div class="menu-item-container">
                        <a href="" class="menu-item">About</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main>
    <main>
    <script src="../../js/userLogin.js"></script>
        <section class="login-wrapper">
            <div class="login-container tablet">
                <form action="./login.php" method="post" class="login-form mobile">
                    <div class="form-header">
                        <h1 class="form-header-text">Login</h1>
                    </div>
                    <div class="input-par">
                        <h3 class="login-input-text">Email</h3>
                        <input type="text" class="form-input" name="name">
                    </div>
                    <div class="input-par-two">
                        <h3 class="login-input-text">Password</h3>
                        <input type="password" name="pass" class="form-input">
                    </div>
                    
                    <div class="form-button-container">
                        <input type="submit" value="Sign In" name="submit" class="form-button">
                    </div>  
                    <div class="form-button-container-two">
                        <a href="../pages/createAccount.html" class="form-button">Create Account</a>
                    </div>
                    <?php 
                        if($error) {
                            echo '<p class="php-text-output">Invalid password, please try again. </p>';
                        }
                        if($notExist) {
                            echo '<p class="php-text-output">Email does not exist. </p>';
                        }
                    ?>                
                </form>
            </div>
        </section>
    </main>
    <script src="../js/navbar.js"></script>
</body>
</html>