// Task-1: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvenNumbers = (arr) => {
  return arr.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      return accumulator + currentValue;
    }
    return accumulator;
  }, 0);
};

const result = sumOfEvenNumbers(numbers);
console.log(result);

// Task-2: Leap Year Checker
// Write a function that determines whether a given year is a leap year.

const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
};

// Example
const yearToCheck = 2024;
const result2 = isLeapYear(yearToCheck);

if (result2) {
  console.log(`${yearToCheck} is a leap year.`);
} else {
  console.log(`${yearToCheck} is not a leap year.`);
}

// Task-3: Count Vowels:
// Write a function that counts the number of vowels in a given string.
// Example: Happy New Year
const countVowels = (str) => {
  const lowercasedStr = str.toLowerCase();

  const vowels = ["a", "e", "i", "o", "u"];
  const vowelCount = lowercasedStr.split("").reduce((count, char) => {
    if (vowels.includes(char)) {
      return count + 1;
    }
    return count;
  }, 0);
  return vowelCount;
};
// Example
const testString = "Hello, World!";
const result3 = countVowels(testString);
console.log(`Number of vowels in "${testString}": ${result3}`);

// Task-4: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const filterUniqueNumbers = (inputArray) => {
  const uniqueNumbersSet = new Set(inputArray);
  const uniqueNumbersArray = [...uniqueNumbersSet];
  return uniqueNumbersArray;
};
const numbersWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 1];
const uniqueNumbers = filterUniqueNumbers(numbersWithDuplicates);

console.log(uniqueNumbers);

// Task-5: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

const findMaxValue = (numbers) => {
  return Math.max(...numbers);
};
const numbers5 = [5, 12, 8, 3, 9, 15];
const maxValue = findMaxValue(numbers5);

console.log(`The maximum value is: ${maxValue}`);

// Task-6: Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

const students = [
  { name: "Afsana", grades: [90, 85, 92] },
  { name: "Meem", grades: [88, 95, 89] },
  { name: "Afsu", grades: [78, 82, 80] },
];

const calculateAverageGrade = (student) => {
  const sum = student.grades.reduce((total, grade) => total + grade, 0);
  return sum / student.grades.length;
};

function sortStudentsByAverageGradeDescending(studentsArray) {
  return studentsArray.sort((student1, student2) => {
    const averageGrade1 = calculateAverageGrade(student1);
    const averageGrade2 = calculateAverageGrade(student2);

    return averageGrade2 - averageGrade1;
  });
}
const sortedStudents = sortStudentsByAverageGradeDescending(students);
console.log(sortedStudents);

// Task-7: Functional Programming - Reduce
// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.

const items = [
  { quantity: 3, price: 10 },
  { quantity: 2, price: 15 },
  { quantity: 5, price: 8 },
];
const calculateTotalValue = (itemsArray) => {
  return itemsArray.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
};
const totalValue = calculateTotalValue(items);
console.log(`The total value is: $${totalValue}`);

// Task-8: Array Intersection
// Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.
const findCommonElements = (arr1, arr2) => {
  // Use the filter method to create a new array with common elements
  return arr1.filter((element) => arr2.includes(element));
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const commonElements = findCommonElements(array1, array2);

console.log("Common elements:", commonElements);
