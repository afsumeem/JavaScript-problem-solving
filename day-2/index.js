// Task-1: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
const people = [
  { name: "Afsana", age: 25, gender: "female" },
  { name: "John", age: 30, gender: "male" },
  { name: "Doe", age: 22, gender: "male" },
  { name: "Meem", age: 28, gender: "female" },
];

function filterFemale(person) {
  return person.gender === "female";
}

const females = people.filter(filterFemale);
const names = females.map((person) => person.name);

// Print the final result
console.log(names);

// Task-2: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "Book-1", author: "Author-1", year: 1925 },
  { title: "Book-2", author: "Author-2", year: 1960 },
  { title: "Book-3", author: "Author-3", year: 1949 },
  { title: "Book-4", author: "Author-4", year: 1951 },
];

function extractBookTitles(book) {
  return book.title;
}

const bookTitles = books.map(extractBookTitles);

// Print the result
console.log(bookTitles);

// Task-3: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

function square(x) {
  return x * x;
}

function double(x) {
  return x * 2;
}

function add5(x) {
  return x + 5;
}

function squareDoubleAndAdd5(x) {
  return add5(double(square(x)));
}

const inputNumber = 3;
const result = squareDoubleAndAdd5(inputNumber);

console.log(result); // Output: 41

// Task-4: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Honda", model: "Civic", year: 2020 },
  { make: "Ford", model: "Fusion", year: 2019 },
  { make: "Chevrolet", model: "Malibu", year: 2017 },
];
function sortByYearAscending(car1, car2) {
  return car1.year - car2.year;
}

const sortedCars = cars.sort(sortByYearAscending);
// Print the sorted array
console.log(sortedCars);

// Task-5: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
  { name: "Diana", age: 28 },
];
function modifyAgeByName(peopleArray, targetName, newAge) {
  for (let i = 0; i < peopleArray.length; i++) {
    if (peopleArray[i].name === targetName) {
      peopleArray[i].age = newAge;
      return;
    }
  }
  console.log(`Person with name '${targetName}' not found.`);
}

modifyAgeByName(people2, "Charlie", 23);

// Print the updated array
console.log(people2);
