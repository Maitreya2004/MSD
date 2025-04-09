const TICKET_PRICE = 150; // cost per ticket
const DISCOUNT_PERCENTAGE = 10; // festive season discount percentage
function bookTickets(numSeats) {
 let totalPrice = 0;
 function calculatePrice(numSeats) {
 let price = 0;
 if (numSeats<= 2) {
 price = numSeats * TICKET_PRICE;
 } else if (numSeats>= 6) {
console.log("Sorry, booking is not allowed for 6 or more seats.");
return;
 } else {
 price = numSeats * TICKET_PRICE * (1 - DISCOUNT_PERCENTAGE / 100);
 }
 return price;
 }
totalPrice = calculatePrice(numSeats);
console.log(`Total price for ${numSeats} seats: Rs. ${totalPrice}`);
}
// Example usage
bookTickets(2);
// Output: Total price for 2 seats: Rs. 300
bookTickets(7); 
// Output: Sorry, booking is not allowed for 6 or more seats.
bookTickets(4);
// Output: Total price for 4 seats: Rs. 540
