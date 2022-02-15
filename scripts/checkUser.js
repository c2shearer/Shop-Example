// Page Loading
let account = document.getElementById("account");

document.addEventListener("DOMContentLoaded", function (e) {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
        account.innerHTML = "My Account";
        account.addEventListener("click", function () {
            window.location.href = "account.html";
        })
    } 
    else {
        account.innerHTML = "Register";
        account.addEventListener("click", function() {
            window.location.href = "register.html"
        })
    }
})