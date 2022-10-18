let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream-Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 },
];

function getItemName(cartItem) {
    return cartItem.item;
}

function displayItem(cartItem) {
    console.log(cartItem);
}

// search using map(), then sort the list using sort()
let items = cart.map(getItemName).sort();
// items.sort();
items.forEach(displayItem)


function getTotalCost(currentTotal, cartItem) {
    return currentTotal + (cartItem.price * cartItem.quantity);
}
let sum = cart.reduce(getTotalCost, 0);
console.log(`Total Cost:$${sum.toFixed(2)}`);

// refactared above code to use arrow function
// let sum = cart.reduce((currentTotal, cartItem) =>
//     currentTotal + (cartItem.price * cartItem.quantity), 0
// );
// console.log(`Total Cost:$${sum.toFixed(2)}`);