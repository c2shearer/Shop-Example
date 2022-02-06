const Shoes = [
    {
        id: 1,
        title: "Shoe1",
        img: "img/shoe1.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nesciunt!",
        price: 79.99
    },
    {
        id: 2,
        title: "Shoe2",
        img: "img/shoe2.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nesciunt!",
        price: 129.99
    },
    {
        id: 3,
        title: "Shoe3",
        img: "img/shoe3.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nesciunt!",
        price: 229.99
    }
]

let Cart = [];
let Count = [];

//Access Modal 
//Access ID of each Product
let info = new bootstrap.Modal(document.getElementById("info-modal"));
let cart = new bootstrap.Modal(document.getElementById("cart-modal"));
let getAdd = document.querySelectorAll('.cart-btn')
let product = document.querySelectorAll('.more-info');


product.forEach(p => {
    p.addEventListener("click", function (e) {
        document.getElementById("modal-data").innerHTML = "<p>£" + Shoes[e.target.id].price;
        info.show();
    });
});

var i = 0;

getAdd.forEach(p => {
    p.addEventListener("click", function (e) {
        Cart += `
        <div id="shoe-row-${i++} "class="row my-1">
            <div class="col-2"><img class="w-100" src="${Shoes[e.target.id].img}"></div>
            <div class="col-4">${Shoes[e.target.id].title}</div>
            <div class="col-2"><input class="w-100" type="number" placeholder="1"></div>
            <div class="col-2">${Shoes[e.target.id].price}</div>
            <div class="col-2"><div id="btn-remove" class="btn btn-danger">X</div></div>
        </div>`;
        console.log(Cart);
    })
})


document.getElementById("cart-btn").addEventListener("click", function () {
    if (Cart.length === 0) {
        document.getElementById("cart-body").innerHTML = "<strong>Your Cart is currently Empty</strong><p>Add to your Cart by pressing 'Add to Cart'";
    } else {
        document.getElementById("cart-body").innerHTML = Cart;
        let remove = document.querySelectorAll(`#btn-remove`);
        remove.forEach(element => {
            element.addEventListener("click", function (e) {
                console.log("Event Clicked! " + e.target.id);
                // DO 
            });
        });
    }
    cart.show();
});
