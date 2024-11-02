// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    // console.log(val);    
}

const greetings = "Hello World!";
for (const greet of greetings) {
    // console.log(greet);    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")
// console.log(map);

for (const [key, value] of map) {
    // console.log(`${key} :- ${value}`);    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const key of myObject) {
//     console.log(key);    
// }

// objects are not iterable using for of loop