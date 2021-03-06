<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grocery Store</title>
    <link rel="stylesheet" href="./css/index.css">
</head>
<body>
    <header>
        <div class="upper-container">
            <div class="navbar-logo-container">
                <a href="index.html" class="navbar-logo-text">EcoMax</a>
            </div>
            <div class="signup-container">
                <?php
                    session_start();
                    $name = $_SESSION['username'];
                    echo '<span class="login-text">Hello, ' . $name . '</span><a class="logout-text" href="logout.php">Logout</a> ' ;
                ?>
                
                <div class="open-close mobile">
                    <img src="./images/mobileNav/open.svg" alt="" class="mobile-button mobile">
                    <img src="./images/mobileNav/close.svg" alt="" class="mobile-close mobile">
                </div>
            </div>
        </div>
        <section class="mobile-nav-menu mobile">
            <nav class="mobile-menu-container">
                <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./pages/aisles.html">Aisles</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="./pages/myCart.html">My Cart</a></li>
                    <li><a href="./pages/signUp.html">Sign In</a></li>
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
                    <a class="mycart-link" href="./pages/myCart.html">
                        <span class="mycart-title">My Cart</span>
                        <img src="./images/addToCart.svg" alt="" class="shopping-cart-logo">
                    </a>
                </div>                
            </div>
            <nav class="menu-item-wrapper">
                <div class="menu-item-container">
                    <a href="./index.html" class="menu-item">Home</a>
                </div>
                <div class="menu-item-container">
                    <a href="./pages/aisles.html" class="menu-item">Aisles</a>
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
        <div class="hero-wrapper tablet mobile">
            <div class="hero-main-container tablet mobile">
                <div class="promocode-banner mobile">
                    <h1 class="promocode-amount mobile">20$ OFF</h1>
                    <h1 class="promocode-firstorder mobile">YOUR FIRST ORDER OF 80$ OR MORE</h1>
                    <h3 class="promocode mobile"> PROMO CODE<br>GROCERY15</h3>
                </div>
                <h1 class="hot-deals-title">Hot Deals</h1>
                <section class="hot-deals tablet mobile">
                    <a href="pages/bakery/burgerbun.html" class="product-item-container mobile">
                        <img src="./images/Bakery/burgerbun.png" alt="" class="product-image">
                        <h4 class="product-title">Burger Buns</h4>
                        <div class="pricing-container">
                            <p class="pricing-container-text">
                                <b class="bold">$2 / 6</b> <br>
                                Save $2 on this offer
                            </p>
                        </div>
                        <div class="aisle-cart-container">
                            <img src="../../images/addToCart.svg" alt="" class="aisle-cart-image">
                        </div>
                    </a>
                    <a href="./pages/dairyneggs/chocolatemilk.html" class="product-item-container mobile">
                        <img src="./images/DairyEggs/chocolatemilk.png" height="200px" alt="" class="product-image">
                        <h4 class="product-title">Chocolate Milk</h4>
                        <div class="pricing-container">
                            <p class="pricing-container-text">
                                <b class="bold">$3 / Gallon</b> <br>
                                Save $2 on this offer
                            </p>
                        </div>
                        <div class="aisle-cart-container">
                            <img src="../../images/addToCart.svg" alt="" class="aisle-cart-image">
                        </div>
                    </a>
                    <a href="./pages/household/garbagebags.html" class="product-item-container mobile">
                        <img src="./images/HouseholdCleaning/garbagebags.png" alt="" class="product-image">
                        <h4 class="product-title">Garbage Bags</h4>
                        <div class="pricing-container">
                            <p class="pricing-container-text">
                                <b class="bold">$6 / 40</b> <br>
                                Save $4.84 on this offer
                            </p>
                        </div>
                        <div class="aisle-cart-container">
                            <img src="../../images/addToCart.svg" alt="" class="aisle-cart-image">
                        </div>
                    </a>
                    <a href="./pages/fruitsnveggies/asparagus.html" class="product-item-container mobile">
                        <img src="../../images/FruitsVeggies/asparagus.png" alt="" class="product-image">
                        <h4 class="product-title">Asparagus</h4>
                        <div class="pricing-container">
                            <p class="pricing-container-text">
                                <b class="bold">$2.99 / Bundle</b> <br>
                                Save $1 on this offer
                            </p>
                        </div>
                        <div class="aisle-cart-container">
                            <img src="../../images/addToCart.svg" alt="" class="aisle-cart-image">
                        </div>
                    </a>
                </section>
                <div class="covid-banner mobile">
                    <img src="./images/facemask.svg" alt="" class="covid-mask mobile">
                    <h1 class="covid-warning">MAKE SURE TO WEAR YOUR MASK</h1>
                    <img src="./images/facemask.svg" alt="" class="covid-mask mobile">
                </div>
                <h1 class="covid-essentials-title">Covid Essentials</h1>
                <section class="covid-essential-items tablet mobile">
                    <a href="./pages/covidessentials/facemask.html" class="product-item-container mobile">
                        <img src="./images/CovidEssentials/facemask.png" alt="" class="product-image">
                        <h4 class="product-title">Face Mask</h4>
                        <div class="pricing-container">
                            <p class="pricing-container-text">
                                <b class="bold">$0.25 / Mask</b> <br>
                                $0.25 for each face mask
                            </p>
                        </div>
                        <div class="aisle-cart-container">
                            <img src="../../images/addToCart.svg" alt="" class="aisle-cart-image">
                        </div>
                    </a>
                    <a href="./pages/covidessentials/handsanitizer.html" class="product-item-container mobile">
                        <img src="./images/CovidEssentials/handsanitizer.png" alt="" class="product-image">
                        <h4 class="product-title">Hand Sanitizer</h4>
                        <div class="pricing-container">
                            <p class="pricing-container-text">
                                <b class="bold">$6.99 / Container</b> <br>
                                $6.99 for each container
                            </p>
                        </div>
                        <div class="aisle-cart-container">
                            <img src="../../images/addToCart.svg" alt="" class="aisle-cart-image">
                        </div>
                    </a>
                    <a href="./pages/covidessentials/latexgloves.html" class="product-item-container mobile">
                        <img src="./images/CovidEssentials/latexgloves.png" alt="" class="product-image">
                        <h4 class="product-title">Latex Gloves</h4>
                        <div class="pricing-container">
                            <p class="pricing-container-text">
                                <b class="bold">$9.99 / 100</b> <br>
                                $9.99 for 100 gloves
                            </p>
                        </div>
                        <div class="aisle-cart-container">
                            <img src="../../images/addToCart.svg" alt="" class="aisle-cart-image">
                        </div>
                    </a>
                    <a href="./pages/covidessentials/tissuebox.html" class="product-item-container mobile">
                        <img src="./images/CovidEssentials/tissuebox.png" alt="" class="product-image">
                        <h4 class="product-title">Tissue Box</h4>
                        <div class="pricing-container">
                            <p class="pricing-container-text">
                                <b class="bold">$1.33 / Box</b> <br>
                                $1.33 each tissue box
                            </p>
                        </div>
                        <div class="aisle-cart-container">
                            <img src="../../images/addToCart.svg" alt="" class="aisle-cart-image">
                        </div>
                    </a>
                </section>
            </div>
        </div>
    </main>
    <script src="./js/navbar.js" ></script>
    <footer>
        <div class="footer-main-container mobile">
            <div class="footer-delivery">
                <p class="delivery-title mobile">DELIVERY</p>
                <p class="delivery-text mobile">Monday-Friday 8:00 - 23:00<br>Sat-Sun 8:00 - 20:00</p>
            </div>
            <div class="footer-offer">
                <p class="footer-offer-title mobile">
                    OFFERS
                </p>
                <p class="footer-offer-text mobile">
                    Weekly Sale<br>Recipes and Occasions<br>Coupons
                </p>
            </div>
            <div class="footer-social-media">
                <p class="social-media-title mobile">
                    SOCIAL MEDIA
                </p>
                <p class="social-media-text mobile">
                    Call Us<br>
                    Instagram<br>
                    Email Us
                </p>
            </div>
        </div>
    </footer>

</body>
</html>