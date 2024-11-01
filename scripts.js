document.getElementById("productForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("productName").value;
    const price = document.getElementById("productPrice").value;
    const imageUrl = document.getElementById("productImage").value;

    addProduct(name, price, imageUrl);
    clearForm();
});

function addProduct(name, price, imageUrl) {
    const productContainer = document.getElementById("products-container");

    const productCard = document.createElement("div");
    productCard.className = "product-card";

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = name;

    const productInfo = document.createElement("div");
    productInfo.className = "product-info";
    productInfo.textContent = name;

    const productPrice = document.createElement("div");
    productPrice.className = "product-price";

    const priceText = document.createElement("p");
    priceText.textContent = `$ ${parseFloat(price).toFixed(2)}`;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "🗑️";
    deleteBtn.onclick = function () {
        productContainer.removeChild(productCard);
    };

    productPrice.appendChild(priceText);
    productPrice.appendChild(deleteBtn);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    productCard.appendChild(productPrice);

    productContainer.appendChild(productCard);
}

function clearForm() {
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productImage").value = "";
}
