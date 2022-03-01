// Manipulate User Data

document.getElementById("submit").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password1").value;
    const confirmPassword = document.getElementById("password2").value;

    const checkBox = document.getElementById("checkBox");

    if (!checkBox.checked) {
        alert("Please 'tick' the box");
    } else if (checkBox.checked) {
        // Validation
        if (name === "" || phone === "" || email === "" || password === "") {
            alert("An error with text-fields");
        } else if (password != confirmPassword) {
            alert("Password doesn't match!");
        } else {
            // Creating an Object within JavaScript with properties
            var user = {
                name: name,
                email: email,
                password: password,
                phone: phone
            }
        }
    }

    // Storing in the local storage of the Browser
    localStorage.setItem("userInfo", JSON.stringify(user));
    window.location.href = "account.html"

})