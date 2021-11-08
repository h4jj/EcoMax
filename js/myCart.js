let quantityButton = document.getElementsByClassName("quantity-button");
let quantityText = document.getElementsByClassName("quantity-text");
let numb = parseInt(quantityText.innerHTML);
let myCartItemPrice = document.getElementsByClassName("mycart-item-price");
let gst = document.querySelector(".gst");
let qst = document.querySelector(".qst")
let subtotal = document.querySelector(".subtotal")
let totalAmount = document.querySelector(".total-amount");
const priceOfApple = 0.59;
const priceOfMilk = 4;

let sum = 0;
for(i=0 ; i<myCartItemPrice.length; i++) {
    sum = sum + parseFloat(myCartItemPrice[i].innerHTML.match(/\d+\.{0,1}\d{0,2}/)[0]);
}

subtotal.innerHTML = '$' + (sum).toFixed(2);
qst.innerHTML = '$' + (0.0975*sum).toFixed(2);
gst.innerHTML = '$' + (0.05*sum).toFixed(2);
totalAmount.innerHTML = '$' + (5 + sum + parseFloat(qst.innerHTML.replace('$', '')) + parseFloat(gst.innerHTML.replace('$', '')));

quantityButton[0].addEventListener('click', () => {
    let numb = parseInt(quantityText[0].innerHTML) + 1;

    quantityText[0].innerHTML = (numb).toString();
    myCartItemPrice[0].innerHTML = '$' + (numb * priceOfApple).toFixed(2);

    let sum = 0;
    for(i=0 ; i<myCartItemPrice.length; i++) {
        sum = sum + parseFloat(myCartItemPrice[i].innerHTML.replace("$", ''));
    }

    subtotal.innerHTML = '$' + (sum).toFixed(2);
    qst.innerHTML = '$' + (0.0975*sum).toFixed(2);
    gst.innerHTML = '$' + (0.05*sum).toFixed(2);
    let totalSum = 0;
    totalSum = sum + (sum * 0.0975 + (sum * 0.05) + 5.0)
    totalSum = totalSum.toFixed(2);
    totalAmount.innerHTML = '$' + totalSum;
})

quantityButton[1].addEventListener('click', () => {
    let numb = parseInt(quantityText[0].innerHTML)
    if(numb > 1){
        numb = numb - 1;
        quantityText[0].innerHTML = (numb).toString();
        myCartItemPrice[0].innerHTML = '$' + (numb * 0.59).toFixed(2);
    }
    
    let sum = 0;
    for(i=0 ; i<myCartItemPrice.length; i++) {
        sum = sum + parseFloat(myCartItemPrice[i].innerHTML.replace('$', ''));
    }

    subtotal.innerHTML = '$' + (sum).toFixed(2);
    qst.innerHTML = '$' + (0.0975*sum).toFixed(2);
    gst.innerHTML = '$' + (0.05*sum).toFixed(2);
    let totalSum = 0;
    totalSum = sum + (sum * 0.0975 + (sum * 0.05) + 5.0)
    totalSum = totalSum.toFixed(2);
    totalAmount.innerHTML = '$' + totalSum;
    
})

quantityButton[2].addEventListener('click', () => {
    let numb = parseInt(quantityText[1].innerHTML) + 1;

    quantityText[1].innerHTML = (numb).toString();
    myCartItemPrice[1].innerHTML = '$' + (numb * priceOfMilk).toFixed(2);

    let sum = 0;
    for(i=0 ; i<myCartItemPrice.length; i++) {
        sum = sum + parseFloat(myCartItemPrice[i].innerHTML.replace("$", ''));
    }

    subtotal.innerHTML = '$' + (sum).toFixed(2);
    qst.innerHTML = '$' + (0.0975*sum).toFixed(2);
    gst.innerHTML = '$' + (0.05*sum).toFixed(2);
    let totalSum = 0;
    totalSum = sum + (sum * 0.0975 + (sum * 0.05) + 5.0)
    totalSum = totalSum.toFixed(2);
    totalAmount.innerHTML = '$' + totalSum;
})

quantityButton[3].addEventListener('click', () => {
    let numb = parseInt(quantityText[1].innerHTML)
    if(numb > 1){
        numb = numb - 1;
        quantityText[1].innerHTML = (numb).toString();
        myCartItemPrice[1].innerHTML = '$' + (numb * priceOfMilk).toFixed(2);
    }
    
    let sum = 0;
    for(i=0 ; i<myCartItemPrice.length; i++) {
        sum = sum + parseFloat(myCartItemPrice[i].innerHTML.replace('$', ''));
    }

    subtotal.innerHTML = '$' + (sum).toFixed(2);
    qst.innerHTML = '$' + (0.0975*sum).toFixed(2);
    gst.innerHTML = '$' + (0.05*sum).toFixed(2);
    let totalSum = 0;
    totalSum = sum + (sum * 0.0975 + (sum * 0.05) + 5.0)
    totalSum = totalSum.toFixed(2);
    totalAmount.innerHTML = '$' + totalSum;
    
})