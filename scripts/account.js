document.addEventListener("DOMContentLoaded", function() {
    // Return Information to Website
    let userInfo = JSON.parse(localStorage.getItem("userInfo"));

    // Deconstructing Object
    const {name, email, phone} = userInfo
    
    // Render
    document.getElementById("name").innerHTML = `Hi <strong>${name}</strong>`;
    document.getElementById("email").innerHTML = `We'll contact you through ${email}`;
    document.getElementById("phone").innerHTML = `And your Phone Number ${phone}`;

})

document.getElementById("logout").addEventListener("click", function() {
    localStorage.removeItem("userInfo");
    window.location.href = "index.html";
})