// JavaScript is dynamically typed language because data type will automatically assigned at the time of compilation or code execution

// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);


// Reference (Non primitive)

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World!");
}


// *********************************************************************

/*
typeof Operator Results:

undefined => undefined
null => object
boolean => boolean
number => number
string => string
array => object
object => object
function => function object
symbol => symbol
*/


// *******************************************************************

// Stack (Primitive) , Heap (Non_Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@axl"
}

let userTwo = userOne

userTwo.email = "rahul@google.com"

console.log(userOne.email);
console.log(userTwo.email);