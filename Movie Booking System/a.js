// using var
var radius = 5;
var pi = Math.PI;
var area = pi * radius * radius;
console.log(area); // output: 78.53981633974483
// reassign radius
radius = 10;
area = pi * radius * radius;
console.log(area); // output: 314.1592653589793
// using let
let radius2 = 5;
const pi2 = Math.PI;
let area2 = pi2 * radius2 * radius2;
console.log(area2); // output: 78.53981633974483
// reassign radius
radius2 = 10;
area2 = pi2 * radius2 * radius2;
console.log(area2); // output: 314.1592653589793
