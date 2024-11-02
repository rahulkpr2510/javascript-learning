// Immediately Invoked Function Expression (IIFE)

// there is sometimes some problem with the pollution in the global scope, so to remove the pollution of the global scope iife are used

// in this we basically wrap the function defination in parenthesis then immediately after it we write a pair of empty parenthesis to execute the function immediately

// (function chai(){
//     console.log(`DB CONNECTED`);
// })()

// we also created iife with the help of arrow functions

// whenever we want to write two iife's together , then we have to add a semi-colon at the end of the first iife to stop it's context which is not done on it's own

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})("Rahul")