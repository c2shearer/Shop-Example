document.addEventListener("DOMContentLoaded", function() {
    // Return Information to Website
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));

    // Deconstructing Object
    const {userName, name, phone} = userInfo
    
    // Render
    document.getElementById("name").innerHTML = `Hi <strong>${userName}</strong>`;
    document.getElementById("email").innerHTML = `${name}`;
    document.getElementById("phone").innerHTML = phone;

})

document.getElementById("logout").addEventListener("click", function() {
    localStorage.removeItem("userInfo");
    window.location.href = "index.html";
})