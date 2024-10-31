// console.log("2" > 1)
// console.log("02" > 1)

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
The reason for different outputs for line 5 and 6 is that an equality check == and comparsions > < >= <= work differently
Comparsions convert null to a number, treating it as 0.
That's why (6) null >= 0 is true and (4) null > 0 is false
*/