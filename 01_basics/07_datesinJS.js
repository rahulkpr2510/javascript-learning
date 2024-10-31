// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 0, 23) // in javascript the indexing of months start with zero(0)
// let myCreatedDate = new Date(2005, 9, 25, 14, 55)
// let myCreatedDate = new Date("2005-10-25") // in this case the indexing starts with one(1)
let myCreatedDate = new Date("10-25-2005")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})