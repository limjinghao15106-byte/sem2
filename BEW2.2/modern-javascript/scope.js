//Variable Scope and Definitions

// 2 different types of scope(technically 3 )
// - function scope
// -block scope
// -Global Scope (by default)

//keywords to declare a variable
/*
    var - function scope
    let - block scope
    const - block scope

*/

//what is a scope?
//Scope is the area of code in which a variable is relevant
//Commonly defined by curl brackets
//Most commonly used by if/else , loops , and functions

  var name = 'jack';

if(true){
    var name = "John";
    console.log(name)
}

// printName();
console.log(name); // jack

// use block-scoped declarations: let and const 

let fruit="apple"

if (true ) {
    let fruit ="banana";
    console.log(fruit)
}

console.log (fruit);

// The difference between var + let vs const = is that const, you cannot reassign the variable
const car = 'jack';
name = 'John'; // Uncaught TypeError: Assignment to constant variable.

const ball = ["volleyball" , "basketball" , "football"]

