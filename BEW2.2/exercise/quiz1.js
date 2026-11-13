// //  Scenario: A teacher needs to automatically determine if a student has passed or failed a quiz based on their score.
// // - Task: Write a script that checks a variable called score.
// // - Rules:
// //   - If the score is 50 or higher, print "Pass".
// //   - If the score is less than 50, print "Fail".
// // - Bonus Challenge: Add an extra condition. If the score is exactly 100, print "Perfect Score!" instead of just "Pass".

// const score = 85;

// if (score =>50) {
//     console.log("Pass");
// } else if (score < 50) {
//     console.log("Fail"); 
// };



// // # Exercise 2: Counting Even Numbers (for loop + if)

// // # Scenario: You need to list out numbers, but you only want to highlight the even ones.
// // - Task: Write a for loop that counts from 1 up to 10 (inclusive).
// // - Rules:
// //   - Inside the loop, use an if statement and the remainder operator (%) to check if the current number is even.
// //   - Print only the even numbers to the console (2, 4, 6, 8, 10).


// for (i=1;i<=10;i++){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
    
    




// // # Exercise 3: Blast Off Countdown (while loop)

// // # Scenario: Simulate a rocket launch countdown.
// // - Task: Create a variable called counter and set it to 5.
// // - Rules:
// // 	- Use a while loop that runs as long as counter is greater than 0.
// // 	- Inside the loop, print the current value of counter and then decrease it by 1.
// // 	- After the loop finishes entirely, print "Blast off! 🚀".


// let counter = 5;

// while (counter > 0) {
//     console.log(counter);
//     counter--;
// }

// console.log("Blast off!");

//--------------------------------  <   Portal exercise  1 >   ---------------------------------------------------------------//

// 1.
// const numbers = [1 ,2 ,3 ,4 ,5] 
// const product = numbers.map ( temp => temp *temp )

// console.log (product)


// 2.
// const numbers = [1, 2, 3, 4, 5];
// const EvenNumber = numbers.filter (number => number >2);

// console.log (EvenNumber);




// 3.
// const numbers = [ 1 , 2, 3, 4, 5 ]
// numbers.forEach(num => {

//     console.log(num);
// }); 



// 4.
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.find(num =>num >2)

// console.log(result)


// 5.
// const number = [ 1, 2, 3, 4,5 ]
// const result = number.filter( num => num > 2 ).map(multiply => multiply * multiply);

// console.log(result)


//--------------------------------< portal exercise 2 >------------------------------------------------------------//

// const books = [
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', ratings: 5 },
//   { title: 'To Kill a Mockingbird', author: 'Harper Lee', ratings: 4.5 },
//   { title: '1984', author: 'George Orwell', ratings: 4.7 },
//   { title: 'The Catcher in the Rye', author: 'J.D. Salinger', ratings: 4 },
//   { title: 'Moby-Dick', author: 'Herman Melville', ratings: 3.5 },
// ];


// 1.
// const peakbook = books.filter( book => book.ratings > 4)
// console.log(peakbook)


2.
// const BookTitles =  books.map (book => book.title)
// console.log(BookTitles) 


3.
// const OldBook = books.find (book => book.title =1984)
// console.log (OldBook)

4.
// const sortedBooks = [...books].sort(
// (bookA, bookB) => bookA.ratings - bookB.ratings
// );

// console.log(sortedBooks);


5.
// const chain =[...books].find (book => book.ratings <6).title
// console.log(chain)

//--------------------------------< portal exercise 3 >------------------------------------------------------------//
// const student = {
//     id: '101',
//     name: 'John Doe',
//     courses: ['Math', 'English', 'Science'],
//     parents: {
//         father: 'Mr. Doe',
//         mother: 'Mrs. Doe'
//     }
// };


// // 1. 
// const { id, name, courses, parents: { father, mother } } = student;

// console.log(id);
// console.log(name);
// console.log(father);



// 2.
// const arr1 = [1, 2, 3]; 
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// const arr4 = [...arr1];


// 3.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const [first, second, third, fourth, fifth, ...secondHalf] = numbers;
// const firstHalf = [first, second, third, fourth, fifth];

// 4.
// const numbers = [1, 2, 3];

// function sum(a, b, c) {
//     return a + b + c;
// }



//--------------------------------< portal exercise 4 >------------------------------------------------------------//

// 1.Destructuring Assignment

// const book = {
//     title: 'The Hobbit',
//     author: 'J.R.R. Tolkien',
//     characters: ['Bilbo', 'Gandalf', 'Thorin', 'Smaug'],
//     publication: {
//         year: 1937,
//         publisher: 'George Allen & Unwin'
//     }
// };

// Your task is to:

// Use destructuring assignment to create variables title, author, and characters from the book object.
// Use destructuring to create variables year and publisher from the publication object inside book.

// const { title, author, characters, publication: { year, publisher } } = book;

// console.log(title);



// 2.Spread Operator


// Here are two objects:



// const obj1 = { a: 1, b: 2 };

// const obj2 = { c: 3, d: 4 };



// Your task is to:

// Use the spread operator to create a new object obj3 that includes all properties from obj1 and obj2.
// Create a new object obj4 that is a copy of obj1 using the spread operator.

// const obj3 = { ...obj1, ...obj2 };
// const obj4 = { ...obj1 };
//console.log(obj3);




// 3.Destructuring and Spread Together
// ﻿

// Here is an object with nested arrays:
// const data = {
//     numbers1: [1, 2, 3, 4],
//     numbers2: [5, 6, 7, 8]
// // };
// Your task is to:

// Use destructuring assignment to create two new arrays: array1 and array2 from data.
// Use the spread operator to create a new array array3 which is a combination of array1 and array2.


// Expected output:

// console.log( array1); // [1,2,3,4]

// console.log( array2); // [5,6,7,8]

// console.log( array3); // [1,2,3,4,5,6,7,8]   

// const data = {
//     numbers1: [1, 2, 3, 4],
//     numbers2: [5, 6, 7, 8]
// };

// const { numbers1: array1, numbers2: array2 } = data;
// const array3 = [...array1, ...array2];
// console.log(array1); 
// console.log(array2); 
// console.log(array3); 
