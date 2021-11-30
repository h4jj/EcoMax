let signUpButton = document.querySelector(".signup-button");
// let logoutButton = document.querySelector(".logout-form");
let allCookies = document.cookie.split(";");
let signUpContainer = document.querySelector(".signup-container");
let allCookiesObject = {};

for (let cookie in allCookies) {
    let tempArr = allCookies[cookie].split("=");
    allCookiesObject[tempArr[0].trim()] = tempArr[1];
    tempArr = null;
}

if(allCookiesObject.PHPSESSID) {

    let welcomeMessage = document.createElement("H4");
    welcomeMessage.innerHTML = "Hello, " + allCookiesObject.name;
    signUpButton.style.display = "none";
    welcomeMessage.style.marginRight = "10px";

    let logoutForm = document.createElement('form');
    let logoutButt = document.createElement('input');
    
    logoutForm.setAttribute("class","logout-form");
    logoutForm.setAttribute("action","../../../../logout.php");
    logoutForm.setAttribute("method","post");
    logoutButt.setAttribute("class", "logout-button");
    logoutButt.setAttribute("type", "submit");
    logoutButt.setAttribute("value", "Logout");
    logoutButt.setAttribute("name", "logout");
    
    logoutForm.style.cursor = "pointer";
    logoutForm.style.display = "block";
    logoutForm.appendChild(logoutButt);
    signUpContainer.appendChild(logoutForm);
    signUpContainer.insertBefore(welcomeMessage, signUpContainer.firstChild);


}