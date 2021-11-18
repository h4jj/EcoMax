let quantityButton = document.getElementsByClassName("quantity-button");
let quantityText = document.querySelector(".quantity-text");
let numb = quantityText.innerHTML;
let finalPriceText = document.querySelector(".generic-product-pricing");
let finalPrice = document.querySelector(".generic-product-final-price");
let selectWeight = document.querySelector(".generic-product-size");
let priceInKg = document.querySelector(".generic-product-pricing-text").innerHTML.match(/\d+\.{0,1}\d{0,2}/)[0];
var str = finalPriceText.innerHTML.match(/\d+\.{0,1}\d{0,2}/);
var finalPriceNumber= parseFloat(str[0]);
const whiteToastPrice = 4.0;

let counter = localStorage.getItem('counter')
quantityText.innerHTML = String(counter)
console.log(String(counter))
let tempPrice = finalPrice.innerHTML.match(/\d+\.{0,1}\d{0,2}/)
finalPrice.innerHTML = finalPrice.innerHTML.replace(tempPrice[0], (parseFloat(counter)*finalPriceNumber).toFixed(2).toString());

quantityButton[0].addEventListener('click', () => {
    //alert(finalPriceNumber);
    numb = parseInt(quantityText.innerHTML) + 1
    let tempPrice = finalPrice.innerHTML.match(/\d+\.{0,1}\d{0,2}/)
    
    if(selectWeight.options[selectWeight.options.selectedIndex].innerHTML == "Singular") {
        finalPrice.innerHTML = finalPrice.innerHTML.replace(tempPrice[0], (parseFloat(numb)*finalPriceNumber).toFixed(2).toString());
    }
    else if (selectWeight.options[selectWeight.options.selectedIndex].innerHTML == "1kg"){
        finalPrice.innerHTML = finalPrice.innerHTML.replace(tempPrice[0], (parseFloat(priceInKg)*parseFloat(numb)).toFixed(2).toString());
    }    
    else if (selectWeight.options[selectWeight.options.selectedIndex].innerHTML == "1lb") {
        finalPrice.innerHTML = finalPrice.innerHTML.replace(tempPrice[0], (priceInKg*parseFloat(numb)* 0.453).toFixed(2).toString());
    }
    else {
        finalPrice.innerHTML = finalPrice.innerHTML.replace(tempPrice[0], (finalPriceNumber*parseFloat(numb)).toFixed(2).toString());
    }
    
    localStorage.setItem('counter', numb);
    console.log(localStorage.getItem('counter'))
    quantityText.innerHTML = numb.toString();
})

quantityButton[1].addEventListener('click', () => {
    if(parseInt(quantityText.innerHTML) > 0){
        numb = parseInt(quantityText.innerHTML) - 1;
    }

    let tempPrice = finalPrice.innerHTML.match(/\d+\.{0,1}\d{0,2}/)
    
    if(selectWeight.options[selectWeight.options.selectedIndex].innerHTML == "Singular") {
        finalPrice.innerHTML = finalPrice.innerHTML.replace(tempPrice[0], (parseFloat(numb)*finalPriceNumber).toFixed(2).toString());
    }
    else if (selectWeight.options[selectWeight.options.selectedIndex].innerHTML == "1kg"){
        finalPrice.innerHTML = finalPrice.innerHTML.replace(tempPrice[0], (priceInKg*parseFloat(numb)).toFixed(2).toString());
    }
    else if (selectWeight.options[selectWeight.options.selectedIndex].innerHTML == "1lb") {
        finalPrice.innerHTML = finalPrice.innerHTML.replace(tempPrice[0], (priceInKg*parseFloat(numb)* 0.453).toFixed(2).toString());
    }
    else {
        finalPrice.innerHTML = finalPrice.innerHTML.replace(tempPrice[0], (finalPriceNumber*parseFloat(numb)).toFixed(2).toString());
    }

    localStorage.setItem('counter', numb);
    console.log(localStorage.getItem('counter'))
    quantityText.innerHTML = numb.toString();
})

