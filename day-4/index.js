// Task-1: Object Transformation
// Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.
// Sample array of customer objects
const customers = [
  { name: "John", purchases: 3, loyaltyPoints: 100 },
  { name: "Jane", purchases: 7, loyaltyPoints: 150 },
  { name: "Bob", purchases: 5, loyaltyPoints: 120 },
  // Add more customer objects as needed
];

// Function to double loyaltyPoints for customers with more than 5 purchases
function doubleLoyaltyPoints(customersArray) {
  // Use map to create a new array with modified loyaltyPoints
  const transformedCustomers = customersArray.map((customer) => {
    // Check if the customer has more than 5 purchases
    if (customer.purchases > 5) {
      // Double the loyaltyPoints for such customers
      return { ...customer, loyaltyPoints: customer.loyaltyPoints * 2 };
    } else {
      // Keep loyaltyPoints unchanged for other customers
      return { ...customer };
    }
  });

  return transformedCustomers;
}

// Call the function and log the result
const updatedCustomers = doubleLoyaltyPoints(customers);
console.log(updatedCustomers);

// Task-2: Function Memoization
// Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.

function memoize(func) {
  const cache = {}; // A cache object to store results

  return function (...args) {
    const key = JSON.stringify(args); // Create a unique key for the function arguments

    if (cache[key]) {
      // If the result is already in the cache, return it
      console.log("Result from cache for", args);
      return cache[key];
    } else {
      // Otherwise, compute the result and store it in the cache
      const result = func(...args);
      console.log("Result computed for", args);
      cache[key] = result;
      return result;
    }
  };
}

// Example expensive function to be memoized
function expensiveFunction(a, b) {
  // Simulate a time-consuming computation
  console.log("Executing expensive function for", a, b);
  return a + b;
}

// Wrap the expensive function with memoization
const memoizedExpensiveFunction = memoize(expensiveFunction);

// Test the memoized function
console.log(memoizedExpensiveFunction(2, 3)); // Should compute result
console.log(memoizedExpensiveFunction(2, 3)); // Should return result from cache
console.log(memoizedExpensiveFunction(4, 5)); // Should compute result
console.log(memoizedExpensiveFunction(4, 5)); // Should return result from cache

// Task-3: Object Sorting with Multiple Criteria
// Create an array of objects representing products with 'name', 'price', and 'category' properties. Write a function to sort the array first by 'category' in ascending order and then by 'price' in descending order within each category.

// Sample array of product objects
const products = [
  { name: "Laptop", price: 1200, category: "Electronics" },
  { name: "Headphones", price: 80, category: "Electronics" },
  { name: "Book", price: 20, category: "Books" },
  { name: "T-shirt", price: 25, category: "Clothing" },
  { name: "Smartphone", price: 700, category: "Electronics" },
  // Add more product objects as needed
];

// Function to sort the array by category and price
function sortProducts(productsArray) {
  // Use the sort method with a custom comparator function
  productsArray.sort((a, b) => {
    // Compare categories
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;

    // If categories are equal, compare prices in descending order
    return b.price - a.price;
  });

  return productsArray;
}

// Call the function and log the sorted result
const sortedProducts = sortProducts(products);
console.log(sortedProducts);

// Task-4:
// // Example:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(findUniqueElements(array1, array2)); // Output: [1, 2, 6, 7]

// Demonstrate the workflow of the function being used here to find out unique from 2 array

// Function to find unique elements from two arrays
function findUniqueElements(array1, array2) {
  const uniqueArray = [];

  // Iterate over array1 and add elements to uniqueArray if they are not in array2
  for (const element of array1) {
    if (!array2.includes(element)) {
      uniqueArray.push(element);
    }
  }

  // Iterate over array2 and add elements to uniqueArray if they are not in array1
  for (const element of array2) {
    if (!array1.includes(element)) {
      uniqueArray.push(element);
    }
  }

  return uniqueArray;
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const result = findUniqueElements(array1, array2);

console.log(result); // Output: [1, 2, 6, 7]

// Task-5: Review this JavaScript code . The function mysteryFunctionX takes a number as input and creates an array representing a mysterious sequence up to that number. Can you decipher what this function does? Additionally, what would be the output for the provided example (mysteriousNumberX)?
// function mysteryFunctionX(limitX) {
// const sequenceX = [1];
// for (let x = 1; x <= limitX; x++) {
// sequenceX[x] = x * sequenceX[x - 1];
//       }
//       return sequenceX;
// }

// // Example usage:
// const mysteriousNumberX = 5;
// console.log(mysteryFunctionX(mysteriousNumberX));
// // Output: [1, 1, 2, 6, 24, 120]
