// Task 1 - Product Price Management
let prices = [12, 35, 20, 19, 9];
prices.push(23);
// Added new price to array
prices.shift();
// Removed the first price from array
console.log("Updated Prices: ", prices);

// Task 2 - Modifying Customer Orders
let orders = [2, 4, 3, 5, 8]
orders[2] += 5 
// Added 5 to 3rd order
let total = orders.reduce((sum, order) => sum + order, 0)
// calculation for total number of orders
console.log(orders)
console.log(total)