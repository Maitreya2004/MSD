let filled = false;
let btn = document.querySelector('.btn');
let scoop = document.querySelector('.scoop');
let heading = document.querySelector('h1');
let message = document.querySelector('p');
let body = document.querySelector('body');
function toggleScoop() {
 filled = !filled;
scoop.classList.toggle('filled');
 if (filled) {
heading.innerText = 'Yum, Ice Cream!';
message.innerText = 'Enjoy your ice cream cone!';
body.style.backgroundColor = '#ffa500';
btn.innerText = 'Empty Cone';
 } else {
heading.innerText = 'Ice Cream Cone';
message.innerText = 'Click the button to fill the cone';
body.style.backgroundColor = '#f0f0f0';
btn.innerText = 'Fill Cone';
 }
}
