// Non-conditional statements
const pricePerTicket = 150;
let numTickets = 3;
let totalPrice;
// Types of conditional statements
if (numTickets<= 2) { // if statement
totalPrice = pricePerTicket * numTickets;
} else if (numTickets>= 6) { // if statement
console.log("Booking not allowed for more than 5 tickets.");
} else { // switch statement
 switch (numTickets) {
 case 3:
totalPrice = pricePerTicket * numTickets * 0.9;
break;
 case 4:
totalPrice = pricePerTicket * numTickets * 0.8;
break;
 case 5:
totalPrice = pricePerTicket * numTickets * 0.75;
break;
 default:
console.log("Invalid number of tickets entered.");
 }
}
// Output the results
if (totalPrice) { // if statement
console.log(`Total price for ${numTickets} tickets is Rs. ${totalPrice}.`);
}
