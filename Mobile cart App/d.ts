interface Manufacturer { id: string;
    price: number;
    }
const manufacturers: Manufacturer[] = [
{ id: '1', price: 100 },
{ id: '2', price: 200 },
{ id: '3', price: 300 },
{ id: '4', price: 400 },
];
const myFunction = (price: number): void => {
    manufacturers.forEach((manufacturer) => {
        if (manufacturer.price >= price) {
            console.log(`Manufacturer with ID ${manufacturer.id} has a price of ${manufacturer.price}`);
        }
    });
};
myFunction(250);