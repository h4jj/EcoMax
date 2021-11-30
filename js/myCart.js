let quantityButton = document.querySelectorAll(".quantity-button");
let subtotal = document.querySelector(".subtotal");
let sum = 0;
let qst = document.querySelector(".qst");
let gst = document.querySelector(".gst");
let total = document.querySelector(".total-amount");

for(var k=0; k<addToCartArray.length; k++){
    sum += parseFloat(addToCartArray[k].pricePer);
}
subtotal.innerHTML = "$" + sum.toFixed(2);
qst.innerHTML = (sum*0.05).toFixed(2);
gst.innerHTML = (sum*0.0975).toFixed(2);
total.innerHTML = (sum + parseFloat(qst.innerHTML) + 5.0 +parseFloat(gst.innerHTML)).toFixed(2);


myCartContainer.addEventListener('click', (e) => {
    let copyArrTwo = [...addToCartArray];

    for(var i=0; i<quantityButton.length; i++) {
    

        if (e.target == quantityButton[i]) {
            let basePrice = addToCartArray[Math.floor(i/2)].pricePer / addToCartArray[Math.floor(i/2)].quantity;
            if(e.target.innerHTML == "+") {
                let currElem = e.target.parentElement.children[1];
                let tutPrice = e.target.parentElement.parentElement.children[3];
                console.log(tutPrice.innerHTML);
                currElem.innerHTML = parseInt(currElem.innerHTML) + 1;
                tutPrice.innerHTML = (parseFloat(currElem.innerHTML) * basePrice).toFixed(2);
                e.stopPropagation();

                sum += basePrice;
                subtotal.innerHTML = "$" + sum.toFixed(2);
                qst.innerHTML = (sum*0.05).toFixed(2);
                gst.innerHTML = (sum*0.0975).toFixed(2);
                total.innerHTML = (sum + parseFloat(qst.innerHTML) + 5.0 +parseFloat(gst.innerHTML)).toFixed(2);
                localStorage.removeItem(allCookiesObject['PHPSESSID'] + '-addToCart');
                copyArrTwo[Math.floor(i/2)].quantity = parseInt(currElem.innerHTML);
                copyArrTwo[Math.floor(i/2)].pricePer = parseFloat(tutPrice.innerHTML).toFixed(2);
                localStorage.setItem(allCookiesObject['PHPSESSID'] + '-addToCart', JSON.stringify(copyArrTwo));

                break;
            }
            else {
                let currElem = e.target.parentElement.children[1];
                
                if(parseInt(currElem.innerHTML) > 1){
                    let tutPrice = e.target.parentElement.parentElement.children[3];    
                    currElem.innerHTML = parseInt(currElem.innerHTML) - 1;
                    tutPrice.innerHTML = (parseFloat(currElem.innerHTML) * basePrice).toFixed(2);
                    sum -= basePrice;
                    subtotal.innerHTML = "$" + sum.toFixed(2);
                    qst.innerHTML = (sum*0.05).toFixed(2);
                    gst.innerHTML = (sum*0.0975).toFixed(2);
                    total.innerHTML = (sum + parseFloat(qst.innerHTML) + 5.0 +parseFloat(gst.innerHTML)).toFixed(2);
                    localStorage.removeItem(allCookiesObject['PHPSESSID'] + '-addToCart');
                    copyArrTwo[Math.floor(i/2)].quantity = parseInt(currElem.innerHTML);
                    copyArrTwo[Math.floor(i/2)].pricePer = parseFloat(tutPrice.innerHTML).toFixed(2);
                    localStorage.setItem(allCookiesObject['PHPSESSID'] + '-addToCart', JSON.stringify(copyArrTwo));
    
                    e.stopPropagation();
                    break;
                }
                break;
            }
        }
    }
});
