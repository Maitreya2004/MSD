// initialize variables
const pricePerTicket = 150;
const numberOfTickets = 5;
const discount = 0.1;
// calculate total price
let totalPrice = pricePerTicket * numberOfTickets;
// apply discount
let discountAmount = totalPrice * discount;
let discountedPrice = totalPrice - discountAmount;
// display results
console.log(`Number of Tickets: ${numberOfTickets}`);
console.log(`Price per Ticket: Rs. ${pricePerTicket}`);
console.log(`Total Price: Rs. ${totalPrice}`);
console.log(`Discount: ${discount * 100}%`);
console.log(`Discounted Amount: Rs. ${discountAmount}`);
console.log(`Discounted Price: Rs. ${discountedPrice}`);
