// Task 1 - Product Price Management
let prices = [12, 35, 20, 19, 9];

// Added new price to array
prices.push(23);

// Removed the first price from array
prices.shift();

console.log("Updated Prices: ", prices);

// Task 2 - Modifying Customer Orders
let orders = [2, 4, 3, 5, 8]

// Added 5 to 3rd order
orders[2] += 5 

// calculation for total number of orders
let total = orders.reduce((sum, order) => sum + order, 0)

console.log(orders)
console.log(total)

// Task 3: Employee Performance Tracking
let employee = {
    name: "John Deer",
    role: "Assistant Manager",
    performanceScore: 78,
    isActive: true
};
employee.performanceScore = 84;
employee.promotionEligible = true

console.log(employee)

// Task 4: Customer Feedback Records
let customers = [
    {customerName: "Olive", feedbackText: "Great!", rating: 4.5},
    {customerName: "Jake",  feedbackText: "Mediocre product. Do not buy", rating: 1},
    {customerName: "Lauren", feedbackText: "Broke after 2 days!", rating: 0}
];
// Add a new feedback object to the array
customers.push({customerName: "Pen", feedbackText: "Poor quality.", rating: 3});

console.log(customers)