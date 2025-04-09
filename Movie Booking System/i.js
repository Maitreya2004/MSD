// Define a function to return a random number between min and max
function getRandomNumber(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
  }
// Define a function to simulate a stock price change
function simulateStockPriceChange() {
 const currentPrice = 100; // Set the initial price
 const minChange = -5; // Set the minimum price change as a percentage
 const maxChange = 5; // Set the maximum price change as a percentage
 // Calculate the new price based on a random price change
 const priceChangePercent = getRandomNumber(minChange, maxChange);
 const priceChangeAmount = currentPrice * (priceChangePercent / 100);
 const newPrice = currentPrice + priceChangeAmount;
 // Log the new price to the console
console.log(`Current stock price: $${newPrice.toFixed(2)}`);
}
// Define a function to start the periodic updates
function startPeriodicUpdates(interval) {
 const intervalId = setInterval(simulateStockPriceChange, interval);
setTimeout(() => {
clearInterval(intervalId);
console.log('Updates stopped');
 }, 10000); // Stop updates after 10 seconds
}// Start periodic updates every 3 seconds
startPeriodicUpdates(3000);
