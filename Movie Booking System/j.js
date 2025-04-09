class User {
constructor(username, password) {
this.username = username;
this.password = password;
 }
}
function validate(username, password) {
 // Check if the username and password match
 if (username === password) {
 return "Login Successful";
 } else {
 return "Login Failed";
 }
}
module.exports = {
 User,
 validate
};
const { User, validate } = require('./login');
// Create a new user and validate their credentials
const user = new User('john', 'password123');
console.log(validate(user.username, user.password)); // Login Failed
const user2 = new User('jane', 'jane');
console.log(validate(user2.username, user2.password)); // Login Successful
