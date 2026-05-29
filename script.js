 const products = [
{
id: 1,
name: "Men Shirt",
price: 799,
image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg"
},
{
id: 2,
name: "Women Dress",
price: 1299,
image: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg"
},
{
id: 3,
name: "Shoes",
price: 999,
image: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg"
},
{
id: 4,
name: "Watch",
price: 1499,
image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"
},
{
id: 5,
name: "Hand Bag",
price: 899,
image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg"
},
{
id: 6,
name: "T-Shirt",
price: 499,
image: "https://images.pexels.com/photos/1002640/pexels-photo-1002640.jpeg"
}
];

function loadProducts() {
    const container = document.getElementById("product-list");

    products.forEach(p => {
        let div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <img src="${p.image}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;

        container.appendChild(div);
    });
}

function addToCart(id) {
    let product = products.find(p => p.id === id);
    alert(product.name + " added to cart 🛒");
}

loadProducts();
