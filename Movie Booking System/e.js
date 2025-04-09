constticketPrice = 150;
let numOfTickets = 0;
let totalPrice = 0;
// Prompt user to enter the number of tickets to book
numOfTickets = prompt("How many tickets would you like to book?");
// Use while loop to ensure the number of tickets entered is valid
while (numOfTickets<= 0 || numOfTickets> 5) {
 if (numOfTickets> 5) {
   console.log("Sorry, booking is not allowed for more than 5 tickets.");
 } else {
console.log("Please enter a valid number of tickets to book.");
 }
numOfTickets = prompt("How many tickets would you like to book?");
}
// Use for loop to calculate the total price of the tickets
for (let i = 1; i<= numOfTickets; i++) {
 if (numOfTickets<= 2) {
totalPrice += ticketPrice;
 } else {
totalPrice += ticketPrice * 0.9; // 10% festive season discount
 }
}
console.log(`You have booked ${numOfTickets} tickets at a price of Rs. ${ticketPrice} per
ticket.`);
console.log(`The total price for your booking is Rs. ${totalPrice.toFixed(2)}.`);
