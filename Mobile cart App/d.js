var manufacturers = [
    { id: '1', price: 100 },
    { id: '2', price: 200 },
    { id: '3', price: 300 },
    { id: '4', price: 400 },
];
var myFunction = function (price) {
    manufacturers.forEach(function (manufacturer) {
        if (manufacturer.price >= price) {
            console.log("Manufacturer with ID ".concat(manufacturer.id, " has a price of ").concat(manufacturer.price));
        }
    });
};
myFunction(250);
