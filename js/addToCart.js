let addToCart = document.querySelector(".generic-product-button-container");

addToCart.addEventListener('click', () => {
    if (numb > 0) {
        alert("Successfully added to cart!");
    }
    else{
        alert("Quantity must be greater than one");
    }
})