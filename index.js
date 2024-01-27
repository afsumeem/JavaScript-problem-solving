// Task: Object Transformation
// Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.

// Task: Function Memoization
// Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.

// Task: Object Sorting with Multiple Criteria
// Create an array of objects representing products with 'name', 'price', and 'category' properties. Write a function to sort the array first by 'category' in ascending order and then by 'price' in descending order within each category.

// Task:
// // Example:
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(findUniqueElements(array1, array2)); // Output: [1, 2, 6, 7]

// Demonstrate the workflow of the function being used here to find out unique from 2 array

// Task: Review this JavaScript code . The function mysteryFunctionX takes a number as input and creates an array representing a mysterious sequence up to that number. Can you decipher what this function does? Additionally, what would be the output for the provided example (mysteriousNumberX)?

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
