
let myCartContainer = document.querySelector(".mycart-product-container");
var id =0;

if(addToCartArray.length > 0) {
    
    
    addToCartArray.forEach(cartItem => {
        
        let divItem = document.createElement('div');
        divItem.setAttribute("class", "mycart-item-container");
        divItem.setAttribute("id", id);
        id += 1;
        let h2Elem = document.createElement('h2');
        h2Elem.setAttribute("class","mycart-item-title");
        let imgItem = document.createElement('img');
        divItem.appendChild(h2Elem);
        divItem.appendChild(imgItem);
        let innerDivItem = document.createElement('div');

        innerDivItem.setAttribute("id", "mycart-control");
        innerDivItem.setAttribute("class", "generic-product-quantity-container tablet mobile");

        let controlItemOne = document.createElement('button');
        let controlItemTwo = document.createElement('button');
        let quantityTextTwo = document.createElement('p');

        controlItemOne.setAttribute("class", "quantity-button");
        controlItemOne.innerHTML = "+";

        controlItemTwo.setAttribute("class", "quantity-button");
        controlItemTwo.innerHTML = "-";

        quantityTextTwo.setAttribute("class", "quantity-text");

        innerDivItem.appendChild(controlItemOne);
        innerDivItem.appendChild(quantityTextTwo);
        innerDivItem.appendChild(controlItemTwo);

        divItem.appendChild(innerDivItem);

        let h3Elem = document.createElement('h3');
        h3Elem.setAttribute("class", "mycart-item-price");
        divItem.appendChild(h3Elem);
        let spanElem = document.createElement('span');
        spanElem.setAttribute("class", "remove-from-cart");
        let innerImgItem = document.createElement('img');
        innerImgItem.style.width = "30px";
        spanElem.appendChild(innerImgItem);

        divItem.appendChild(spanElem);
        imgItem.setAttribute("class","mycart-item-image");
        innerImgItem.setAttribute("src", "../../../images/mobileNav/close.svg");
        innerImgItem.setAttribute("class", "remove-cart-item");

        h2Elem.innerHTML = cartItem.name;
        imgItem.setAttribute("src", cartItem.image);
        quantityTextTwo.innerHTML = cartItem.quantity;
        h3Elem.innerHTML = (cartItem.pricePer);
        myCartContainer.appendChild(divItem);
    })
    
}
else {
    let pTag = document.createElement('p');
    pTag.setAttribute("class", "emptyCart");
    pTag.innerHTML = "Cart is empty";

    myCartContainer.appendChild(pTag);
}

let removeCartItem = document.getElementsByClassName("remove-cart-item");
let myCartItemContainer = document.getElementsByClassName("mycart-item-container");

myCartContainer.addEventListener('click', (e) => {
    for(var i=0; i< removeCartItem.length; i++){
        if(e.target == removeCartItem[i]){
            myCartItemContainer[i].style.display = "none";

            localStorage.removeItem(allCookiesObject['PHPSESSID'] + '-addToCart');
            copyArr.splice(i,1);
            console.log(copyArr);
            localStorage.setItem(allCookiesObject['PHPSESSID'] + '-addToCart', JSON.stringify(copyArr));
            e.stopPropagation();
            break;
        }
    }
});
