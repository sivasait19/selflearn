//1. Write a program to display 10 quotes using an array, function

function displayQuotes() {
    let quotes = [
      "The only way to do great work is to love what you do.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "Don't watch the clock; do what it does. Keep going.",
      "The best way to predict the future is to create it.",
      "Believe you can and you're halfway there.",
      "If you can dream it, you can achieve it.",
      "Your time is limited, so don't waste it living someone else's life.",
      "Act as if what you do makes a difference. It does.",
      "The harder you work for something, the greater you'll feel when you achieve it.",
      "Dream big and dare to fail."
    ];
  
    for (let i = 0; i < quotes.length; i++) {
      console.log(quotes[i]);
    }
  }
  
  displayQuotes();

  //2. Create a function that accepts an array and alerts its length and elements starting from the 4th element. Call this from displayQuotes:
  function processArray(arr) {
    alert(`Length of array: ${arr.length}`);
    for (let i = 3; i < arr.length; i++) {
      alert(arr[i]);
    }
  }
  
  function displayQuotes() {
    let quotes = [
      "The only way to do great work is to love what you do.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "Don't watch the clock; do what it does. Keep going.",
      "The best way to predict the future is to create it.",
      "Believe you can and you're halfway there.",
      "If you can dream it, you can achieve it.",
      "Your time is limited, so don't waste it living someone else's life.",
      "Act as if what you do makes a difference. It does.",
      "The harder you work for something, the greater you'll feel when you achieve it.",
      "Dream big and dare to fail."
    ];
  
    processArray(quotes);
  }
  
  displayQuotes();
//3. Perform operations on an array:

let quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "The best way to predict the future is to create it.",
    "Believe you can and you're halfway there.",
    "If you can dream it, you can achieve it.",
    "Your time is limited, so don't waste it living someone else's life.",
    "Act as if what you do makes a difference. It does.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Dream big and dare to fail."
  ];
  
  // a. pop()
  quotes.pop();
  
  // b. Now check the length and print it to the console
  console.log(quotes.length);
  
  // c. reverse()
  quotes.reverse();
  
  // d. Access the 8th array element and print it to the console
  console.log(quotes[7]);
  
  // e. shift()
  quotes.shift();
  
  // f. Now check the length and print it to the console
  console.log(quotes.length);
  
  // g. sort()
  quotes.sort();
  console.log(quotes);
//4. Prompt the user for appropriate values based on the operation and execute array operations:

let quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "The best way to predict the future is to create it.",
    "Believe you can and you're halfway there."
  ];
  
  // a. push()
  let newQuote = prompt("Enter a new quote to add:");
  quotes.push(newQuote);
  console.log(quotes.length);
  
  // b. unshift()
  let startQuote = prompt("Enter a quote to add at the start:");
  quotes.unshift(startQuote);
  console.log(quotes.length);
  
  // c. splice()
  let index = prompt("Enter the index where you want to insert a new quote:");
  let splicedQuote = prompt("Enter the quote to insert:");
  quotes.splice(index, 0, splicedQuote);
  console.log(quotes.length);
  console.log(quotes[4]);
  
  // d. slice()
  let slicedQuotes = quotes.slice(2, 5);
  console.log(slicedQuotes);
//5. Create a Months Array and repeat question 3 and 4:

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Perform operations like in question 3 and 4 on the months array

// Concatenate arrays
let combinedArray = months.concat(quotes);

for (let i = 0; i < combinedArray.length; i++) {
  console.log(combinedArray[i]);
}

//6. Create an array with weekdays and console.log individually:

let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

for (let i = 0; i < weekdays.length; i++) {
  console.log(weekdays[i]);
}

//7.. Ask for a prompt, display remaining weekdays:

let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day = prompt("Enter a day:");

let startIndex = weekdays.indexOf(day);
if (startIndex !== -1) {
  for (let i = startIndex + 1; i < weekdays.length; i++) {
    console.log(weekdays[i]);
  }
}

//8. Ask for a prompt, display all days starting from the entered day:

let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let day = prompt("Enter a day:");

let startIndex = weekdays.indexOf(day);
if (startIndex !== -1) {
  for (let i = startIndex; i < weekdays.length + startIndex; i++) {
    console.log(weekdays[i % weekdays.length]);
  }
}


//9.Create an array, for every match, alert ‘match’:

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

arr1.forEach((item) => {
  if (arr2.includes(item)) {
    alert('match');
  }
});

//10. Create two arrays, for every match between the 2 arrays, alert ‘there is a match’:

let arr1 = ["apple", "banana", "orange"];
let arr2 = ["banana", "grape", "orange"];

arr1.forEach((item) => {
  if (arr2.includes(item)) {
    alert('there is a match');
  }
});

