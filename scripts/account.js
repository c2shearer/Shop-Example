document.addEventListener("DOMContentLoaded", function() {
    // Return Information to Website
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));
    
    document.getElementById("name").innerHTML = `Hi <strong>${userInfo.name}</strong>`;
    document.getElementById("email").innerHTML = `${userInfo.email}`;
    document.getElementById("phone").innerHTML = userInfo.phone;

})