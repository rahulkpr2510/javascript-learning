// const tinderUser = new Object()
const tinderUSer ={}

tinderUSer.id ="123abc"
tinderUSer.name = "Yung Sammy"
tinderUSer.isLoggedIn = false

// console.log(tinderUSer);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rahul",
            lastname: "Kapoor"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {...obj1, ...obj2, ...obj3}
const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "rk@gmail.com"
    },
    {
        id: 1,
        email: "rk@gmail.com"
    },
    {
        id: 1,
        email: "rk@gmail.com"
    },
]

users[1].email
// console.log(tinderUSer);

// console.log(Object.keys(tinderUSer)) // returns an array with all the keys
// console.log(Object.values(tinderUSer)) // returns an array with all the values
// console.log(Object.entries(tinderUSer)); // returns a nested array with each key value pair as a separate array

// console.log(tinderUSer.hasOwnProperty('isLoggedIn')); // returns a boolean value that tell whether the object has the mentioned property or not


const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// course.courseInstructor

const {courseInstructor: instructor} = course
// console.log(courseInstructor)
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]