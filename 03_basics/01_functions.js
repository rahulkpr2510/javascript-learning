function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}

// sayMyName()

function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 5000, 2000));

const user = {
    username: "Rahul",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "kunal",
//     price: 499
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 2000]));