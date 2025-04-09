constticketPrice = 150;
function calculateTotalPrice(numTickets) {
 let totalPrice;
 if (numTickets> 2 &&numTickets< 6) {
totalPrice = numTickets * ticketPrice * 0.9;
 } else if (numTickets<= 2) {
totalPrice = numTickets * ticketPrice;
 } else {
alert("Sorry, booking more than 5 tickets is not allowed.");
 }
 return totalPrice;
}
function handleBookBtnClick() {
  constnumTicketsInput = document.getElementById("num-tickets");
constnumTickets = parseInt(numTicketsInput.value);
consttotalPrice = calculateTotalPrice(numTickets);
 if (totalPrice) {
alert(`Total price: Rs. ${totalPrice}`);
 }
}
constbookBtn = document.getElementById("book-btn");
bookBtn.addEventListener("click", handleBookBtnClick);
