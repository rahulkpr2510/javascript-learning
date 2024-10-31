// JavaScript is dynamically typed language because data type will automatically assigned at the time of compilation or code execution

// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


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