let cartCounter = document.querySelector(".cart-counter");
let addToCartObject = {}
let addToCartArray = [];
let boolVal = false;


if(localStorage.getItem(allCookiesObject['PHPSESSID'] + "cartItems")){
    cartCounter.innerHTML = localStorage.getItem(allCookiesObject['PHPSESSID'] + "cartItems");
}
else{
    localStorage.setItem(allCookiesObject['PHPSESSID'] + "-cartItems", "0");
}
if(localStorage.getItem(allCookiesObject['PHPSESSID'] + "-addToCart")) {
    addToCartArray = JSON.parse(localStorage.getItem(allCookiesObject['PHPSESSID'] + "-addToCart"));
}
else {
    localStorage.setItem(allCookiesObject['PHPSESSID'] + "-addToCart", addToCartArray);
}

console.log(addToCartArray);
let addToCart = document.querySelector(".generic-product-button-container");
cartCounter.innerHTML = addToCartArray.length;    


addToCart.addEventListener('click', () => {

    let number = parseInt(document.querySelector(".quantity-text").innerHTML);
    let image = document.querySelector(".generic-product-image");
    let item = document.querySelector(".generic-product-title");
    let pricePer = document.querySelector(".generic-product-final-price").innerHTML;
    pricePer = pricePer.match(/\d+\.{0,1}\d{0,2}/);

    if (number > 0 && allCookiesObject.PHPSESSID) {
        for(let itm in addToCartArray) {
            if((addToCartArray[itm].name == item.innerHTML)){
                boolVal = true;
                console.log("Item already added to cart");
                alert("Item already added to cart.");
                break;
            }
        }
        if(!boolVal){
            addToCartObject.name = item.innerHTML.trim();
            addToCartObject.option = document.querySelector(".generic-product-size").children.item(document.querySelector(".generic-product-size").selectedIndex).innerHTML
            addToCartObject.pricePer = pricePer[0];
            addToCartObject.image = image.getAttribute("src");
            addToCartObject.quantity = number;
            
            //console.log(addToCartObject);
            addToCartArray.push(addToCartObject);
            cartCounter.innerHTML = addToCartArray.length;
            //console.log(addToCartArray.length);
            localStorage.setItem(allCookiesObject['PHPSESSID'] + "-cartItems", addToCartArray.length);
            localStorage.setItem(allCookiesObject['PHPSESSID'] + "-addToCart", JSON.stringify(addToCartArray));
            alert("Successfully added to cart!");
        }

    }
    else{
        if(!allCookiesObject.PHPSESSID){
            alert("You need to be logged in to do that");
        }
        else{
            alert("Quantity must be greater than one");
        }
    }
})



