let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Kit Kat", price: .55 },
    { product: "Hi-Chew", price: 2.05 },
    { product: "Skittles", price: 4.89 },

    // TODO:  fill the array with 10 candies of various
    //        price ranges
];

// Which candies costs less than $4.00?
const allUnder4 = products.filter((product) => {
    return product.price <= 4;
});
console.log(allUnder4);

// Which candies has "M&M" its name?
const findMM1 = products.filter((productItem) => {
    if (productItem.product.indexOf("M&M") != -1) {
        return products;
    }
});
console.log(findMM1);
// same as above without using an if statement
const findMM2 = products.filter((productItem) => productItem.product.indexOf("M&M") != -1);
console.log(findMM2);

// Do we carry "Swedish Fish"?
const getSwedishFish = products.find((productItem) => productItem.product == "Swedish Fish");
console.log(getSwedishFish.length != 0);
