//Task-1
// তোমাকে নীচের লাইন গুলো যে ফরম্যাট এ আছে একইভাবে প্রিন্ট করতে হবে-

// “Recently I heard that you’ve achieved 95% marks in your exam.
// This is brilliant!
// I wish you’ll shine in your life!	Good luck with all the barriers(/\) in your life.”

// Define the lines in the desired format using template literals
const message = `
“Recently I heard that you’ve achieved 95% marks in your exam.
This is brilliant!
I wish you’ll shine in your life!    	Good luck with all the barriers(/) in your life.”`;

// Print the message
console.log(message);

//Task-2
// তোমাকে দুইটি ইন্টিজার ভ্যেলু ইনপুট নিতে হবে এবং তাদের যোগফল, বিয়োগফল, গুণফল এবং ভাগফল নীচে দেখানো ফরম্যাট এ দেখাতে হবে।

// For example:
// Inputs are 5 and 2
// Then you’ll give output as:
// 5 + 2 = 7
// 5 - 2 = 3
// 5 * 2 = 10
// 5 / 2 = 2.50

// input
const num1 = parseInt(prompt("First Number: "));
const num2 = parseInt(prompt("Second Number: "));

//
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

//
console.log(num1 + " + " + num2 + " = " + sum);
console.log(num1 + " - " + num2 + " = " + difference);
console.log(num1 + " * " + num2 + " = " + product);
console.log(num1 + " / " + num2 + " = " + quotient.toFixed(2));

//Task-3
// তোমাকে একটি অঋণাত্মক (০ বা এর থেকে বড়) সংখ্যা নিতে হবে এবং বলতে হবে সংখ্যাটি জোড়(even) নাকি বিজোড়(odd)।

const number = parseInt(prompt("Enter a negative number: "));

if (number >= 0) {
  console.log("Sorry, you did not provide a negative number.");
} else {
  if (number % 2 === 0) {
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
}

//Task-4
// তোমাকে একটি ইন্টিজার ভ্যেলু ইনপুট নিতে হবে এবং বলতে হবে এটি ধনাত্মক(positive) নাকি ঋণাত্মক(negative) নাকি শূণ্য(zero)।
// Taking input of an integer value
const number4 = parseInt(prompt("Enter an integer: "));

// Checking if the number is positive, negative, or zero
if (number4 > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

//Task-5
// ধরো তোমার এক বন্ধু তোমাকে বলেছে সে একটি Gucci Bag কিনবে যদি তার কাছে ১০ হাজার টাকা বা এর বেশি থাকে। নাহলে যদি তার কাছে ৫ হাজার বা এর বেশি টাকা থাকে তাহলে সে Levis Bag কিনবে। আর নাহলে সে নিউ মার্কেট থেকে কিছু (Something) কিনে নিবে। সে তোমাকে আরও বললো যে, যদি সে Gucci Bag কিনতে পারে এবং তার কাছে যদি ২০ হাজার টাকা এর বেশি থাকে তাহলে সে আরও একটি Gucci Belt কিনবে।
// এখন ধরো তুমি জানো তোমার বন্ধুর কাছে কত টাকা আছে, তুমি কি বলতে পারবে সে কোন কোন জিনিস গুলো কিনবে?
