// Define the product interface
interface Product {
    productId: number;
    name: string;
    price: number;
}

// Define the product array
const products: Product[] = [
    { productId: 1, name: "Product 1", price: 10 },
    { productId: 2, name: "Product 2", price: 20 },
    { productId: 3, name: "Product 3", price: 30 },
];

// Get the product list element
const productList: HTMLUListElement | null = document.querySelector("#product-list");

// Add event listener to the product list element
if (productList) {
    productList.addEventListener("click", handleProductSelection);
}

// Define the event handler function
function handleProductSelection(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target && target.nodeName === "LI") {
        const productId = parseInt(target.dataset.productId || "0", 10);
        const selectedProduct = products.find((product) => product.productId === productId);

        // Check if selected product exists
        if (selectedProduct) {
            // Pass selected product to next screen
            navigateToNextScreen(selectedProduct);
        }
    }
}

function navigateToNextScreen(selectedProduct: Product): void {
    // Example code for navigating to the next screen
    console.log(`Selected Product: ${selectedProduct.name} - Price: ${selectedProduct.price}`);
}