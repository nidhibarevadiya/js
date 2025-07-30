// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true; 
//       if (success) {
//         resolve("Data fetched successfully!");
//       } else {
//         reject("Failed to fetch data.");
//       }
//     }, 1000);
//   });
// };

// const getData = async () => {
//   try {
//     const data = await fetchData();
//     console.log("Success:", data);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

// getData();

// var  , let and const

// var names  = "rahul";

// var names;

// names = "rahul"

// console.log(names);

// names = "rahul"

// var names;

// let keyword

// let names = "jenifer"

// console.log(names);

// let names = "jenifer"

// names = "angelina"

// console.log(names);

// names = "angelina"

// let names = "jenifer"

// console.log(names);

// let names = "jenifer"

// names = "angelina"

// console.log(names);

// const keyword

// const names = "mark"

// console.log(names);

// names = "tom"

// const names = "mark"

// console.log(names);

// var a , b , c

// a = 10
// b = 20
// c = 30

// console.log(a+  b + c);

// let a , b , c

// a = 10
// b = 20
// c = 30

// console.log(a +  b + c);

// const a , b , c

// a = 10
// b = 20
// c = 30

// console.log(a +  b + c);

// block scope

// let names = "mark"

// {
//     names = "cook"
// }

// console.log(names);

// array.filter

// let num = [10 , 20 , 30 , 40 , 50 , 60 , 70]

// let newValue = num.map(function(value){
//     return value
// })

// let newValue = num.map(value => value)

// console.log(newValue);

// shllow copy and deep copy

// let array = ['html' , 'css' , 'bootstrap' , 'javascript' , 'rectjs']

// let array = [10 , 20 , 30 , 40 , 50 , 60 , [20]]

// let newArray = [...array]

// array[6][0] = 30

// console.log(array);
// console.log(newArray);

// let array = [10 , 20 , 30 , 40 , 50 , 60 , [20]]

// let newArray = JSON.parse(JSON.stringify(array))

// array[6][0] = 30

// console.log(array);
// console.log(newArray);

// let newJson = JSON.parse(JSON.stringify(array))

// newJson[0] = 100

// console.log(array);

// console.log(newJson);

// console.log(array);

// let newArray = [...array]

// newArray[2] = 90

// console.log(newArray);

// IIFE

// let profile = {
//     name:"john",
//     age:32,
//     gender:'male',
//     greek:function(){
//         console.log(`my name is ${this.name} and my age is ${this.age} and my gender is ${this.gender}`);
//     }
// }

// let profile = {
//     name:"john",
//     age:32,
//     gender:'male',
//     greek:() => console.log(`my name is ${this.name} and my age is ${this.age} and my gender is ${this.gender}`)

// }

// profile.greek()

// asynchronous Javascript

// setInterval()
// setTimeout
// clearInterval()
// clearTimeout()

// let clearTimeoutId = setTimeout(() => console.log('Hello World!'), 5000)

// const clearIntervalId = setInterval(() => console.log('Hello World!'), 2000)

// setTimeout(() => clearInterval(clearIntervalId) , 7000)

// coffee

// let store = true;

// if (store == true) {
//   setTimeout(() => {
//     console.log("coffee beans in store!");
//     setTimeout(() => {
//       console.log("coffee beans roast!");
//       setTimeout(() => {
//         console.log("coffee in Machine!");
//         setTimeout(() => {
//           console.log("coffee add milk!");
//           setTimeout(() => {
//             console.log("coffee add sugar!");
//             setTimeout(() => {
//               console.log("coffee add icecream!");
//               setTimeout(() => {
//                 console.log("coffee add icecube!");
//                 setTimeout(() => console.log("coffee on table!"), 2000);
//               }, 2000);
//             }, 2000);
//           }, 2000);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// } else {
//   console.log("store has been closed!");
// }


// Promise

// new Promise(function(resolve , reject){
//     setTimeout(() => {
//         resolve('Promise Has Been Resolved!!!')
//     } , 2000)
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })

// const promise = new Promise((resolve , reject) => {

// })


// Task 1 : store to Machine seperate Promises

// Task 2 : Machine to table seperate Promises

// Task 3 : async and await

// Task 4 : online API  [ process ] [ result ]

// Task 5 : async and await online API call line by line [timer]

// Task 6 : print result

new pro





