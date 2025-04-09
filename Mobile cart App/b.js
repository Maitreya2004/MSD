// Define the product array
var products = [
    { productId: 1, name: "Product 1", price: 10 },
    { productId: 2, name: "Product 2", price: 20 },
    { productId: 3, name: "Product 3", price: 30 },
];
// Get the product list element
var productList = document.querySelector("#product-list");
// Add event listener to the product list element
if (productList) {
    productList.addEventListener("click", handleProductSelection);
}
// Define the event handler function
function handleProductSelection(event) {
    var target = event.target;
    if (target && target.nodeName === "LI") {
        var productId_1 = parseInt(target.dataset.productId || "0", 10);
        var selectedProduct = products.find(function (product) { return product.productId === productId_1; });
        // Check if selected product exists
        if (selectedProduct) {
            // Pass selected product to next screen
            navigateToNextScreen(selectedProduct);
        }
    }
}
function navigateToNextScreen(selectedProduct) {
    // Example code for navigating to the next screen
    console.log("Selected Product: ".concat(selectedProduct.name, " - Price: ").concat(selectedProduct.price));
}
