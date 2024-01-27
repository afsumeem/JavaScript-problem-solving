// Task-1: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
const people = [
  { name: "Afsana", age: 25, gender: "female" },
  { name: "John", age: 30, gender: "male" },
  { name: "Doe", age: 22, gender: "male" },
  { name: "Meem", age: 28, gender: "female" },
];

const filterFemale = (person) => {
  return person.gender === "female";
};

const females = people.filter(filterFemale);
const names = females.map((person) => person.name);

console.log(names);

// Task-2: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "Book-1", author: "Author-1", year: 1925 },
  { title: "Book-2", author: "Author-2", year: 1960 },
  { title: "Book-3", author: "Author-3", year: 1949 },
  { title: "Book-4", author: "Author-4", year: 1951 },
];

const extractBookTitles = (book) => {
  return book.title;
};

const bookTitles = books.map(extractBookTitles);
console.log(bookTitles);

// Task-3: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (x) => {
  return x * x;
};

const double = (x) => {
  return x * 2;
};

const add5 = (x) => {
  return x + 5;
};

const squareDoubleAndAdd5 = (x) => {
  return add5(double(square(x)));
};

const inputNumber = 3;
const result = squareDoubleAndAdd5(inputNumber);

console.log(result);

// Task-4: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Honda", model: "Civic", year: 2020 },
  { make: "Ford", model: "Fusion", year: 2019 },
  { make: "Chevrolet", model: "Malibu", year: 2017 },
];
const sortByYearAscending = (car1, car2) => {
  return car1.year - car2.year;
};

const sortedCars = cars.sort(sortByYearAscending);
console.log(sortedCars);

// Task-5: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const people2 = [
  { name: "Afsana", age: 25 },
  { name: "Meem", age: 30 },
  { name: "Eve", age: 22 },
  { name: "John", age: 28 },
];
const modifyAgeByName = (people, targetName, newAge) => {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name === targetName) {
      people[i].age = newAge;
      return;
    }
  }
  console.log(`Person with name '${targetName}' not found.`);
};

modifyAgeByName(people2, "Eve", 23);
console.log(people2);
