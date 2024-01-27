// Task-1: Object Transformation
// Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.

// Array of customer objects
let customers = [
  { name: "Afsana", purchases: 3, loyaltyPoints: 100 },
  { name: "Meem", purchases: 7, loyaltyPoints: 150 },
  { name: "John", purchases: 10, loyaltyPoints: 200 },
  { name: "Eve", purchases: 4, loyaltyPoints: 80 },
];

const doubleLoyaltyPoints = (customers) => {
  return customers.map((customer) => {
    if (customer.purchases > 5) {
      return { ...customer, loyaltyPoints: customer.loyaltyPoints * 2 };
    } else {
      return customer;
    }
  });
};

let updatedCustomers = doubleLoyaltyPoints(customers);
console.log(updatedCustomers);

// Task-2: Function Memoization
// Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.

// Memoization function
const memoize = (func) => {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (!cache[key]) {
      cache[key] = func.apply(this, args);
    }

    return cache[key];
  };
};

// Example expensive function to be memoized
const expensiveFunction = (n) => {
  console.log(`Computing fib(${n})...`);
  if (n <= 1) {
    return n;
  }
  return expensiveFunction(n - 1) + expensiveFunction(n - 2);
};

const memoizedExpensiveFunction = memoize(expensiveFunction);

// console.log(memoizedExpensiveFunction(5));
// console.log(memoizedExpensiveFunction(5));
// console.log(memoizedExpensiveFunction(10));
// console.log(memoizedExpensiveFunction(10));

// Task-3: Object Sorting with Multiple Criteria
// Create an array of objects representing products with 'name', 'price', and 'category' properties. Write a function to sort the array first by 'category' in ascending order and then by 'price' in descending order within each category.

// Array of product objects
let products = [
  { name: "headphone", price: 1200, category: "Electronics" },
  { name: "T-shirt", price: 25, category: "Clothing" },
  { name: "laptop", price: 100, category: "Electronics" },
  { name: "shirt", price: 50, category: "Clothing" },
  { name: "phone", price: 800, category: "Electronics" },
  { name: "jeans", price: 80, category: "Clothing" },
];

// Function to sort the array of products
const sortProducts = (products) => {
  return products.sort((a, b) => {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
    if (a.price > b.price) return -1;
    if (a.price < b.price) return 1;

    return 0;
  });
};

let sortedProducts = sortProducts(products);
console.log(sortedProducts);

// Task-4:
// // Example:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(findUniqueElements(array1, array2)); // Output: [1, 2, 6, 7]

// Demonstrate the workflow of the function being used here to find out unique from 2 array

// Task-5: Review this JavaScript code . The function mysteryFunctionX takes a number as input and creates an array representing a mysterious sequence up to that number. Can you decipher what this function does? Additionally, what would be the output for the provided example (mysteriousNumberX)?

const mysteryFunctionX = (limitX) => {
  const sequenceX = [1];
  for (let x = 1; x <= limitX; x++) {
    sequenceX[x] = x * sequenceX[x - 1];
  }
  return sequenceX;
};

// Example usage:
const mysteriousNumberX = 5;
console.log(mysteryFunctionX(mysteriousNumberX));
// Output: [1, 1, 2, 6, 24, 120]
