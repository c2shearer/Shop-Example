// Manipulate User Data

document.getElementById("submit").addEventListener("click", function () {
    const userName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const passwordOne = document.getElementById("password1").value;
    const passwordTwo = document.getElementById("password2").value;
    console.log(userName + email + phone + passwordOne + passwordTwo);
})