// Manipulate User Data

document.getElementById("submit").addEventListener("click", function () {
    const userName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password1").value;
    const confirmPassword = document.getElementById("password2").value;

    // Creating an Object within JavaScript with properties
    var user = {
        name: userName,
        email: email,
        password: password,
        phone: phone
    }

    // Storing in the local storage of the Browser
    localStorage.setItem("userInfo", JSON.stringify(user));
    window.location.href = "account.html"

})