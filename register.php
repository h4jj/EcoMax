<?php 


    if(isset($_POST['submit'])) {
        $first_name = $_POST['first-name'];
        $last_name = $_POST['last-name'];
        $p_code = $_POST['postal-code'];
        $pass = $_POST['password'];
        $c_pass = $_POST['c_password'];
        $email = $_POST['email'];
        
        if(file_exists('./pages/users/' . $email . '.xml')) {
            $errors[] = "That email address is already in use. Please try another one";
        }

        if($email == '' || $first_name == '' || $last_name == '' || $pass == '' || $c_pass == '') {
            $errors[] = "One of the input fields is empty.";
        }

        if($c_pass != $pass) {
            $errors[] = "Passwords don't match each other.";
        }

        if(count($errors) == 0) {
            $xml = new SimpleXMLElement('<user></user>');
            $xml->addChild('firstName', $first_name);
            $xml->addChild('lastName', $last_name);
            $xml->addChild('password', $pass);
            $xml->addChild('email', $email);
            $xml->asXML('./pages/users/' . $email . '.xml');
            header('Location: pages/login.php');
            die;
        }
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Account</title>
    <link rel="stylesheet" href="../css/index.css">
</head>
<body>
    <header>
        <div class="upper-container">
            <div class="navbar-logo-container">
                <a href="../index.html" class="navbar-logo-text">EcoMax</a>
            </div>
            <div class="signup-container">
                <a href="./pages/signUp.html" class="signup-button mobile">
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
                <div class="lower-text">Online Grocery </div>
            </div>
            <div class="search-bar-container">
                <div class="search-bar-wrapper">
                    <input type="text" class="search-bar" placeholder="Search for any item"></input>
                </div>
                <div class="shopping-cart-wrapper">
                    <a class="mycart-link" href="./myCart.html">
                        <span class="mycart-title">My Cart</span>
                        <img src="../images/addToCart.svg" alt="" class="shopping-cart-logo">
                    </a>
                </div>                
            </div>
            <nav class="menu-item-wrapper">
                <div class="menu-item-container">
                    <a href="../index.html" class="menu-item">Home</a>
                </div>
                <div class="menu-item-container">
                    <a href="./aisles.html" class="menu-item">Aisles</a>
                </div>
                <div class="menu-item-container">
                    <a href="" class="menu-item">About</a>
                </div>
            </nav>
        </div>
    </header>
    <main>
    <main>
    <script src="../../js/userLogin.js"></script>
        <div class="create-acc-wrapper">
            <section class="personal-information tablet">
                <form class="personal-form mobile" action="../register.php" method="post">
                    <h1 class="form-header">Fill in the required fields to create an account</h1>
                    <div class="input-container mobile">
                        <div class="first-name-container mobile">
                            <p class="input-text">*First Name</p>
                            <input type="text" name="first-name" class="input-name">
                        </div>
                        <div class="last-name-container mobile">
                            <p class="input-text">*Last Name</p>
                            <input type="text" name="last-name" class="input-name">
                        </div>
                        <div class="postal-code-container mobile">
                            <p class="input-text">Postal code</p>
                            <input type="text" name="postal-code" class="input-postal">
                        </div>
                        <div class="email-container mobile">
                            <p class="input-text">*Email Address</p>
                            <input type="text" name="email" class="input-name">
                        </div>
                        <div class="password-container mobile">
                            <p class="input-text">*Password</p>
                            <input type="password" name="password" class="input-name">
                        </div>
                        <div class="confirm-password-container mobile">
                            <p class="input-text">*Confirm Password</p>
                            <input type="password" name="c_password" class="input-name">
                        </div>
                    </div>
                    <div class="button-container">
                        <input type="submit" value="Submit" class="form-submit mobile" name="submit">
                    </div>
                    <div>
                        <?php 
                            if(count($errors) > 0) {
                                echo '<ul>';
                                foreach($errors as $e) {
                                    echo '<li class="register-errors">' . $e . '</li>';
                                }

                                echo '</ul>';
                            }   
                        ?>
                    </div>
                </form>
            </section>
        </div>
    </main>
    <script src="../js/navbar.js"></script>
</body>
</html>