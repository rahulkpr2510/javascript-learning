const name = "Rahul"
const repoCount = 2

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rahul-kapoor-2510')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,5) // doesn't accept negative indices
// console.log(newString);

const anotherString = gameName.slice(-16,5)
// console.log(anotherString);

const newStringOne = "     rahul     ";
// console.log(newStringOne);
// console.log(newStringOne.trim());
// trimEnd() to remove white spaces from the end of the string
// trimStart() to remove white spaces from the start of the string

const url = "https://portfolio-rahulkapoor2510.netlify.app"

// console.log(url.replace('netlify','vercel'))
// console.log(url.includes('rahul'))
// console.log(url.includes('kapur'))

// console.log(gameName.split('-'));